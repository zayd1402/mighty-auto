"use client";

import { type HTMLAttributes, type ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

const sizeStyles: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[900px]",
  lg: "max-w-[1200px]",
  full: "max-w-none",
};

function Container({
  children,
  size = "lg",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full px-4 sm:px-6 lg:px-8
        ${sizeStyles[size]}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
