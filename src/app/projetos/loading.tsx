import { PageContainer } from "@/components/layout/PageContainer";
export default function Loading() {
  return (
    <PageContainer className="py-section">
      <p role="status" className="text-center text-2xl">
        Carregando projetos...
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2" aria-hidden="true">
        <div className="h-64 animate-pulse rounded-card bg-surface" />
        <div className="h-64 animate-pulse rounded-card bg-surface" />
      </div>
    </PageContainer>
  );
}
