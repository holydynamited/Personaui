import { USER_MOCK } from "@/features/profile/types/user/usermock"
import { Plus } from "lucide-react"

import ProfileLinkField from "../fields/ProfileLinkItem"

export default function Links(){

    const {links} = USER_MOCK

    return (
        <div className="w-full space-y-3">
            <p>Links</p>
        <div className="flex flex-col gap-3 ">
            
                {links.map((link) => (
        <ProfileLinkField
            key={link.type}
            type={link.type}
            value={link.link}
        />
))}
        
        </div>
        <button className=" flex gap-2 p-2 px-4 rounded-sm border-border-strong border mt-4">
            <Plus className="text-muted"/>
            Add link</button>
        </div>
    )
}