import type { SideCardType } from '../../types/side-cards/sidecard';
import AboutCard from './cards/AboutCard';
import LinksCard from './cards/LinksCard';

type Props =
  | {
      cardType: "about";
      value: string;
    }
  | {
      cardType: "links";
    };

export default function SideCard(props: Props) {
  switch (props.cardType) {
    case "about":
      return <AboutCard value={props.value} />;

    case "links":
      return <LinksCard />;
  }
}