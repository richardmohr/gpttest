import { Logo } from './header/Logo';
import { SearchBar } from './header/SearchBar';
import { UserMenu, UserAvatar } from './header/UserMenu';
import { Navigation } from './header/Navigation';
import { InfoBar } from './header/InfoBar';
import { ActionButton } from './header/ActionButton';
import { CartButton } from './header/CartButton';

export function SiemensHeader() {
  return (
    <header className="w-full bg-gradient-to-b from-[var(--header-bg-gradient-from)] to-[var(--header-bg-gradient-to)] text-[var(--header-text)] shadow-xl">
      {/* Top Section */}
      <div className="border-b border-[var(--header-border)] backdrop-blur-sm">
        <div className="px-8 py-4 flex items-center justify-between gap-8">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-8">
            <Logo />
            <SearchBar />
          </div>

          {/* Right: User Controls */}
          <div className="flex items-center gap-3">
            <UserMenu variant="partners" label="Partners" />
            <UserMenu 
              variant="user" 
              label="Dirk Klaasen" 
              icon={<UserAvatar name="Dirk Klaasen" />} 
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-8 py-4 flex items-center justify-between gap-8 backdrop-blur-sm">
        {/* Left: Info Bar */}
        <InfoBar />

        {/* Center: Navigation */}
        <div className="flex-1 flex justify-center">
          <Navigation />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ActionButton variant="secondary">Change Unit</ActionButton>
          <ActionButton variant="secondary">Siemens Energy Contacts</ActionButton>
          <CartButton itemCount={1} />
        </div>
      </div>
    </header>
  );
}
