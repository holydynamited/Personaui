

import { NAVBAR_ITEMS } from "../../lib/types/navbar";
import Logo from "../Logo";

import SidebarItem from "./SidebarItem";


export default function Sidebar() {
 

  return (
    <aside className=" sticky top-0 shrink-0 flex justify-center w-64    p-6 border-border-strong bg-sidebar border-r-2 rounded-l-2xl  ">
      
      
      <nav>

        <ul className="flex flex-col gap-8 ">
          <Logo/>
        {NAVBAR_ITEMS.map((i)=>{
            return(
           <SidebarItem name={i.name} link={i.link} icon={i.icon} />
           )
        })}
        </ul>
      </nav>
    </aside>
  );
}
