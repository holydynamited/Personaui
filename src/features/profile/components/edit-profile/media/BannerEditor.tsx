import Banner from "@/components/media/ProfileBanner";

type Props = {
  bannerSrc: string;
};

export default function BannerEditor({ bannerSrc }: Props) {
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
          <button
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