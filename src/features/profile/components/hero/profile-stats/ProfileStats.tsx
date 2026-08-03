
import ProfileStatsItem from "./ProfileStatsItem"

import { type ProfileStats } from "@/features/profile/types/user/profileStats"

type Props = {

    stats:ProfileStats
}

export default function ProfileStats({stats}:Props){

    return(
         <div className="flex gap-12  pl-12">
                    <ProfileStatsItem value={stats.posts} stat="Posts"/>
                    <ProfileStatsItem value={stats.followers} stat="Followers"/>
                    <ProfileStatsItem value={stats.following} stat="Following"/>
        
                </div>
    )
}