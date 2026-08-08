import type { SideCardSize } from "../SideCard";

type Props = {
  value: string;
  size?: SideCardSize;
  fullWidth?: boolean;
};

const sizes: Record<SideCardSize, string> = {
  sm: "w-64 h-32 p-4",
  md: "w-80 h-40 p-5",
  lg: "w-96 h-48 p-6",
};

export default function AboutCard({
  value,
  size = "md",
  fullWidth = false,
}: Props) {
  return (
    <div
      className={`
        ${sizes[size]}
        ${fullWidth ? "!w-full" : ""}
        flex flex-col
        rounded-md border border-border-strong
        bg-sidebar
      `}
    >
      <p className="mb-3 text-body font-semibold text-primary">
        About
      </p>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <p className="text-body leading-6 text-secondary">
          {value}
        </p>
      </div>
    </div>
  );
}