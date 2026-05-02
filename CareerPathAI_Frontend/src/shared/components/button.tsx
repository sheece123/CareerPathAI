import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className,
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1",

        // Sizes
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-5 py-2.5 text-base": size === "lg",
        },

        // Variants
        {
          "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]":
            variant === "primary",

          "bg-gray-200 text-gray-700 hover:bg-gray-300":
            variant === "secondary",

          "border border-gray-300 text-gray-700 hover:bg-gray-50":
            variant === "outline",
        },

        // States
        {
          "w-full": fullWidth,
          "opacity-60 cursor-not-allowed": disabled || loading,
        },

        className
      )}
    >
      {loading ? "Loading..." : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;