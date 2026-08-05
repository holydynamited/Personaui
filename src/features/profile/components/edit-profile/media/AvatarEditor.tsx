import Avatar from "@/components/media/ProfileAvatar";

type Props = {
  avatarSrc: string;
};

export default function AvatarEditor({ avatarSrc }: Props) {
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
            Change avatar
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