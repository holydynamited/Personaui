import type { StateCreator } from "zustand";
import type { Post } from "../../types/profile/posts/post"
import { USER_MOCK } from "../../types/user/usermock";


type PostState = {

    posts:Post[]
}

type PostActions = {

    setPosts:(posts:Post[])=>void;
    addPost:(post:Post)=>void;
    deletePost:(id:string)=>void;


    
}

const initialState: PostState = {
  posts: USER_MOCK.posts,
};


export type PostSlice = PostState & PostActions;

export const createPostSlice : StateCreator<PostSlice,
[],
[],
PostSlice> = (set)=>({
    ...initialState,

    setPosts: (posts) =>
  set(() => ({
    posts,
  })),

 addPost: (post) =>
  set((state) => ({
    posts: [...state.posts, post],
  })),

  deletePost:(id)=>
    set((state)=>({
        posts:state.posts.filter!((item)=>
            item.id === id
        ),
    }))
    
})