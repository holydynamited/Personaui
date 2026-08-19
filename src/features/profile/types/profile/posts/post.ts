import type { PostMedia } from "./postMedia";

export type Post = {
id :string;
profile_id:string;
content?:string;
media? : PostMedia
created_at:string

}