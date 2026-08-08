import type { ReactNode } from "react";

import EditProfileSidebar from "../edit-profile/sidebar/EditProfileSidebar"
import type { tab } from "../../types/edit-profile/editProfileTab";

type Props = {
  children: ReactNode;
  onTabChange: (tab: tab) => void;
};

export default function EditProfilePanel({
  children, onTabChange
}: Props) {
  return (
    <div className="flex w-full min-h-250 min-w-58 overflow-hidden rounded-sm border bg-sidebar border-border-strong">
      <EditProfileSidebar onTabChange={onTabChange} />

      <main className="min-w-0 flex-1 p-6">
        {children}
      </main>
    </div>
  );
}