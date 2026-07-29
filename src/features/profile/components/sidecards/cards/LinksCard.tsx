import { LINK_ICONS } from "../../../types/side-cards/linkicons";
import { LINKS } from "../../../types/side-cards/profilelinks";
import { ChevronRight } from "lucide-react";

export default function LinksCard() {
  return (
    <div
      className="flex min-h-40 flex-col justify-center gap-4
      rounded-md border border-border-strong bg-sidebar p-6
      "
    >
          <p className="text-body font-semibold text-primary">Links</p>

      {LINKS.map(({ type, link }) => {
        const icon = LINK_ICONS[type];

        return (

          <div className="text-body font-medium text-secondary hover:text-primary">
              <a
                key={type}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-md px-1 py-2"
              >
                <span className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 shrink-0"
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>

                  <span>{icon.title}</span>
                </span>

                <ChevronRight
                  className="size-5 shrink-0"
                  strokeWidth={2.5}
                />
              </a>
          </div>
        );
      })}
    </div>
  );
}