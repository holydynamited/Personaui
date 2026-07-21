import { NAVBAR_ITEMS } from "../lib/types/navbar";
import { NavLink } from "react-router-dom";


export default function SideBar() {
  return (
    <aside className=" sticky top-0 shrink-0 flex justify-center w-64  min-h-screen  p-6 border-border-strong bg-sidebar border-r-2 rounded-l-2xl  ">
      <nav>

        <ul className="flex flex-col gap-8 ">
        {NAVBAR_ITEMS.map((i)=>{

            const  Icon = i.icon;
            return(

                <li key={i.name}>
                <NavLink to={i.link}>
                  <div className="flex flex-row items-center gap-2 font-sans text-small text-secondary">
                  <Icon className="size-5 shrink-0" strokeWidth={2}/>
                    
                    {i.name}
                    
                    </div>

                </NavLink>
                </li>
            )
        })}
        </ul>
      </nav>
    </aside>
  );
}
