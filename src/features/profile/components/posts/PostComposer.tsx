import Avatar from '@/assets/avatar.jpg'

import { Image,ImagePlay, TextWrap,Smile } from 'lucide-react'

export default function PostComposer(){
    return (
    
        <div className=" w-full  flex flex-col gap-3 mt-6 p-3 bg-sidebar rounded-md shrink-0 border border-border-strong ">
          
          <div className="flex mt-2 gap-3 px-4">
            <img className='rounded-full size-11 shrink-0 object-cover'
            src={Avatar}
            alt="" 
            />

              <textarea
                className="
                min-w-0 flex-1
                bg-transparent
                text-body text-primary
                outline-none
                placeholder:text-muted
                resize-none
                "
                type="text"
                placeholder="What's on your mind?"
            />

          </div>

          <div className='flex justify-between ' >
          <div className='
          flex gap-4 px-6
          text-muted
           '>
            <button><Image/></button>
            <button><ImagePlay/></button>
            <button><TextWrap/></button>
            <button><Smile/></button>
          </div>

          <div className='px-6'>
            <button className='bg-accent px-6 py-2 rounded-2xl hover:bg-accent-hover'>Post</button>

          </div>
          </div>
         
        </div>

   
    
    )
    
}