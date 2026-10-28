import type { ReactNode } from "react";
import { PageContainer } from "../layout/PageContainer";
import { IconBox } from "../ui/primitives";
export function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}
export function SectionTitle({
  title,
  highlightedText,
  trailingText,
  center = false,
  small = false,
}: {
  title?: string;
  highlightedText?: string;
  trailingText?: string;
  center?: boolean;
  small?: boolean;
}) {
  return (
    <h2
      className={`${center ? "text-center" : "text-left"} ${small ? "text-2xl" : "text-section-title"} leading-tight`}
    >
      <span
        aria-hidden="true"
        className={highlightedText && !title ? "text-ink" : "text-primary"}
      >
        {"// "}
      </span>
      {title}
      {title && highlightedText ? " " : ""}
      {highlightedText && (
        <span className="text-primary">{highlightedText}</span>
      )}
      {trailingText}
    </h2>
  );
}
export function PageHero({
  icon,
  title,
  highlightedText,
  subtitle,
  compact = false,
}: {
  icon: ReactNode;
  title: string;
  highlightedText: string;
  subtitle: string;
  compact?: boolean;
}) {
  return (
    <>
      <PageContainer
        className={`flex flex-col items-center pt-10 text-center ${compact ? "pb-6" : "pb-16 sm:pb-20"}`}
      >
        <IconBox className="mb-7 size-17 rounded-card [&_svg]:size-9">
          {icon}
        </IconBox>
        <h1 className="text-page-title leading-tight">
          {title} <span className="text-primary">{highlightedText}</span>
        </h1>
        <p className="mt-1 text-lg text-soft">{subtitle}</p>
      </PageContainer>
      <SectionDivider />
    </>
  );
}
