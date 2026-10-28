import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import type { ReactNode } from "react";
import { BulletList, Card, IconBox } from "../ui/primitives";
export function Timeline({ children }: { children: ReactNode }) {
  return <div className="timeline mt-8">{children}</div>;
}
export function TimelineItem({
  title,
  organization,
  organizationUrl,
  period,
  type,
  highlighted = false,
  children,
}: {
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  type: "education" | "work";
  highlighted?: boolean;
  children?: ReactNode;
}) {
  const Icon = type === "education" ? GraduationCap : BriefcaseBusiness;
  return (
    <article className="timeline-item">
      <Card
        variant="compact"
        className={`p-4 sm:p-4 ${highlighted ? "" : "bg-transparent"}`}
      >
        <div
          className={`flex items-start gap-4 ${children ? "border-b border-line pb-3" : ""}`}
        >
          <IconBox variant={type}>
            <Icon size={29} />
          </IconBox>
          <div className="min-w-0">
            <h3 className="text-xl leading-tight text-primary">{title}</h3>
            {organizationUrl ? (
              <a
                href={organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs leading-tight text-soft hover:text-primary hover:underline"
              >
                {organization}
                <ArrowUpRight
                  size={12}
                  className="shrink-0"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <p className="text-xs leading-tight text-soft">{organization}</p>
            )}
            <p className="mt-1 flex w-fit items-center gap-1.5 text-xs leading-tight text-soft">
              <CalendarDays size={13} aria-hidden="true" />
              {period}
            </p>
          </div>
        </div>
        {children && <div className="pt-4">{children}</div>}
      </Card>
    </article>
  );
}
export function ExperienceRole({
  title,
  responsibilities,
}: {
  title: string;
  responsibilities: string[];
}) {
  return (
    <div className="mb-4 last:mb-0">
      {title && (
        <h4 className="mb-2 text-lg text-primary">
          {"// "}
          {title}
        </h4>
      )}
      <BulletList
        items={responsibilities}
        className={`text-base leading-tight ${title ? "ml-8" : ""}`}
      />
    </div>
  );
}
