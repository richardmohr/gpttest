interface ActionButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function ActionButton({ variant = 'secondary', children, onClick }: ActionButtonProps) {
  const baseClasses = "px-4 py-2.5 text-sm rounded-lg font-medium transition-all duration-300 whitespace-nowrap active:scale-95";
  
  const variantClasses = {
    primary: `
      bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)] 
      text-white shadow-md
      hover:shadow-[var(--header-shadow-glow)] hover:scale-105
    `,
    secondary: `
      text-[var(--header-accent)] 
      bg-[var(--header-surface)] border border-[var(--header-border)]
      hover:bg-[var(--header-surface-hover)] hover:border-[var(--header-accent)]
      hover:shadow-md hover:scale-105
    `
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
