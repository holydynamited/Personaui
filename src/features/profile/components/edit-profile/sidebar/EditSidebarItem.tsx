

import { type tab } from "@/features/profile/types/edit-profile/editProfileTab";

type Props = {
  id: tab;
  label: string;
  activeSection: tab;
  onSelect: (id: tab) => void;

};

export default function EditSidebarItem({
  id,
  label,
  activeSection,
  onSelect,
}: Props) {
  const isActive = activeSection === id;

  return (
    <li>
      <button
        onClick={() => onSelect(id)}
        className={`
          w-full  px-3 py-2.5
          text-left text-small transition-colors

          ${
            isActive
              ? "border-l-2 border-accent bg-sidebar-hover text-primary"
              : "border-l-2 border-transparent text-secondary hover:bg-sidebar-hover hover:text-primary"
          }
        `}
      >
        {label}
      </button>
    </li>
  );
}