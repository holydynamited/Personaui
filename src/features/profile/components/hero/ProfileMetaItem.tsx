import { MapPin,Link,Calendar, type LucideIcon } from "lucide-react";
import type { ProfileMetaKind } from "../../types/profile/profilemeta";


type Props ={
type:ProfileMetaKind,
value:string
}


const ProfileMetaIcons : Record<ProfileMetaKind,LucideIcon> ={
location:MapPin,
link:Link,
age:Calendar


}


export default function ProfileMetaItem({ type, value }: Props) {
  const Icon = ProfileMetaIcons[type];

  return type === "link" ? (
    <div className="flex items-center gap-2 text-small text-primary">
      <Icon className="size-4" />
      <a href={value}>{value}</a>
    </div>
  ) : (
    <div className="flex items-center gap-2 text-small text-muted">
      <Icon className="size-4" />
      <span>{value}</span>
    </div>
  );
}