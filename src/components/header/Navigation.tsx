import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

export function NavItem({ label, hasDropdown = false, isActive = false }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative px-4 py-2.5 text-sm flex items-center gap-2 rounded-lg
        font-medium transition-all duration-300
        ${isActive 
          ? 'bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)] text-white shadow-md' 
          : 'text-white hover:bg-[var(--header-surface-hover)] hover:scale-105'
        }
        active:scale-95
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      {hasDropdown && (
        <ChevronDown className={`
          w-3.5 h-3.5 transition-all duration-300
          ${isHovered ? 'rotate-180' : ''}
        `} />
      )}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--header-accent)] rounded-full shadow-[var(--header-shadow-glow)]" />
      )}
    </button>
  );
}

export function Navigation() {
  return (
    <nav className="flex items-center gap-1 bg-[var(--header-surface)] px-2 py-1.5 rounded-xl border border-[var(--header-border)]">
      <NavItem label="Dashboard" isActive />
      <NavItem label="Parts For My Unit" hasDropdown />
      <NavItem label="Agreement Parts Pricing" />
      <NavItem label="Parts Store" />
      <NavItem label="GS Distributed & TI" hasDropdown />
      <NavItem label="Upload Parts" />
      <NavItem label="Quick Order Pad" />
    </nav>
  );
}
