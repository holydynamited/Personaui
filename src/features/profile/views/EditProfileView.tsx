import EditProfileHeader from "../components/edit-profile/components/EditProfileHeader"
import EditProfilePanel from "../components/edit-profile/EditProfilePanel"

import AboutYou from "../components/edit-profile/pages/AbouYou"
import AvatarBanner from "../components/edit-profile/pages/AvatarBanner"
import BasicInfo from "../components/edit-profile/pages/BasicInfo"
import Links from "../components/edit-profile/pages/Links"
import Privacy from "../components/edit-profile/pages/Privacy"

import PreviewPanel from "../components/edit-profile/preview/PreviewPanel"

import { type tab }from '@/features/profile/types/edit-profile/editProfileTab'

import { useUserStore } from "../store/useUserStore"


import {useState,useEffect } from 'react'
 
 export default function EditProfileView(){

    const [editTab, setEditTab] = useState<tab>('basic')

    function tabHandler (t:tab){

        setEditTab(t);
    }


            const draft = useUserStore((state) => state.draft);
            const initDraft = useUserStore((state) => state.initDraft);

            useEffect(() => {
            if (!draft) {
                initDraft();
            }
            }, [draft, initDraft]);

            if (!draft) return null;

            const {
            avatar,
            banner,
            name,
            lastName,
            username,
            bio,
            age,
            location,
            links,
            about,
            } = draft;

        return(
    <div className="w-full min-w-0 space-y-6  ">
       
       <EditProfileHeader/>

          <div className="w-full min-w-0 px-8 space-y-2">
        <h2 className="text-h3">
            Edit profile
        </h2>
        <p className="text-muted">
            Manage your public information and how others see you.
        </p>
     </div>

       <div className="grid grid-cols-[minmax(0,1fr)_400px] px-8 gap-6">
    <EditProfilePanel onTabChange={tabHandler}>
    {editTab === "basic" ? (
        <BasicInfo />
    ) : editTab === "about" ? (
        <AboutYou />
    ) : editTab === "media" ? (
        <AvatarBanner />
    ) : editTab === "links" ? (
        <Links />
    ) : editTab==="privacy"?(
        <Privacy />
    ):null}
    </EditProfilePanel>


        <PreviewPanel 
        avatarSrc={avatar} 
        bannerSrc={banner} 
        name={name} 
        lastname={lastName} 
        username={username} 
        bio={bio} 
        age={age} 
        location={location} 
        links={links} 
        aboutCardInfo={about}
        />
       </div>
       </div>


 )

 }