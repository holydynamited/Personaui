export type EditProfileFieldType = "input" | "textarea" | "location";

export type EditProfileFieldConfig = {
  label: string;
  placeholder: string;
  type?: EditProfileFieldType;
};

export const BASIC_INFO_FIELDS: EditProfileFieldConfig[] = [
  {
    label: "Name",
    placeholder: "Name",
  },
  {
    label: "Lastname",
    placeholder: "Lastname",
  },
  {
    label: "Username",
    placeholder: "@username",
  },
  {
    label: "Bio",
    placeholder: "Bio",
    type: "textarea",
  },
  {
    label: "Location",
    placeholder: "Location",
    type: "location",
  },
];