
import Avatar from '@/assets/avatar.jpg'
import { Heart,MessageCircle,Share, Bookmark } from 'lucide-react'

export default function Post(){
    return(
        <div className=" w-full  flex flex-col gap-3 mt-6 p-3 space-y-4 bg-sidebar rounded-md shrink-0 border border-border-strong ">
          
          <div className="flex mt-2 gap-3 px-4">
            <img className='rounded-full size-11 shrink-0 object-cover'
            src={Avatar}
            alt="" 
            />
            <div className='flex justify-between'>
                <div>
            <div className='flex flex-col'> 
                <p>John</p>
            </div>
            <div className='text-muted text-small   '>
                <p>@johndoe</p>
            </div>
            </div>

            <div className=' flex'>
                <button>...</button>
            </div>


            </div>

           

          </div>

          <div className='flex px-12'>
             <p>Today i was working on PersonaUi project</p>
          </div>

          <div className='flex justify-between ' >
          <div className='
          flex gap-4 px-6
          text-muted
          
           '>
            <button><Heart/></button>
            <button><MessageCircle/></button>
            <button><Share/></button>
            
          </div>

          <div className='  flex gap-4 px-6
          text-muted px-6'>
            <button><Bookmark/></button>

          </div>
          </div>
         
        </div>

    )
}