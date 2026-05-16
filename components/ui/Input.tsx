"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  dark?: boolean;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  dark?: boolean;
}

function getInputStyles(dark: boolean, error?: string) {
  const base = dark
    ? `
      w-full h-12 px-4 bg-white/5 text-[#1A1A1A] text-base
      border border-white/15 rounded-[--radius-btn]
      transition-all duration-150 ease-out
      placeholder:text-[#1A1A1A]/25
      focus:border-[--color-accent] focus:outline-none
      focus:bg-white/8
      disabled:bg-white/5 disabled:text-[#1A1A1A]/30 disabled:cursor-not-allowed
      aria-invalid:border-[--color-error]
    `
    : `
      w-full h-12 px-4 bg-white text-[--color-ink] text-base
      border-2 border-[--color-border] rounded-[--radius-btn]
      transition-all duration-150 ease-out
      placeholder:text-[--color-ink-faint]
      focus:border-[--color-accent] focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,168,56,0.12)]
      disabled:bg-[--color-surface-2] disabled:text-[--color-ink-faint] disabled:cursor-not-allowed
      aria-invalid:border-[--color-error] aria-invalid:shadow-[0_0_0_3px_rgba(198,40,40,0.12)]
    `;
  return base.trim().replace(/\s+/g, " ");
}

function getLabelStyles(dark: boolean) {
  return dark
    ? "block text-sm font-medium text-[#1A1A1A]/70 mb-2"
    : "block text-sm font-medium text-[--color-ink] mb-2";
}

function getErrorStyles() {
  return "mt-2 text-sm text-[--color-error] flex items-center gap-1";
}

function getHintStyles() {
  return "mt-2 text-sm text-[--color-ink-faint]";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, dark = false, className = "", id, disabled, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = hint ? `${inputId}-hint` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={getLabelStyles(dark)}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={errorId || hintId}
          className={`${getInputStyles(dark, error)} ${className}`}
          {...props}
        />
        {error && (
          <p id={errorId} className={getErrorStyles()} role="alert">
            {error}
          </p>
        )}
        {!error && hint && <p id={hintId} className={getHintStyles()}>{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, dark = false, className = "", id, disabled, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const hintId = hint ? `${textareaId}-hint` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className={getLabelStyles(dark)}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={errorId || hintId}
          className={`
            ${getInputStyles(dark, error)}
            min-h-[120px] py-3 resize-y
            ${className}
          `.trim().replace(/\s+/g, " ")}
          {...props}
        />
        {error && (
          <p id={errorId} className={getErrorStyles()} role="alert">
            {error}
          </p>
        )}
        {!error && hint && <p id={hintId} className={getHintStyles()}>{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };