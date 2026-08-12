import EditProfileField from "../fields/EditProfileField";
import { BASIC_INFO_FIELDS } from "@/features/profile/types/edit-profile/basicInfoFields";

import { useUserStore } from "@/features/profile/store/useUserStore";

export default function BasicInfo() {
  

 const updateField = useUserStore((state)=>state.updateField);
  const draft= useUserStore((state)=> state.draft)

  if (draft===null)  return null;
   return (
    <div className="w-full min-w-0 space-y-4 px-8">
      
        {BASIC_INFO_FIELDS.map(({ key, ...field }) => (
      <EditProfileField
        key={key}
        value={draft[key] as string}
        onChange={(value) => updateField(key, value)}
        {...field}
      />
    ))}
    </div>
  );
}