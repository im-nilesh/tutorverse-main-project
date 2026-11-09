import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionTitle({ kicker, title, accent, text, link }) {
  const [label, target] = link || [];
  const Anchor = target?.startsWith("/") ? Link : "a";
  const anchorProps = Anchor === Link ? { to: target } : { href: target };

  return (
    <div className="section-title-row">
      <div>
        {kicker && <span className="kicker">{kicker}</span>}
        <h2>{title} <em>{accent}</em></h2>
        {text && <p>{text}</p>}
      </div>
      {link && <Anchor {...anchorProps} className="text-link">{label} <ArrowRight size={16} /></Anchor>}
    </div>
  );
}
