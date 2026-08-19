
import { useUserStore } from "../../store/useUserStore";
import Post from "./Post";
import PostComposer from "./PostComposer";





export default function PostsFeed(){

    const user = useUserStore((state) => state.user);
    const posts = useUserStore((state)=>state.posts)

    if (!user) return null;
    const {avatar, username,name} = user; 


    return(
        <div>
                <PostComposer avatarSrc={avatar}/>
                <div>
                   {
                    posts.toReversed().map((p)=>(
                        <Post key={p.id} id={p.id} avatarSrc={avatar} username={username} name= {name} postValue={p.content}/>
                    ))
                   }
                </div>
                

        </div>
    )
} 