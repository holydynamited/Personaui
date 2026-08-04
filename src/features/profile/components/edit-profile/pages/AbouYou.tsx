import EditProfileField from "../fields/EditProfileField";
import { ABOUT_FIELDS } from "@/features/profile/types/edit-profile/aboutFields";

export default function AboutYou() {
  return (
    <div className="w-full min-w-0 space-y-4 px-8">
      {ABOUT_FIELDS.map((field) => (
        <EditProfileField
          key={field.id}
          {...field}
        />
      ))}
    </div>
  );
}