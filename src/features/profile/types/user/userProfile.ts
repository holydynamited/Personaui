import type { Post } from "../profile/posts/post";
import type { ProfileLink } from "../side-cards/profilelinks";
import type { ProfileStats } from "./profileStats";


export type UserProfile = {
  id:string,
  name: string;
  lastName: string;
  username: string;
  bio: string;
  age:string,
  location: string;
  avatar: string;
  banner: string;
  about:string;
  stats: ProfileStats;
  links: ProfileLink[];
  posts:Post[]
};