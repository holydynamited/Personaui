
import { type UserProfile } from "./userProfile";
import Avatar from "@/assets/def-avatar.png";
import Banner from "@/assets/def-banner.png";



export const USER_MOCK:UserProfile = {
  name: "John",
  lastName: "Doe",
  username: "johndoe",
  bio: "Developer, athlete. Building Personaui.",
   age:"25",
  location: "Germany",

  avatar: Avatar,
  banner: Banner,
  about:"Hiding in silience",

  stats: {
    posts: 24,
    followers: 128,
    following: 73,
  },

  links: [
    {
      type: "github",
      link: "https://github.com/johndoe",
    },
    {
      type: "telegram",
      link: "https://t.me/johndoe",
    },
    {
      type: "instagram",
      link: "https://instagram.com/johndoe",
    },
    {
      type: "discord",
      link: "https://discord.com",
    },
    {
      type: "spotify",
      link: "https://open.spotify.com",
    },
  ],

  posts: [
  {
    id: "post-1",
    content: "Hi everybody! I've started working on Personaui. Wish me luck!",
    createdAt: "2026-08-15T12:00:00Z",
    likes: 12,
    comments: 3,
  },
  {
    id: "post-2",
    content: "Building this thing piece by piece.",
    createdAt: "2026-08-14T18:30:00Z",
    likes: 7,
    comments: 1,
  },
],
};