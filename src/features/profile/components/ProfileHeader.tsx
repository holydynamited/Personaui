import ButtonTransp from "@/components/buttons/ButtonTransp";
import ProfileStats from "./ProfileStats";
import ProfileMetaItem from "./ProfileMetaItem";

import ProfileHat from "@/assets/gothic-header.jpg";
import Avatar from "@/assets/avatar.jpg";



export default function ProfileHeader() {
  return (
    <div className="">
      <div className="relative w-full h-48">
        <img
          className=" w-full h-full object-cover rounded-r-2xl"
          src={ProfileHat}
          alt=""
        />
        <div className="absolute right-6 top-6 flex items-center gap-3">
         <ButtonTransp value="Edit profile"/>
         <ButtonTransp value="..."/>
        </div>

        <img
          className="absolute -bottom-28 left-16 size-48 rounded-full  object-cover"
          src={Avatar}
          alt="Profile avatar"
        />
      </div>
      <div className="flex flex-col min-h-14 py-4 pl-72 pr-6  gap-3 ">
        <div>
          <p className="text-h2 font-semibold">John Doe</p>
          <p className="text-small text-muted">@johndoe</p>
        </div>
        <div>
          <p className="text-body text-primary">Nothing more/...</p>
        </div>
        <div className="flex  gap-6 ">
        <ProfileMetaItem type = "location" value="Munich"/>
        <ProfileMetaItem type = "link" value="/link.tree"/>
        <ProfileMetaItem type = "age" value="25 y.o"/>

        </div>
      </div>

        <div className="flex gap-12  pl-12">
            <ProfileStats value={35} stat="Posts"/>
            <ProfileStats value={355} stat="Followers"/>
            <ProfileStats value={98} stat="Following"/>

        </div>
    </div>
  );
}
