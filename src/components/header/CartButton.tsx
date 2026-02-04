import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  itemCount?: number;
}

export function CartButton({ itemCount = 0 }: CartButtonProps) {
  return (
    <button className="
      relative px-5 py-2.5 
      bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)]
      rounded-lg transition-all duration-300 
      flex items-center gap-2.5 shadow-md
      hover:shadow-[var(--header-shadow-glow)] hover:scale-105
      active:scale-95
      group
    ">
      <ShoppingCart className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
      <span className="text-sm text-white font-medium">Cart</span>
      {itemCount > 0 && (
        <div className="
          absolute -top-2 -right-2 
          bg-gradient-to-br from-red-500 to-red-600
          text-white text-xs w-6 h-6 
          flex items-center justify-center rounded-full 
          font-semibold shadow-lg
          ring-2 ring-[var(--header-bg)]
          animate-pulse
        ">
          {itemCount}
        </div>
      )}
    </button>
  );
}
