import { CONTACT } from "@/data/contact";
const socialItems = [
  {
    id: "github",
    label: "GitHub",
    href: CONTACT.github,
    image: "icon_github.svg",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: CONTACT.linkedin,
    image: "icon_linkedin.svg",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: CONTACT.instagram,
    image: "icon_insta.svg",
  },
  {
    id: "email",
    label: "E-mail",
    href: `mailto:${CONTACT.email}`,
    image: "icon_gmail.svg",
  },
] as const;
export function SocialLinks({
  variant = "circle",
}: {
  variant?: "circle" | "simple";
}) {
  const items =
    variant === "simple"
      ? [socialItems[1], socialItems[2], socialItems[0]]
      : socialItems;
  return (
    <div
      className={`flex items-center ${variant === "circle" ? "gap-4" : "gap-2"}`}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          target={item.id === "email" ? undefined : "_blank"}
          rel={item.id === "email" ? undefined : "noopener noreferrer"}
          className={
            variant === "circle"
              ? "social-circle inline-flex size-12 items-center justify-center rounded-full text-ink hover:opacity-75"
              : "inline-flex size-7 items-center justify-center rounded-sm text-primary hover:opacity-60"
          }
        >
          <span
            aria-hidden="true"
            className={
              variant === "circle" ? "size-12 bg-current" : "size-6 bg-current"
            }
            style={{
              maskImage: `url(/images/${variant === "simple" ? "simple_" : ""}${item.image})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </a>
      ))}
    </div>
  );
}
