import { BadgeCheck, Clock3, Laptop, Star } from "lucide-react";
import Tilt from "./Tilt";

export default function TutorCard({ t, notify }) {
  return (
    <Tilt as="article" className="tutor-card" max={9}>
      <div className="tutor-top">
        <div className={`avatar ${t.color}`}>{t.initials}</div>
        <div className="tutor-name">
          <h3>{t.name} <BadgeCheck size={14} /></h3><p>{t.subject}</p>
          <div className="rating"><Star size={13} fill="currentColor" /> {t.rating} <span>({t.reviews} reviews)</span></div>
        </div>
        <span className="price">{t.price}<small>/hr</small></span>
      </div>
      <div className="tutor-meta"><span><Clock3 /> {t.exp} exp.</span><span><Laptop /> {t.mode}</span></div>
      <div className="tutor-actions">
        <button className="btn btn-outline" onClick={() => notify(`${t.name}'s profile preview is ready to connect.`)}>View Profile</button>
        <button className="btn btn-primary" onClick={() => notify(`Contact request for ${t.name} — connect this to your backend.`)}>Contact</button>
      </div>
    </Tilt>
  );
}
