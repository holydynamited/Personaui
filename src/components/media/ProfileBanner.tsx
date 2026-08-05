type BannerSize = "sm" | "md" | "lg";

type Props = {
  src: string;
  alt?: string;
  size?: BannerSize;
  className?: string;
};

const sizes: Record<BannerSize, string> = {
  sm: "h-24",
  md: "h-36",
  lg: "h-48",
};

export default function ProfileBanner({
  src,
  alt = "Profile banner",
  size = "lg",
  className = "",
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={`
        w-full
        ${sizes[size]}
        object-cover
        ${className}
      `}
    />
  );
}

