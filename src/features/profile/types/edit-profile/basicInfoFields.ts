export type EditProfileFieldType = "input" | "textarea" | "location";
type fieldKey = "name"|"lastName"|"username"|"bio"|"location"|"age";

export type EditProfileFieldConfig = {
  key:fieldKey
  label: string;
  placeholder: string;
  type?: EditProfileFieldType;
};

export const BASIC_INFO_FIELDS: EditProfileFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    placeholder: "Name",
  },
  {
    key: "lastName",
    label: "Lastname",
    placeholder: "Lastname",
  },
  {
    key: "username",
    label: "Username",
    placeholder: "@username",
  },
  {
    key: "bio",
    label: "Bio",
    placeholder: "Bio",
    type: "textarea",
  },
  {
    key: "location",
    label: "Location",
    placeholder: "Location",
    type: "location",
  },
  {
    key: "age",
    label: "Age",
    placeholder: "Age",
    
  },
];