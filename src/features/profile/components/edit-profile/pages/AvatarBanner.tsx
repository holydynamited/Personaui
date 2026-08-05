import AvatarEditor from "../media/AvatarEditor";
import BannerEditor from "../media/BannerEditor";

type Props = {
  avatarSrc: string;
  bannerSrc: string;
};

export default function AvatarBanner({
  avatarSrc,
  bannerSrc,
}: Props) {
  return (
    <div className="w-full min-w-0 space-y-8 px-8">
      <AvatarEditor avatarSrc={avatarSrc} />
      <BannerEditor bannerSrc={bannerSrc} />
    </div>
  );
}