
import { type UserProfile } from "./userProfile";
import Avatar from "@/assets/avatar.jpg";
import Banner from "@/assets/gothic-header.jpg";



export const USER_MOCK:UserProfile = {
  name: "John",
  lastName: "Doe",
  username: "johndoe",
  bio: "Developer, athlete. Building Personaui.",
   age:"25",
  location: "Germany",

  avatar: Avatar,
  banner: Banner,

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
};