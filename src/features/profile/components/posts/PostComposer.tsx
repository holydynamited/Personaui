

import { Image,ImagePlay, TextWrap,Smile } from 'lucide-react'
import { useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { USER_MOCK } from '../../types/user/usermock';


type Props = {
  avatarSrc :string;
}

export default function PostComposer({avatarSrc}:Props){


  const [postValue, setPostValue] = useState('');
  const getCurrentDate = () => new Date().toISOString();

  const userId = USER_MOCK.id;
  

  const addPost = useUserStore((state)=>state.addPost);

  function addPostHandler(){

    if (!postValue.trim()) return;
    addPost(
      {
        id:crypto.randomUUID(),
        profile_id:userId,
        content:postValue.trim(),
        created_at:getCurrentDate(),
      }
    )
     setPostValue("");

  }


    return (
    
        <div className=" w-full  flex flex-col gap-3 mt-6 p-3 bg-sidebar rounded-md shrink-0 border border-border-strong ">
          
          <div className="flex mt-2 gap-3 px-4">
            <img className='rounded-full size-11 shrink-0 object-cover'
            src={avatarSrc}
            alt="" 
            />

              <textarea

              onChange={(e)=>setPostValue(e.target.value)}
              value={postValue}
                className="
                min-w-0 flex-1
                bg-transparent
                text-body text-primary
                outline-none
                placeholder:text-muted
                resize-none
                "
                
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
            <button
            onClick={addPostHandler}
            disabled={!postValue.trim()}
            className='bg-accent px-6 py-2 rounded-2xl hover:bg-accent-hover'>Post</button>

          </div>
          </div>
         
        </div>

   
    
    )
    
}