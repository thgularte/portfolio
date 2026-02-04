type HoverEffectProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number
};

export function HoverEffect({ children, className = "", scale = 1.02 }: HoverEffectProps) {
  return (
    <div
      className={`
        transition-all duration-300 ease-out
        hover:scale-[${scale}]
        hover:shadow-xl
        focus-within:scale-[1.02]
        focus-within:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
