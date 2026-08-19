import { useUserStore } from "../../store/useUserStore";
import { useState, useEffect, useRef } from "react";

import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
  
} from "lucide-react";


type Props ={
    id:string;
    postValue?:string;
    avatarSrc:string;
    username:string;
    name:string;

}

export default function Post({id,postValue, avatarSrc, username, name}:Props) {
    const popupRef = useRef<HTMLDivElement>(null);
    const deletePost = useUserStore((state)=>state.deletePost);

    const [deletePopUp, setDeletePopup]= useState(false);

useEffect(() => {
  function handleClickOutside(e: MouseEvent) {
    if (
      popupRef.current &&
      !popupRef.current.contains(e.target as Node)
    ) {
      setDeletePopup(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
    

   


  return (
    <article className="mt-6 flex w-full flex-col gap-4 rounded-md border border-border-strong bg-sidebar p-4">
      <header className="flex items-start gap-3">
        <img
          className="size-11 shrink-0 rounded-full object-cover"
          src={avatarSrc}
          alt="John's avatar"
        />

        <div className="flex min-w-0 flex-1 items-start justify-between relative">
          <div className="min-w-0">
            <p className="text-primary">{name}</p>
            <p className="text-small text-muted">{'@'+username}</p>
          </div>
          { !deletePopUp?
          (
          <button
          onClick={()=>setDeletePopup(prev=>!prev)}
            type="button"
            className="text-muted hover:text-primary"
            aria-label="More options"
          >
            <MoreHorizontal className="size-5" />


          </button>
          ):
          (
        <div ref={popupRef}
        className="-right-32 top-0 text-sm absolute z-50 bg-sidebar rounded-sm border border-border-strong py-2 px-4  ">
          <ul className="w-full">
              <li onClick={()=>deletePost(id)} 
              className="w-full
                  cursor-pointer
                  px-2 py-1
                  text-muted/80
                  transition-colors
                  hover:bg-sidebar-hover
                  hover:text-muted  
                  ">
                    Delete Post </li>
                <li 
                className="w-full
                cursor-pointer
                px-2 py-1
                text-muted/80
                transition-colors
                hover:bg-sidebar-hover
                hover:text-muted
                "
                >
                  Update Post</li>


          </ul>
        </div>
        )

        }
         
        </div>

      </header>

      <div className="pl-14">
        <p className="text-body text-primary">
          {postValue}
        </p>
      </div>

      <footer className="flex items-center justify-between pl-14">
        <div className="flex items-center gap-4 text-muted">
          <button type="button" aria-label="Like">
            <Heart className="size-5" />
          </button>

          <button type="button" aria-label="Comment">
            <MessageCircle className="size-5" />
          </button>

          <button type="button" aria-label="Share">
            <Share className="size-5" />
          </button>
        </div>

        <button type="button" className="text-muted" aria-label="Bookmark">
          <Bookmark className="size-5" />
        </button>
      </footer>
    </article>
  );
}