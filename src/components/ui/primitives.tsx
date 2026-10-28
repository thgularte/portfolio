import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, LoaderCircle } from "lucide-react";
import type {
  ButtonHTMLAttributes,
  ComponentProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export function Card({
  variant = "default",
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "outlined" | "highlighted" | "compact";
}) {
  const variants = {
    default: "bg-surface card-padding",
    outlined: "border border-primary/75 bg-bg card-padding",
    highlighted: "border border-primary bg-surface card-padding",
    compact: "bg-surface card-compact",
  };
  return (
    <div
      className={`rounded-card ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function IconBox({
  children,
  variant = "neutral",
  className = "",
}: {
  children: ReactNode;
  variant?: "neutral" | "primary" | "education" | "work";
  className?: string;
}) {
  const variants = {
    neutral: "bg-soft/15 text-ink",
    primary: "bg-primary/20 text-primary",
    education: "bg-education/25 text-education",
    work: "bg-work/30 text-work",
  };
  return (
    <span
      aria-hidden="true"
      className={`icon-box inline-flex shrink-0 items-center justify-center rounded-card ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-primary/40 bg-primary/5 px-4 py-0.5 text-sm leading-none text-soft">
      {children}
    </span>
  );
}

const technologyIcons: Record<string, string> = {
  TypeScript: "typescript",
  Python: "python",
  Electron: "electron",
  JavaScript: "javascript",
  PostgreSQL: "postgres",
  React: "react",
  Tailwind: "tailwind",
  "Node.js": "node",
};

export function TechTag({
  children,
  highlightOnHover = false,
}: {
  children: string;
  highlightOnHover?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border border-primary/65 bg-bg px-3 py-1 text-base text-ink ${
        highlightOnHover
          ? "transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
          : ""
      }`}
    >
      {technologyIcons[children] ? (
        <Image
          src={`/icons/${technologyIcons[children]}.svg`}
          alt=""
          width={16}
          height={16}
          className="shrink-0"
        />
      ) : (
        <Code2 size={16} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}

export function TechTags({
  items,
  highlightOnHover = false,
}: {
  items: string[];
  highlightOnHover?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechTag key={item} highlightOnHover={highlightOnHover}>
          {item}
        </TechTag>
      ))}
    </div>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-sm hover:underline ${className}`}
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}
export function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return href.startsWith("/") ? (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-sm hover:underline"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </Link>
  ) : (
    <ExternalLink href={href}>{children}</ExternalLink>
  );
}

export const buttonStyles = {
  primary: "bg-primary text-bg hover:bg-primary/80",
  secondary: "bg-ink text-bg hover:bg-soft",
};
export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-card px-5 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-60";
export function PrimaryButton({
  children,
  loading,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: ReactNode;
}) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`${buttonBase} ${buttonStyles.primary} ${className}`}
    >
      {loading ? (
        <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
}
export function SecondaryButton({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`${buttonBase} ${buttonStyles.secondary} ${className}`}
    >
      {children}
    </a>
  );
}
export function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`list-disc space-y-0.5 pl-5 marker:text-soft ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
