
import Post from "./Post";
import PostComposer from "./PostComposer";



export default function PostsFeed(){

    return(
        <div>
                <PostComposer/>
                <div>
                    <Post postValue="Hi everybody! I've starded working on PersonaUi project. Wish me some luck! "/>
                     <Post postValue="I hate my life "/>
                      <Post postValue="Skibididopdopyesyes"/>
                       <Post postValue="Skibididopdopyesyes"/>
                </div>
                

        </div>
    )
}