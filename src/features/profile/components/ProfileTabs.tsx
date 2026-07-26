import { PROFILE_TABS } from "../types/profiletabs"
import type { ProfileTab } from "../types/profiletabs"

import { useState } from "react"


export default function ProfileTabs(){

    const [activeTab, setActiveTab]= useState<ProfileTab>("wall")

return(
   <div className="flex ml-4">
    {
        PROFILE_TABS.map((t)=>{
            return(
                <button
                key={t} className={`
                    
                    px-8 capitalize py-4 transition-colors
                    text-secondary
                    ${
                        t===activeTab ? 
                        "border-b-2 border-accent border-solid"
                        : 
                        " hover:text-primary"}`}  
                    onClick={()=>setActiveTab(t)}>
                 {t}
            </button>


            )

        })
    }
    


   </div>

)

}