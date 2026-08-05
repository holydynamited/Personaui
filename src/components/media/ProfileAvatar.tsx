

type AvatarSize = "sm" | "md" | "lg" | "xl";

type Props = {
  src: string;
  alt?: string;
  size?: AvatarSize;
  className?: string;
};

const sizes: Record<AvatarSize, string> = {
  sm: "size-8",
  md: "size-12",
  lg: "size-20",
  xl: "size-48",
};

export default function ProfileAvatar({
  src,
  alt = "Profile avatar",
  size = "md",
  className = "",
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={`
        ${sizes[size]}
        shrink-0 rounded-full object-cover
        ${className}
      `}
    />
  );
}