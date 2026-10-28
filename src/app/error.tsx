"use client";
import { PageContainer } from "@/components/layout/PageContainer";
import { PrimaryButton } from "@/components/ui/primitives";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <PageContainer className="py-section text-center">
      <h1 className="text-page-title">Não foi possível carregar a página</h1>
      <p className="my-6">Tente novamente em alguns instantes.</p>
      <PrimaryButton onClick={reset}>Tentar novamente</PrimaryButton>
    </PageContainer>
  );
}
