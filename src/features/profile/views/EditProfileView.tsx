import EditProfileHeader from "../components/edit-profile/EditProfileHeader"
import EditProfilePanel from "../components/edit-profile/EditProfilePanel"

import AboutYou from "../components/edit-profile/pages/AbouYou"
import AvatarBanner from "../components/edit-profile/pages/AvatarBanner"
import BasicInfo from "../components/edit-profile/pages/BasicInfo"
import Links from "../components/edit-profile/pages/Links"
import Privacy from "../components/edit-profile/pages/Privacy"
import { type tab }from '@/features/profile/types/edit-profile/editProfileTab'

import {useState } from 'react'
 
 export default function EditProfileView(){

    const [editTab, setEditTab] = useState<tab>('basic')

    function tabHandler (t:tab){

        setEditTab(t);
    }

 return(
    <div className="w-full min-w-0 space-y-6  ">
       
       <EditProfileHeader/>

       <div className="grid grid-cols-[minmax(0,1fr)_320px] px-8">
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

       </div>
       </div>


 )

 }