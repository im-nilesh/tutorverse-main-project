import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { subjects, tutors } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import TutorCard from "../components/TutorCard";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";

export default function TutorsPage() {
  const [active, setActive] = useState("All Subjects");
  const [query, setQuery] = useState("");
  const { notify } = useOutletContext();
  const visible = useMemo(() => tutors.filter((t) => {
    const matchesSubject = active === "All Subjects" || t.tags.includes(active);
    const term = query.trim().toLowerCase();
    const matchesQuery = !term || [t.name, t.subject, t.mode].join(" ").toLowerCase().includes(term);
    return matchesSubject && matchesQuery;
  }), [active, query]);
  return <div className="section-wrap page-wrap">
    <Reveal className="page-intro">
      <span className="eyebrow"><Sparkles size={14} /> FIND YOUR MENTOR</span>
      <h1>Discover your <em>perfect tutor</em></h1>
      <p className="hero-description">Explore experienced educators, compare their subjects and find a learning style that works for you.</p>
    </Reveal>
    <Reveal className="tutors-section">
      <SectionTitle kicker="EXPLORE OUR COMMUNITY" title="Meet our" accent="Tutors" text="Browse tutor profiles and narrow your search by subject." />
      <div className="tutor-toolbar">
        <label className="tutor-search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tutor, subject or class mode" /></label>
        <span className="toolbar-count"><SlidersHorizontal size={16}/> {visible.length} tutors</span>
      </div>
      <div className="subject-filter">{["All Subjects", ...subjects].map(s=><button key={s} className={active===s?"filter active":"filter"} onClick={()=>setActive(s)}>{s}</button>)}</div>
      <div className="tutor-grid">{visible.length ? visible.map(t=><TutorCard key={t.name} t={t} notify={notify}/>) : <p className="empty">No tutors match your search. Try another name or subject.</p>}</div>
    </Reveal>
    <Reveal className="tutor-promo">
      <Tilt className="promo-cube" max={14}><div className="cube"><b/><b/><b/><b/><b/><b/></div></Tilt>
      <div><span className="kicker">SHARE WHAT YOU KNOW</span><h2>Are you an <em>educator?</em></h2><p>Build your profile and connect with learners looking for your expertise.</p></div>
      <a className="btn btn-primary" href="/#for-tutors">Become a Tutor</a>
    </Reveal>
  </div>;
}