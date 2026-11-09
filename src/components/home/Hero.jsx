import { useRef } from "react";
import { ArrowRight, BadgeCheck, BookOpen, CalendarDays, GraduationCap, Layers, Search, Sparkles, Video } from "lucide-react";
import { stats } from "../../data/content";

const floaters = [
  ["card-live", Video, "Live Classes", 70], ["card-schedule", CalendarDays, "Flexible Schedules", 110],
  ["card-expert", BadgeCheck, "Expert Tutors", 90], ["card-subject", Layers, "All Subjects", 60],
];

export default function Hero() {
  const scene = useRef(null);
  const tilt = (ry, rx) => { scene.current.style.setProperty("--ry", `${ry}deg`); scene.current.style.setProperty("--rx", `${rx}deg`); };
  const move = (e) => {
    const r = scene.current.getBoundingClientRect();
    tilt(((e.clientX - r.left) / r.width - 0.5) * 26, -((e.clientY - r.top) / r.height - 0.5) * 20);
  };
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14} /> LEARN <i /> CONNECT <i /> GROW</div>
        <h1>Find the Perfect Tutor<br />for Your <em>Learning Journey</em></h1>
        <p className="hero-description">Connect with verified and experienced tutors, explore their profiles, check subjects, schedules, and book classes easily — all in one platform.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary btn-hero" href="#tutors"><Search size={19} /> Find a Tutor <ArrowRight size={17} /></a>
          <a className="btn btn-glass btn-hero" href="#for-tutors"><GraduationCap size={20} /> Become a Tutor</a>
        </div>
        <div className="stats">
          {stats.map(([Icon, n, l]) => <div key={l}><Icon /><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </div>
      <div className="hero-art" onMouseMove={move} onMouseLeave={() => tilt(0, 0)} aria-label="3D learning scene">
        <div className="scene" ref={scene}>
          <div className="planet-glow" />
          <div className="orbit orbit-a"><i /></div><div className="orbit orbit-b"><i /></div><div className="orbit orbit-c"><i /></div>
          <div className="core"><BookOpen size={64} /></div>
          {floaters.map(([c, I, t, z], i) => (
            <div key={c} className={`art-card ${c}`} style={{ "--z": `${z}px`, animationDelay: `${i * -1.3}s` }}><I /><span>{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
