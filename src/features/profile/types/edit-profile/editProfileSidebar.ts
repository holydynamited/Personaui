import type { tab } from "./editProfileTab";

export const sidebarSections = [
  { id: "basic", label: "Basic info" },
  { id: "about", label: "About you" },
  { id: "media", label: "Avatar & banner" },
  { id: "links", label: "Links" },
  { id: "privacy", label: "Privacy" },
] satisfies { id: tab; label: string }[];