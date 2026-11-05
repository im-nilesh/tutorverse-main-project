import { benefits } from "../data/content";
import Tilt from "./Tilt";
import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <Reveal className="benefit-bar">
      {benefits.map(({ icon: Icon, title, text }) => (
        <Tilt className="benefit" key={title} max={12}>
          <span className="benefit-icon"><Icon /></span><div><b>{title}</b><small>{text}</small></div>
        </Tilt>
      ))}
    </Reveal>
  );
}
