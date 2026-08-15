import Avatar from "@/components/media/ProfileAvatar";
import { useUserStore } from "@/features/profile/store/useUserStore";
import { useRef } from "react";

import { DEFAULT_AVATAR } from "@/features/profile/constants/profileDefaults";


export default function AvatarEditor() {

 const avatarSrc = useUserStore(
  (state) => state.draft?.avatar
  ?? ""
)
  const setAvatar= useUserStore((state)=> state.setAvatar);
 const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(file: File | null) {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setAvatar(previewUrl);
  } 

  function removeAvatar(){
    if(avatarSrc===DEFAULT_AVATAR) return;
    setAvatar(DEFAULT_AVATAR);
  }
 
  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <p className="text-body font-semibold text-primary">Avatar</p>
        <p className="text-small text-muted">
          Upload an image to personalize your profile.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Avatar src={avatarSrc} size="lg" />

        <div className="flex gap-3">
           <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
             onChange={(e) =>
               handleFileChange(e.target.files?.[0] ?? null)
            }
          />
          <button
          onClick={() => inputRef.current?.click()}
            type="button"
            className="
              rounded-md
              border border-border-strong
              px-4 py-2
              text-small text-primary
              transition-colors
              hover:bg-sidebar-hover
            "
          >
            Change avatar
          </button>

          <button
          onClick={removeAvatar}
            type="button"
            className="
              rounded-md
              px-4 py-2
              text-small text-muted
              transition-colors
              hover:bg-sidebar-hover
              hover:text-primary
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}