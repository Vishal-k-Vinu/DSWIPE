"use client";

import { useState, useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface FloatingInputProps {
  label: string;
  error?: string;
  isTextarea?: boolean;
  rows?: number;
  inputProps?: InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function FloatingInput({
  label,
  error,
  isTextarea = false,
  rows = 5,
  inputProps = {},
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const id = useId();
  const errorId = `${id}-error`;
  const hasValue = Boolean(inputProps.value && String(inputProps.value).length > 0);
  const isActive = focused || hasValue;

  const baseWrapperClasses = `relative w-full group`;
  const baseBorderClasses = `
    w-full bg-transparent border-b-2 px-0 pt-6 pb-2
    text-text-primary font-[family-name:var(--font-body)] text-base
    outline-none transition-colors duration-300
    ${error
      ? "border-error"
      : focused
        ? "border-text-primary"
        : "border-border hover:border-text-muted"
    }
  `;

  const labelClasses = `
    absolute left-0 transition-all duration-300 pointer-events-none
    font-[family-name:var(--font-body)]
    ${isActive
      ? "top-0 text-xs " + (error ? "text-error" : focused ? "text-text-primary" : "text-text-muted")
      : "top-6 text-base text-text-muted"
    }
  `;

  return (
    <div className={baseWrapperClasses}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`${baseBorderClasses} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
      ) : (
        <input
          id={id}
          className={baseBorderClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-xs text-error font-[family-name:var(--font-body)] animate-shake flex items-center gap-1" role="alert">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
