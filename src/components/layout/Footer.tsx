import { CONTACT } from "@/data/contact";
import { BrandLogo } from "./BrandLogo";
import { PageContainer } from "./PageContainer";
import { SocialLinks } from "../social/SocialLinks";
export function Footer() {
  return (
    <footer className="bg-surface py-8">
      <PageContainer width="narrow">
        <div className="flex flex-col items-center justify-between gap-7 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="flex items-center gap-8">
            <BrandLogo />
            <SocialLinks variant="simple" />
          </div>
          <address className="text-base not-italic leading-tight">
            <p className="text-xl text-primary">Entre em contato</p>
            <a href={`mailto:${CONTACT.email}`} className="block rounded-sm">
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="block rounded-sm">
              {CONTACT.phoneDisplay}
            </a>
          </address>
        </div>
        <p className="mt-7 flex items-center justify-center gap-3 text-lg">
          <span aria-hidden="true" className="text-2xl">
            ©
          </span>{" "}
          {CONTACT.copyrightName} - {new Date().getFullYear()}
        </p>
      </PageContainer>
    </footer>
  );
}
