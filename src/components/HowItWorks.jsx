import { GraduationCap, Users } from "lucide-react";
import { studentSteps, tutorSteps } from "../data/content";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

function StepCard({ id, icon: Icon, title, steps }) {
  return (
    <Tilt className="step-card" id={id} max={6}>
      <div className="step-visual"><div className="cube"><b /><b /><b /><b /><b /><b /></div></div>
      <div className="step-content">
        <h3><Icon /> {title}</h3>
        {steps.map((s, i) => <div className="step-row" key={s}><b>{i + 1}</b>{s}</div>)}
      </div>
    </Tilt>
  );
}

export default function HowItWorks() {
  return (
    <Reveal id="how-it-works">
      <div className="section-heading"><span className="line" /><h2>How It <em>Works</em></h2><span className="line" /></div>
      <p className="section-subtitle">Get started in just a few simple steps.</p>
      <div className="steps-grid">
        <StepCard icon={Users} title="For Students / Parents" steps={studentSteps} />
        <StepCard id="for-tutors" icon={GraduationCap} title="For Tutors" steps={tutorSteps} />
      </div>
    </Reveal>
  );
}
