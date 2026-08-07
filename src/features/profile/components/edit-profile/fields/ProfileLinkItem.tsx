import { X } from "lucide-react";
import { LINK_ICONS } from "@/features/profile/types/side-cards/linkicons";
import type { LinkType } from "@/features/profile/types/side-cards/profilelinks";

type Props = {
  type: LinkType;
  value: string;
};

export default function ProfileLinkField({ type, value }: Props) {
  const icon = LINK_ICONS[type];

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-small text-secondary">{icon.title}</p>

      <div className="flex items-center gap-3 rounded-md border border-border-strong px-3 py-2">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 shrink-0 text-muted"
        >
          <path d={icon.path} />
        </svg>

        <input
          type="url"
          defaultValue={value}
          className="
            min-w-0 flex-1
            bg-transparent
            text-body text-primary
            outline-none
          "
        />

        <button
          type="button"
          className="text-muted transition-colors hover:text-primary"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}