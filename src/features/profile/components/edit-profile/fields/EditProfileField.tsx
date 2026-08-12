import { MapPin } from "lucide-react";
import type {EditProfileFieldType} from "@/features/profile/types/edit-profile/basicInfoFields"



type Props = {
  label: string;
  placeholder: string;
  type?: EditProfileFieldType;
  value:string;
  onChange: (value: string) => void;
};

export default function EditProfileField({
  label,placeholder,
  type = "input",
  value,
  onChange
}: Props) {
  const baseClasses = `
    w-full
    min-w-0
    rounded
    border border-border-strong
    bg-transparent
    p-2
    text-body text-primary
    outline-none
    placeholder:text-muted
  `;

  switch (type) {
    case "textarea":
      return (
        <div className="flex w-full flex-col gap-2">
          <p>{label}</p>

          <textarea
            className={`${baseClasses} min-h-24 resize-none`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );

    case "location":
      return (
        <div className="flex w-full flex-col gap-2">
          <p>{label}</p>

          <div className="relative w-full">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              className={`${baseClasses} pl-10`}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        </div>
      );

    case "input":
      return (
        <div className="flex w-full flex-col gap-2">
          <p>{label}</p>

          <input
            className={baseClasses}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );
  }
}