type HoverEffectProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number;
};

export function HoverEffect({
  children,
  className = "",
  scale = 1.02,
}: HoverEffectProps) {
  return (
    <div
      style={{ "--hover-scale": scale } as React.CSSProperties}
      className={`
        transition-all duration-300 ease-out
        hover:shadow-xl
        focus-within:shadow-xl
        hover:scale-[var(--hover-scale)]
        focus-within:scale-[var(--hover-scale)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
