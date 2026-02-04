export function Logo() {
  return (
    <div className="flex items-center gap-4 group">
      {/* Siemens Energy Logo */}
      <div className="flex flex-col gap-0.5 transition-transform duration-300 group-hover:scale-105">
        <div className="flex items-baseline gap-1">
          <span className="text-base tracking-wider uppercase font-semibold">SIEMENS</span>
        </div>
        <div className="text-[10px] tracking-wider uppercase text-[var(--header-text-muted)] transition-colors duration-300 group-hover:text-[var(--header-accent)]">
          energy
        </div>
      </div>
      
      <div className="h-8 w-px bg-gradient-to-b from-transparent via-[var(--header-border)] to-transparent" />
      
      <span className="text-sm font-medium">Energy Shop</span>
    </div>
  );
}
