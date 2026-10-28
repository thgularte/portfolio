import type { ReactNode } from "react";
export function PageContainer({
  children,
  width = "standard",
  className = "",
}: {
  children: ReactNode;
  width?: "standard" | "narrow" | "wide";
  className?: string;
}) {
  return (
    <div data-width={width} className={`page-container ${className}`}>
      {children}
    </div>
  );
}
