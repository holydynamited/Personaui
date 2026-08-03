
import type { ProfileLink } from "../../types/side-cards/profilelinks";
import ProfileMetaItem from "./ProfileMetaItem"

type Props={
  name:string,
  lastname:string,
  username:string,
  bio:string,
  age:string,
  location:string,
  links: ProfileLink[];

  
}

export default function ProfileInfo({name, lastname, username,bio,age,location,links}:Props){
    const link = links[1].link;


    return (
         <div className="flex flex-col min-h-14 py-4 pl-72 pr-6  gap-3 ">
        <div>
          <p className="text-h2 font-semibold">{
            name+' '+lastname}</p>
          <p className="text-small text-muted">{'@'+username}</p>
        </div>
        <div>
          <p className="text-body text-primary">{bio}</p>
        </div>
        <div className="flex  gap-6 ">
        <ProfileMetaItem type = "location" value={location}/>
        <ProfileMetaItem type = "link" value={link}/>
        <ProfileMetaItem type = "age" value={age +""+"y.o"}/>

        </div>
      </div>
    )
}