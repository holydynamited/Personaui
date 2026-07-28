
import ProfileStatsItem from "./ProfileStatsItem"

export default function ProfileStats(){

    return(
         <div className="flex gap-12  pl-12">
                    <ProfileStatsItem value={35} stat="Posts"/>
                    <ProfileStatsItem value={355} stat="Followers"/>
                    <ProfileStatsItem value={98} stat="Following"/>
        
                </div>
    )
}