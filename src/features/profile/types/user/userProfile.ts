import type { ProfileLink } from "../side-cards/profilelinks";
import type { ProfileStats } from "./profileStats";

export type UserProfile = {
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
};