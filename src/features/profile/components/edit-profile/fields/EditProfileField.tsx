import { MapPin } from "lucide-react";

type FieldType = "input" | "textarea" | "location";

type Props = {
  label: string;
  placeholder: string;
  type?: FieldType;
};

export default function EditProfileField({
  label,placeholder,
  type = "input",
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
          />
        </div>
      );
  }
}