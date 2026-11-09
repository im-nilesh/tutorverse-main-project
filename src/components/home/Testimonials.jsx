import { quotes } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import Tilt from "../ui/Tilt";

export default function Testimonials() {
  return (
    <Reveal id="testimonials" className="testimonials">
      <SectionTitle kicker="REAL STORIES, REAL PROGRESS" title="What Our Users" accent="Say" />
      <div className="quote-grid">
        {quotes.map((q) => (
          <Tilt as="article" className="quote-card" key={q.by} max={6}>
            <div className={`quote-avatar ${q.color}`}>{q.initials}</div>
            <div><div className="quote-stars">★★★★★</div><p>“{q.text}”</p><b>— {q.by} <span>({q.role})</span></b></div>
          </Tilt>
        ))}
      </div>
    </Reveal>
  );
}
