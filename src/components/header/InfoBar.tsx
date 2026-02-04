interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="
      flex flex-col gap-1 px-4 py-2 rounded-lg
      bg-[var(--header-surface)] border border-[var(--header-border)]
      hover:bg-[var(--header-surface-hover)] hover:border-[var(--header-accent)]
      transition-all duration-300
      hover:shadow-md hover:scale-105
      group
    ">
      <span className="text-[10px] text-[var(--header-text-muted)] uppercase tracking-wider leading-none font-medium">
        {label}:
      </span>
      <span className="text-sm font-semibold leading-none group-hover:text-[var(--header-accent)] transition-colors duration-300">
        {value}
      </span>
    </div>
  );
}

export function InfoBar() {
  return (
    <div className="flex items-start gap-3">
      <InfoItem label="CUSTOMER" value="Thai Acrylic Fibre" />
      <InfoItem label="SITE" value="T_SARABURI001" />
      <InfoItem label="MACHINE#" value="TB475/0000" />
    </div>
  );
}
