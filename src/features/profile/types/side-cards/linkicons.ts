import {
  siGithub,
  siTelegram,
  siInstagram,
  siDiscord,
  siSpotify,
} from "simple-icons";

export const LINK_ICONS = {
  github: siGithub,
  telegram: siTelegram,
  instagram: siInstagram,
  discord: siDiscord,
  spotify: siSpotify,
} as const;

export type LinkType = keyof typeof LINK_ICONS;