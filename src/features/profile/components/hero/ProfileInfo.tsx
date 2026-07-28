
import ProfileMetaItem from "./ProfileMetaItem"


export default function ProfileInfo(){

    return (
         <div className="flex flex-col min-h-14 py-4 pl-72 pr-6  gap-3 ">
        <div>
          <p className="text-h2 font-semibold">John Doe</p>
          <p className="text-small text-muted">@johndoe</p>
        </div>
        <div>
          <p className="text-body text-primary">Nothing more/...</p>
        </div>
        <div className="flex  gap-6 ">
        <ProfileMetaItem type = "location" value="Munich"/>
        <ProfileMetaItem type = "link" value="/link.tree"/>
        <ProfileMetaItem type = "age" value="25 y.o"/>

        </div>
      </div>
    )
}