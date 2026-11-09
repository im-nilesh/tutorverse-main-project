import { BookOpen } from "lucide-react";
import { nav } from "../../data/content";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand" href="#home"><span className="brand-mark"><BookOpen size={24} /></span><span>Tutor<span>Verse</span></span></a>
      <div className="footer-links">{nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</div>
      <span className="copyright">© 2026 TutorVerse. Learn without limits.</span>
    </footer>
  );
}
