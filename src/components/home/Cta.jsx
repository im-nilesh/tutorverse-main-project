import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "../../ui/Reveal";

export default function Cta() {
  return (
    <Reveal id="contact" className="cta">
      <div className="cta-icon"><GraduationCap size={38} /></div>
      <div><h2>Ready to start your <em>learning journey?</em></h2><p>Whether you're looking for a tutor or want to teach, get started in minutes.</p></div>
      <div className="cta-actions">
        <a className="btn btn-light" href="#tutors">Find a Tutor <ArrowRight size={16} /></a>
        <a className="btn btn-cta-outline" href="#for-tutors">Become a Tutor</a>
      </div>
    </Reveal>
  );
}
