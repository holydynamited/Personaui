
export type LinkType = 'github'|'telegram'|'instagram'|'discord'|'spotify';


export type ProfileLink ={
    type:LinkType,
    link:string



}

export const LINKS: ProfileLink[] = [
  {
    type: "github",
    link: "https://github.com",
  },
  {
    type: "telegram",
    link: "https://t.me",
  },
  {
    type: "instagram",
    link: "https://instagram.com",
  },
  {
    type: "discord",
    link: "https://discord.com",
  },
  {
    type: "spotify",
    link: "https://open.spotify.com",
  },
];