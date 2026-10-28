import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { buttonBase, buttonStyles } from "@/components/ui/primitives";
export default function NotFound() {
  return (
    <PageContainer className="py-section text-center">
      <p className="text-6xl text-primary">404</p>
      <h1 className="mt-5 text-page-title">Página não encontrada</h1>
      <p className="mb-8 mt-4">
        O endereço que você procura não está disponível.
      </p>
      <Link href="/" className={`${buttonBase} ${buttonStyles.secondary}`}>
        Voltar ao início
      </Link>
    </PageContainer>
  );
}
