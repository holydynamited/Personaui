import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom"

type Props ={
    name:string,
    link:string,
    icon:LucideIcon
   
}

export default function SidebarItem({name,link,icon}:Props){
    const  Icon = icon;
    return(
        <li key={name}>
                <NavLink to={link}>
                  <div className="flex flex-row items-center gap-2 font-sans text-small text-secondary">
                  <Icon className="size-5 shrink-0" strokeWidth={2}/>
                    
                    {name}
                    
                    </div>

                </NavLink>
                </li>
    )
}