import { Component } from '@angular/core';

interface NavItem {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

interface InfoItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-siemens-header',
  templateUrl: './siemens-header.component.html',
  styleUrls: ['./siemens-header.component.scss'],
})
export class SiemensHeaderComponent {
  searchValue = '';
  isSearchFocused = false;
  hoveredNavIndex: number | null = null;
  isUserMenuOpen = {
    partners: false,
    user: false,
  };

  navItems: NavItem[] = [
    { label: 'Dashboard', isActive: true },
    { label: 'Parts For My Unit', hasDropdown: true },
    { label: 'Agreement Parts Pricing' },
    { label: 'Parts Store' },
    { label: 'GS Distributed & TI', hasDropdown: true },
    { label: 'Upload Parts' },
    { label: 'Quick Order Pad' },
  ];

  infoItems: InfoItem[] = [
    { label: 'Customer', value: 'Thai Acrylic Fibre' },
    { label: 'Site', value: 'T_SARABURI001' },
    { label: 'Machine#', value: 'TB475/0000' },
  ];

  actionButtons = ['Change Unit', 'Siemens Energy Contacts'];

  toggleUserMenu(type: 'partners' | 'user'): void {
    this.isUserMenuOpen[type] = !this.isUserMenuOpen[type];
  }

  setHoveredNav(index: number | null): void {
    this.hoveredNavIndex = index;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  onSearch(): void {
    if (!this.searchValue.trim()) {
      return;
    }

    console.log('Search:', this.searchValue);
  }
}
