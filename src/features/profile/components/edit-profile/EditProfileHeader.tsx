 import { ChevronRight, Menu} from "lucide-react"
 import {Link} from 'react-router-dom'


export default function EditProfileHeader(){
    return(
    <>
        <div className="flex px-4 py-4 space-x-2 items-center border-b-1 border-border-strong relative text-muted ">
        <Link to= '/profile'>
        <button className="flex gap-2 items-center">
            <Menu size={18} className="text-muted"/>
            Profile
        </button>
        </Link>
        <ChevronRight size={18} className="text-muted"/>
        <div className="relative py-1 text-accent">
    <span>Edit profile</span>

            <span
            className="
                absolute
                left-0
                right-0
                -bottom-[18px]
                h-0.5
                bg-accent
            "
            />
        </div>

       </div>

       <div className="w-full min-w-0 px-8 space-y-2">
        <h2 className="text-h3">
            Edit profile
        </h2>
        <p className="text-muted">
            Manage your public information and how others see you.
        </p>
     </div>
</>
    )
}