import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface UserMenuProps {
  variant?: 'partners' | 'user';
  label: string;
  icon?: React.ReactNode;
}

export function UserMenu({ variant = 'user', label, icon }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="
        flex items-center gap-2.5 px-4 py-2 rounded-xl
        bg-[var(--header-surface)] border border-[var(--header-border)]
        hover:bg-[var(--header-surface-hover)] hover:border-[var(--header-accent)]
        transition-all duration-300
        hover:shadow-md hover:scale-105
        active:scale-95
      "
      onClick={() => setIsOpen(!isOpen)}
    >
      {variant === 'partners' && (
        <div className="relative">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)] flex items-center justify-center shadow-md">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border-2 border-[var(--header-bg)]" />
        </div>
      )}
      {variant === 'user' && icon}
      <span className="text-sm font-medium">{label}</span>
      <ChevronDown className={`
        w-3.5 h-3.5 text-[var(--header-text-muted)] 
        transition-all duration-300
        ${isOpen ? 'rotate-180 text-[var(--header-accent)]' : ''}
      `} />
    </button>
  );
}

export function UserAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="
      w-8 h-8 rounded-full 
      bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)]
      flex items-center justify-center
      shadow-md ring-2 ring-[var(--header-accent)] ring-opacity-20
    ">
      <span className="text-xs text-white font-semibold">{initials}</span>
    </div>
  );
}
