import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "telegram" | "white";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex w-full sm:w-auto items-center justify-center rounded-2xl font-medium transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-[#DC2626] text-white hover:bg-red-700 focus:ring-red-600 py-4 px-8 text-lg shadow-lg shadow-red-600/30":
              variant === "primary",
            "bg-[#229ED9] text-white hover:bg-[#1E8CC0] focus:ring-[#229ED9] py-4 px-8 text-lg shadow-lg shadow-[#229ED9]/30":
              variant === "telegram",
            "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 py-3 px-6 text-base shadow-sm":
              variant === "white",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
