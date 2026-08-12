import Banner from "@/components/media/ProfileBanner";
import { useUserStore } from "@/features/profile/store/useUserStore";
import { useRef } from "react";



export default function BannerEditor() {

  const bannerSrc = useUserStore((state)=>state.draft?.banner
?? "")
  const setBanner = useUserStore((state)=>state.setBanner)
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(file:File |null){
    if (!file) return ;

    const previewUrl = URL.createObjectURL(file);

    setBanner(previewUrl);
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <p className="text-body font-semibold text-primary">Banner</p>
        <p className="text-small text-muted">
          Upload an image to customize your profile header.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Banner
          src={bannerSrc}
          size="md"
          className="rounded-md"
        />

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
            type="button"
            onClick={()=> inputRef.current?.click()}
            className="
              rounded-md
              border border-border-strong
              px-4 py-2
              text-small text-primary
              transition-colors
              hover:bg-sidebar-hover
            "
          >
            Change banner
          </button>

          <button
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