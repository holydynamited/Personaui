
import ProfileHeader from "./components/ProfileHeader"
import ProfileTabs from "./components/ProfileTabs"


export default function ProfileView(){
    return(
        <div className="w-full m-w-0">
            
                 <ProfileHeader/>
           
           <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-6 px-6 pb-6">
        <section className="min-w-0 mt-6">
          <ProfileTabs />
         
        </section>

        <aside className="flex flex-col gap-4">
         
        </aside>
      </div>

       </div>
    )
}