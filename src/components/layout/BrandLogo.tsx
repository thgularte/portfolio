import Image from "next/image";
import Link from "next/link";
export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="Theodor Gularte — início"
      className="inline-flex shrink-0 rounded-sm hover:opacity-70"
    >
      <Image src="/images/icon_tg.svg" alt="" width={52} height={52} />
    </Link>
  );
}
