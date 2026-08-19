import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-[#171512] hover:bg-accent-strong shadow-[0_8px_24px_-8px_rgba(201,134,47,0.55)]",
  secondary:
    "bg-surface text-foreground border border-border hover:border-accent hover:text-accent",
  ghost:
    "bg-transparent text-foreground hover:text-accent underline underline-offset-4 decoration-border hover:decoration-accent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

type LinkButtonProps = BaseProps & {
  href: string;
};

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: NativeButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
