import { LINK_ICONS } from "../../../types/side-cards/linkicons";
import type { ProfileLink } from "../../../types/side-cards/profilelinks";
import { ChevronRight } from "lucide-react";
import type { SideCardSize } from "../SideCard";

type Props = {
  links: ProfileLink[];
  size?: SideCardSize;
  fullWidth?: boolean;
};

const sizes: Record<SideCardSize, string> = {
  sm: "w-64 h-48 p-4",
  md: "w-80 h-64 p-6",
  lg: "w-96 h-80 p-8",
};

export default function LinksCard({
  links,
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
        Links
      </p>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {links.map(({ type, link }) => {
            const icon = LINK_ICONS[type];

            return (
              <a
                key={type}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex w-full items-center justify-between
                  rounded-md px-2 py-2
                  text-body font-medium text-secondary
                  transition-colors
                  hover:bg-sidebar-hover hover:text-primary
                "
              >
                <span className="flex min-w-0 items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>

                  <span className="truncate">
                    {icon.title}
                  </span>
                </span>

                <ChevronRight
                  className="size-4 shrink-0"
                  strokeWidth={2.5}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}