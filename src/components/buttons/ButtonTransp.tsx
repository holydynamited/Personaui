type ButtonSize = "sm" | "md" | "lg";

type Props = {
  value: string;
  size?: ButtonSize;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 ",
  md: "h-10 px-4 ",
  lg: "h-12 px-5 ",
};

export default function ButtonTransp({
  value,
  size = "md",
}: Props) {
  return (
    <button
      className={`
        ${sizeClasses[size]}
        rounded-lg
        border border-gray-500
        bg-white/10
        backdrop-blur
        shadow-lg shadow-black/5
        transition-all duration-200 ease-out
        active:scale-95
      `}
    >
      {value}
    </button>
  );
}