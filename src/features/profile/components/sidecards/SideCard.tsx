import type { ProfileLink } from "../../types/side-cards/profilelinks";
import AboutCard from "./cards/AboutCard";
import LinksCard from "./cards/LinksCard";

export type SideCardSize = "sm" | "md" | "lg";

type Props =
  | {
      cardType: "about";
      value: string;
      size?: SideCardSize;
      fullWidth?: boolean;
    }
  | {
      cardType: "links";
      links: ProfileLink[];
      size?: SideCardSize;
      fullWidth?: boolean;
    };

export default function SideCard(props: Props) {
  switch (props.cardType) {
    case "about":
      return (
        <AboutCard
          value={props.value}
          size={props.size}
          fullWidth={props.fullWidth}
        />
      );

    case "links":
      return (
        <LinksCard
          links={props.links}
          size={props.size}
          fullWidth={props.fullWidth}
        />
      );
  }
}