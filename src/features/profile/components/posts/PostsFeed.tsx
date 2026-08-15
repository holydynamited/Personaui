
import { useUserStore } from "../../store/useUserStore";
import Post from "./Post";
import PostComposer from "./PostComposer";


import { USER_MOCK } from "../../types/user/usermock";



export default function PostsFeed(){

    const user = useUserStore((state) => state.user);
    const posts = USER_MOCK.posts;

    if (!user) return null;
    const {avatar, username,name} = user; 


    return(
        <div>
                <PostComposer avatarSrc={avatar}/>
                <div>
                   {
                    posts.map((p)=>(
                        <Post key={p.id} avatarSrc={avatar} username={username} name= {name} postValue={p.content}/>
                    ))
                   }
                </div>
                

        </div>
    )
} 