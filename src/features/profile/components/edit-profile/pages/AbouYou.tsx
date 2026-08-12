import EditProfileField from "../fields/EditProfileField";
import { ABOUT_FIELDS } from "@/features/profile/types/edit-profile/aboutFields";

import { useUserStore } from "@/features/profile/store/useUserStore";

export default function AboutYou() {
  const updateField = useUserStore((state)=>state.updateField);
  const draft = useUserStore((state)=>state.draft);

  if (draft===null) return null;
  return (
    <div className="w-full min-w-0 space-y-4 px-8">
      {ABOUT_FIELDS.map(({key, ...field}) => (
        <EditProfileField
          key={key}
          value={draft[key] as string}
          onChange={(value)=>updateField(key,value)}
          {...field}
        />
      ))}
    </div>
  );
}