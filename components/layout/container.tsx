/**
 * Componente Container para layout responsivo.
 * 
 * Centraliza conteúdo com largura máxima e padding lateral.
 * Ideal para headers, footers e seções principais do portfolio.
 * 
 * @param props - Propriedades do componente
 * @param props.children - Conteúdo interno (logo, nav, textos, etc.)
 * @param props.className - Classes Tailwind adicionais (opcional, default "")
 * 
 * @example
 * ```tsx
 * <Container className="flex justify-between items-center py-4">
 *   <Logo />
 *   <Nav />
 * </Container>
 * ```
 * 
 * @returns Div centralizada com max-w-5xl e padding responsivo.
 */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-6 ${className}`}>
      {children}
    </div>
  );
}
