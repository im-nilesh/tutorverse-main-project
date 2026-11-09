import { subjects, tutors } from "../../data/content";
import Reveal from "../../ui/Reveal";
import SectionTitle from "../../ui/SectionTitle";
import TutorCard from "../../ui/TutorCard";

export default function Tutors({ active, setActive, notify }) {
  const list = tutors.filter((t) => active === "All Subjects" || t.tags.includes(active));
  return (
    <Reveal id="tutors" className="tutors-section">
      <SectionTitle kicker="MEET YOUR MENTORS" title="Featured" accent="Tutors" text="Experienced, verified and highly rated tutors." link={["View all tutors", "#contact"]} />
      <div className="subject-filter">
        {["All Subjects", ...subjects].map((s) => <button key={s} className={active === s ? "filter active" : "filter"} onClick={() => setActive(s)}>{s}</button>)}
      </div>
      <div className="tutor-grid">
        {list.length ? list.map((t) => <TutorCard key={t.name} t={t} notify={notify} />) : <p className="empty">No tutors for {active} yet. Try another subject.</p>}
      </div>
    </Reveal>
  );
}
