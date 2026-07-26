import type { StatType } from "@/features/profile/types/profilestats"

type Props ={
    value:number,
    stat:StatType

}

export default function ProfileStats ({value, stat}:Props){
    return(
        <div className="flex flex-col text-h p-2 ">
            <p className="text-h4">
                {value}
            </p>
            <p className="text-muted text-sm">
                {stat}
            </p>
        </div>
    )
}