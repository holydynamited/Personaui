import { sidebarSections } from "@/features/profile/types/edit-profile/editProfileSidebar";
import EditSidebarItem from "./EditSidebarItem";
import { useState } from "react";
import type { tab } from "@/features/profile/types/edit-profile/editProfileTab";



type Props={
  onTabChange:(tab:tab)=>void
}

export default function EditProfileSidebar({onTabChange}:Props) {
  const [activeSection, setActiveSection] =
    useState<tab>("basic");

  function handleSectionChange(id: tab) {
    setActiveSection(id);
    onTabChange(id);
  }

  return (
    <aside className="w-52 shrink-0 border-r border-border-strong p-4">
      <nav className="w-full">
        <ul className="flex w-full flex-col gap-2">
          {sidebarSections.map(({ id, label }) => (
            <EditSidebarItem
              key={id}
              id={id}
              label={label}
              activeSection={activeSection}
              onSelect={handleSectionChange}
              
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}