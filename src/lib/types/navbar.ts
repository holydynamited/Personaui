import type { LucideIcon } from "lucide-react"
import {House,Search, Bell, Mail, Bookmark,User, Settings }from "lucide-react"



export type NavbarItem = {

    name:string,
    link:string,
    icon:LucideIcon


};

export const NAVBAR_ITEMS :NavbarItem[] = [
{
    name:"Home",
    link:"/home",
    icon:House
},
{
    name:"Explore",
    link:"/explore",
    icon:Search
},
{
    name:"Notifications",
    link:"/notifications",
    icon:Bell
},
{
    name:"Messages",
    link:"/messages",
    icon:Mail
},
{
    name:"Bookmarks",
    link:"/home",
    icon:Bookmark
},
{
    name:"Profile",
    link:"/home",
    icon:User
},
{
    name:"Settings",
    link:"/home",
    icon:Settings
},
]
