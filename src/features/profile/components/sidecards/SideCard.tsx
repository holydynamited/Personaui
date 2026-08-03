
import type { ProfileLink } from '../../types/side-cards/profilelinks';
import AboutCard from './cards/AboutCard';
import LinksCard from './cards/LinksCard';

type Props =
  | {
      cardType: "about";
      value: string;
    }
  | {
      cardType: "links";
      links: ProfileLink[];
    };

export default function SideCard(props: Props) {
  switch (props.cardType) {
    case "about":
      return <AboutCard value={props.value} />;

    case "links":
      return <LinksCard links= {props.links} />;
  }
}