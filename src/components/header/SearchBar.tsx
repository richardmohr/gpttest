import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`
      flex items-center bg-[var(--header-glass-bg)] rounded-xl overflow-hidden 
      w-full max-w-[380px] backdrop-blur-sm
      border border-[var(--header-glass-border)]
      transition-all duration-300
      ${isFocused ? 'shadow-lg ring-2 ring-[var(--header-accent)] ring-opacity-30' : 'shadow-sm'}
    `}>
      <div className="flex items-center gap-3 px-4 py-2.5 flex-1">
        <Search className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
          isFocused ? 'text-[var(--header-accent)]' : 'text-gray-400'
        }`} />
        <input
          type="text"
          placeholder="Search by SE Part name, SE Part #"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-400"
        />
      </div>
      <button 
        className="
          shrink-0 bg-gradient-to-br from-[var(--header-accent)] to-[var(--header-accent-dark)] 
          text-white px-5 py-2.5 transition-all duration-300 h-full
          hover:shadow-[var(--header-shadow-glow)] hover:scale-105
          active:scale-95
        "
        onClick={() => console.log('Search:', searchValue)}
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}
