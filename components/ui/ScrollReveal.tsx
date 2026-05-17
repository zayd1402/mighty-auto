"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

/**
 * Kowalski Motion System — ScrollReveal Hook
 *
 * Orchestrated reveal: element enters viewport with spring easing,
 * optionally delayed for stagger choreography.
 *
 * Usage:
 *   const { ref, isVisible } = useReveal({ delay: 120, direction: 'up' });
 *   <div ref={ref} className={isVisible ? 'is-visible' : ''}>
 *
 * Or use the className shortcut:
 *   <div ref={ref} className={`reveal${isVisible ? ' is-visible' : ''}`}>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -50px 0px",
    delay = 0,
    direction = "up",
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const className = (base: string) =>
    `${base} ${base === "reveal" ? "reveal" : base === "reveal-scale" ? "reveal-scale" : base === "reveal-left" ? "reveal-left" : "reveal-right"}${isVisible ? " is-visible" : ""}`;

  return {
    ref,
    isVisible,
    /** Apply directly: className="reveal" + on mount adds "is-visible" */
    className: (base: string) => `${base}${isVisible ? " is-visible" : ""}`,
    /** CSS custom property for inline delay */
    style: delay
      ? ({ "--delay": `${delay}ms` } as React.CSSProperties)
      : undefined,
  };
}

/**
 * ScrollReveal wrapper component.
 * Children animate in when scrolled into view.
 *
 * @param delay    — stagger offset in ms (default 0)
 * @param direction — 'up' | 'left' | 'right' | 'scale' (default 'up')
 * @param className — additional classes
 * @param threshold — intersection threshold (default 0.12)
 */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.12,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
  threshold?: number;
}) {
  const { ref, isVisible, style } = useReveal({ delay, direction, threshold });

  const directionClass =
    direction === "scale"
      ? "reveal-scale"
      : direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : "reveal";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${directionClass}${isVisible ? " is-visible" : ""} ${className}`.trim()}
      style={
        delay
          ? ({
              ...style,
              transitionDelay: `${delay}ms`,
            } as React.CSSProperties)
          : style
      }
    >
      {children}
    </div>
  );
}

/**
 * StaggerReveal — applies orchestrated reveal to each child
 * with 80ms stagger between items.
 */
export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 80,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stagger-children${isVisible ? " is-visible" : ""} ${className}`.trim()}
      style={
        isVisible
          ? undefined
          : { opacity: 0, transform: "translateY(24px)" }
      }
    >
      {children}
    </div>
  );
}
