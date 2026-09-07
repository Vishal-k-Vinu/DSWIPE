interface SectionDividerProps {
  to?: string;
  accent?: boolean;
  flip?: boolean;
}

export default function SectionDivider({
  to = "var(--bg-surface)",
  accent = false,
  flip = false,
}: SectionDividerProps) {
  return (
    <div className="section-divider" style={{ transform: flip ? "scaleY(-1)" : "none" }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 L1440,60 L1440,80 L0,80 Z" fill={to} />
        {accent && (
          <line
            x1="0"
            y1="0"
            x2="1440"
            y2="60"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.4"
          />
        )}
      </svg>
    </div>
  );
}
