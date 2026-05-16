import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface PillProps {
  label: string;
  value: ReactNode;
  hasChevron?: boolean;
  className?: string;
}

/**
 * The signature "Body Like Tea" rounded pill — used for inputs and selectable chips.
 */
export function Pill({ label, value, hasChevron, className = "" }: PillProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-3xl bg-gradient-pill shadow-pill px-4 py-3 min-w-24 ${className}`}
    >
      <div className="flex items-center gap-1 text-foreground/95 text-sm font-display">
        <span>{label}</span>
        {hasChevron && <ChevronDown className="h-3 w-3" strokeWidth={3} />}
      </div>
      <div className="text-foreground font-display text-2xl leading-tight tracking-tight">
        {value}
      </div>
    </div>
  );
}

interface ChipProps {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function Chip({ active, onClick, children, className = "" }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-display text-lg px-6 py-2.5 rounded-2xl transition-all duration-200 ${
        active
          ? "bg-gradient-pill shadow-pill text-foreground scale-105"
          : "bg-primary/40 text-foreground/80 hover:bg-primary/60"
      } ${className}`}
    >
      {children}
    </button>
  );
}
