import EditProfileField from "../fields/EditProfileField";
import { BASIC_INFO_FIELDS } from "@/features/profile/types/edit-profile/basicInfoFields";

export default function BasicInfo() {
  return (
    <div className="w-full min-w-0 space-y-4 px-8">
      {BASIC_INFO_FIELDS.map((field) => (
        <EditProfileField
          key={field.label}
          {...field}
        />
      ))}
    </div>
  );
}