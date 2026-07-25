import ProfileHat from "@/assets/gothic-header.jpg";
import Avatar from "@/assets/avatar.jpg";

import { MapPin, Link, Calendar } from "lucide-react";

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
          <button>Edit profile</button>
          <button>•••</button>
        </div>

        <img
          className="absolute -bottom-28 left-16 size-48 rounded-full  object-cover"
          src={Avatar}
          alt="Profile avatar"
        />
      </div>
      <div className="flex flex-col min-h-14 py-4 pl-72 pr-6 absolute gap-3 ">
        <div>
          <p className="text-h3 font-semibold">John Doe</p>
          <p className="text-md text-muted">@johndoe</p>
        </div>
        <div>
          <p className="text-md">Nothing more/...</p>
        </div>
        <div className="flex flex-row gap-6 ">
          <div className="flex items-center gap-2 text-muted">
            <MapPin className="size-4" />
            <span>Munich</span>
            
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Link className="size-4" />
            <a href="">/link.tree</a>
            
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Calendar className="size-4" />
            <a href="">25 y.o</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
