"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outlineLight";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[--color-accent] text-[--color-primary] font-semibold hover:bg-[--color-accent-dark] active:bg-[--color-accent-dark]/90 disabled:bg-[--color-surface-2] disabled:text-[--color-ink-faint] shadow-[0_4px_16px_rgba(232,168,56,0.25)] hover:shadow-[0_4px_28px_rgba(232,168,56,0.45)] hover:-translate-y-px active:translate-y-0 active:shadow-[0_2px_8px_rgba(232,168,56,0.25)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
  secondary:
    "bg-transparent text-[--color-ink] border-2 border-[--color-border] hover:border-[--color-ink-faint] hover:bg-[--color-surface] active:bg-[--color-surface-2] disabled:border-[--color-border] disabled:text-[--color-ink-faint] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
  ghost:
    "bg-transparent text-[--color-ink-muted] hover:bg-[--color-surface] hover:text-[--color-ink] active:bg-[--color-surface-2] disabled:text-[--color-ink-faint] transition-all duration-150 ease-out",
  outlineLight:
    "bg-transparent border border-white/30 text-[#1A1A1A] hover:bg-white/10 hover:border-white/50 active:bg-white/15 disabled:border-white/20 disabled:text-[#1A1A1A]/40 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-[--radius-btn]",
  md: "h-10 px-4 text-base gap-2 rounded-[--radius-btn]",
  lg: "h-12 px-6 text-lg gap-2.5 rounded-[--radius-btn]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center font-medium
          transition-all duration-150 ease-out
          focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2
          disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `.trim().replace(/\s+/g, " ")}
        {...props}
      >
        {loading ? (
          <Loader2
            className="animate-spin"
            size={size === "sm" ? 14 : size === "md" ? 16 : 18}
          />
        ) : (
          leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };