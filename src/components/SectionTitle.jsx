import { ArrowRight } from "lucide-react";

export default function SectionTitle({ kicker, title, accent, text, link }) {
  return (
    <div className="section-title-row">
      <div>
        {kicker && <span className="kicker">{kicker}</span>}
        <h2>{title} <em>{accent}</em></h2>
        {text && <p>{text}</p>}
      </div>
      {link && <a href={link[1]} className="text-link">{link[0]} <ArrowRight size={16} /></a>}
    </div>
  );
}
