import { Plus } from "lucide-react";

import { useState } from "react";
import ProfileLinkField from "../fields/ProfileLinkItem";
import AddLinkField from "../components/AddLinkField";
import { useUserStore } from "@/features/profile/store/useUserStore";

export default function Links() {
    const [isAddingLink, setIsAddingLink] = useState(false);

    function handleAddingLink(){
        setIsAddingLink(!isAddingLink);
    }

  const links = useUserStore((state) => state.draft?.links ?? null);

  if (links === null) return;
  <div>
    <p>Error </p>
  </div>;

  return (
    <div className="w-full space-y-3">
      <p>Links</p>
      <div className="flex flex-col gap-3 ">
        {links.map((link) => (
          <ProfileLinkField
            key={link.type}
            type={link.type}
            value={link.link}
          />
        ))}
      </div>
      {
        !isAddingLink &&
        <button 
        onClick={handleAddingLink}
        className=" flex gap-2 p-2 px-4 rounded-sm border-border-strong border mt-4">
            <Plus className="text-muted" />
            Add link
        </button>
      }


            {
                isAddingLink && <AddLinkField handleAddingLink={handleAddingLink}/>
            }


      
    </div>
  );
}
