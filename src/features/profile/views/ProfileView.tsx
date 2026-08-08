
import { useState } from "react"

import type { ProfileTab } from "../types/profile/profiletabs.ts"


import ProfileHero from "../components/hero/ProfileHero.tsx"
import ProfileInfo from "../components/hero/ProfileInfo.tsx"
import ProfileStats from "../components/hero/profile-stats/ProfileStats.tsx"
import ProfileTabs from "../components/tabs/ProfileTabs.tsx"


import ProfileWall from "../components/wall/ProfileWall.tsx"
import PostsFeed from "../components/posts/PostsFeed.tsx"
import ProfileMedia from "../components/media/ProfileMedia.tsx"
import ProfileReposts from "../components/reposts/ProfileReposts.tsx"

import SideCard from "../components/sidecards/SideCard.tsx"

import { USER_MOCK } from "../types/user/usermock.ts"




export default function ProfileView(){

    const {name,lastName,username, bio,age, location, avatar, banner, stats,links} = USER_MOCK

    
    const [activeTab, setActiveTab]= useState<ProfileTab>("wall")

    function handleActiveTab(tab:ProfileTab){

        setActiveTab(tab)

    }

    return(
        <div className="w-full min-w-0">
            
                <ProfileHero avatar={avatar} banner={banner}/>
           
           <div className="grid grid-cols-[minmax(0,1fr)_320px]  gap-6 px-6 pb-6 ">
        <section className="min-w-0 mt-6 ">
            <ProfileInfo name={name} lastname={lastName} username={username} bio={bio} location={location} links = {links} age={age}/>
            <ProfileStats stats={stats}/>
            <div className="mt-6">
              <ProfileTabs activeTab={activeTab} setActiveTab={handleActiveTab} />
            </div>
           

        
        

        
            {activeTab === "wall" ? (
            <ProfileWall />
            ) : activeTab === "posts" ? (
            <PostsFeed />
            ) : activeTab === "media" ? (
            <ProfileMedia />
            ) : (
            <ProfileReposts />
            )}
         
        </section>

        <aside className="flex flex-col gap-4 pt-12">
         <SideCard size="md" cardType="about" value="Developer, athlete. Building PersonaUi. Blablablableblebleblebleblu"/>
         <SideCard size="md" cardType="links" links={links}/>
        </aside>
      </div>

       </div>
    )
}