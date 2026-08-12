
import { useUserStore } from "@/features/profile/store/useUserStore";

import ProfileAvatar from "@/components/media/ProfileAvatar"
import ProfileBanner from "@/components/media/ProfileBanner"
import ProfileMetaItem from "../../hero/ProfileMetaItem";

import SideCard from "../../sidecards/SideCard";

import type { ProfileLink } from "@/features/profile/types/side-cards/profilelinks";


import { useNavigate } from "react-router-dom";




type Props = {
  avatarSrc: string;
  bannerSrc: string;
  name:string; 
  lastname:string;
  username:string;
  bio:string;
  age:string;
  location:string;
  aboutCardInfo:string;
  links:ProfileLink[];

};


export default function PreviewPanel(
    {
    avatarSrc,
    bannerSrc,
    name, 
    lastname,
    username,
    bio,
    age,
    location,
    aboutCardInfo,
    links
    }
:Props){

  const user = useUserStore((state) => state.user);
  const initDraft = useUserStore((state)=> state.initDraft)
  const draft = useUserStore((state) => state.draft);
  const setUser = useUserStore((state)=>state.setUser);

  function saveChanges(){
    if (!draft) return;
    setUser(draft);
  }

const hasChanges =
  draft !== null &&
  JSON.stringify(user) !== JSON.stringify(draft);

  const navigate = useNavigate();

    return(
        <div className="flex flex-col gap-4 w-full  overflow-hidden rounded-sm bg-sidebar border border-border-strong p-6 relative">

            <div>
            <p>Profile preview</p>
            <p className="text-muted text-sm ">See how your page appear to others </p>
            </div>

            <div className="relative">
            <ProfileBanner src={bannerSrc} size="lg" className="rounded-sm" />

            <ProfileAvatar
                src={avatarSrc}
                size="xl"
                className="absolute left-6 -bottom-12"
            />
        </div>
          <div className="flex flex-col mt-10 gap-3 ">
                <div>
                  <p className=" font-semibold">{
                    name+' '+lastname}</p>
                  <p className="text-small text-muted">{`@${username}`}</p>
                </div>
                <div>
                  <p className="text-small text-primary">{bio}</p>
                </div>
                <div className="flex flex-col  gap-4 ">
                <ProfileMetaItem type = "location" value={location}/>
                <ProfileMetaItem type = "link" value={"ssdsdsdsds"}/>
                <ProfileMetaItem type = "age" value={`${age} y.o`}/>
                <div className="w-full mx-auto space-y-4">
                <SideCard size="sm" cardType="links" links={links} fullWidth/>
                <SideCard size="sm" cardType="about" value={aboutCardInfo} fullWidth/>
                </div>
                
                </div>
              </div>

              {
                hasChanges&& (
                <div className="flex justify-start gap-3">

                  
                    <button
                    onClick={()=>{
                      saveChanges();
                      navigate("/profile")
                    }
                    }
                      type="button"
                      className="
                        rounded-sm
                        border border-white/30
                        bg-accent
                        px-4 py-2
                        text-small font-medium 
                        transition-colors
                        hover:bg-accent-hover
                      "
                    >
                      Save changes
                    </button>


                    <button
                    onClick={()=>{
                     initDraft();
                    }
                    }
                      type="button"
                      className="
                        rounded-sm
                        border border-border-strong
                        bg-transparent
                        px-4 py-2
                        text-small font-medium 
                        transition-colors
                       
                      "
                    >
                      Cancel changes
                    </button>
                   
                </div>
                )
              }

            
        </div>


    )
}