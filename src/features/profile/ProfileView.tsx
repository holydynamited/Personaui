
import { useState } from "react"

import type { ProfileTab } from "./types/profiletabs"

import ProfileHeader from "./components/header/ProfileHeader"
import ProfileTabs from "./components/tabs/ProfileTabs"

import ProfileWall from "./components/wall/ProfileWall"
import PostsFeed from "./components/posts/PostsFeed.tsx"
import ProfileMedia from "./components/media/ProfileMedia.tsx"
import ProfileReposts from "./components/reposts/ProfileReposts.tsx"




export default function ProfileView(){

    const [activeTab, setActiveTab]= useState<ProfileTab>("wall")

    function handleActiveTab(tab:ProfileTab){

        setActiveTab(tab)

    }

    return(
        <div className="w-full m-w-0">
            
                 <ProfileHeader/>
           
           <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-6 px-6 pb-6">
        <section className="min-w-0 mt-6">
        
          <ProfileTabs activeTab={activeTab} setActiveTab={handleActiveTab} />

        
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

        <aside className="flex flex-col gap-4">
         
        </aside>
      </div>

       </div>
    )
}