
import { useState } from "react";
import { useUserStore } from "@/features/profile/store/useUserStore";
import  { type LinkType } from "@/features/profile/types/side-cards/profilelinks";



 type Props={
    handleAddingLink:()=>void;
 }


export default function AddLinkField({handleAddingLink}:Props) {

    const [linkType, setLinkType] = useState<LinkType>("github");
    const [linkUrl, setLinkUrl] = useState("");

    const addLink = useUserStore((state)=>state.addLink);


  return (
    <div className="flex flex-col mt-10">
      <form className="w-full">
        <label
          htmlFor="select-link-type"
          className="mb-2 block text-small font-medium text-primary"
        >
          Select platform
        </label>

        <select
        value={linkType}
            onChange={(e)=>setLinkType(e.target.value as LinkType)}
          id="select-link-type"
          
          className="
        w-full
        rounded-sm
        border border-border-strong
        bg-transparent
        px-3 py-2.5
        text-body text-primary
        outline-none
        transition-colors
        hover:bg-sidebar-hover
      "
        >
          <option value="" disabled>
            Choose platform
          </option>

          <option value="github">GitHub</option>
          <option value="telegram">Telegram</option>
          <option value="spotify">Spotify</option>
        </select>
      </form>

      <div className="mt-4 flex items-center gap-3 rounded-sm border border-border-strong px-3 py-2">
        <input
           value={linkUrl}
           onChange={(e)=>setLinkUrl(e.target.value)}

          type="url"
          placeholder="https://..."
          className="
        min-w-0 flex-1
        bg-transparent
        text-body text-primary
        outline-none
      "
        />
      </div>
      <div className="flex gap-4">

         <button
        onClick={()=>
        {
            addLink({
                type:linkType,
                link:linkUrl,
            });

            handleAddingLink();
        }
        }
          type="button"
         className=" flex gap-2 p-2 px-4 rounded-sm border-border-strong border mt-4"
        >
            
          Add link
        </button>

        <button
        onClick={handleAddingLink}
          type="button"
          className="
            mt-4
            w-fit  rounded-sm
            border border-border-strong
            px-4 py-2
           
            "
        >
          Cancel
        </button>

       

       
      </div>
    </div>
  );
}
