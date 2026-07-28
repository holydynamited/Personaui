
import { useState } from "react"

import type { ProfileTab } from "./types/profiletabs"


import ProfileHero from "./components/hero/ProfileHero.tsx"
import ProfileInfo from "./components/hero/ProfileInfo.tsx"
import ProfileStats from "./components/hero/profile-stats/ProfileStats.tsx"
import ProfileTabs from "./components/tabs/ProfileTabs"


import ProfileWall from "./components/wall/ProfileWall"
import PostsFeed from "./components/posts/PostsFeed.tsx"
import ProfileMedia from "./components/media/ProfileMedia.tsx"
import ProfileReposts from "./components/reposts/ProfileReposts.tsx"

import SideCard from "./components/sidecards/SideCard.tsx"




export default function ProfileView(){

    const [activeTab, setActiveTab]= useState<ProfileTab>("wall")

    function handleActiveTab(tab:ProfileTab){

        setActiveTab(tab)

    }

    return(
        <div className="w-full min-w-0">
            
                <ProfileHero/>
           
           <div className="grid grid-cols-[minmax(0,1fr)_320px]  gap-6 px-6 pb-6 ">
        <section className="min-w-0 mt-6 ">
            <ProfileInfo/>
            <ProfileStats />
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
         <SideCard/>
        </aside>
      </div>

       </div>
    )
}