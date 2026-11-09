import { BookOpen } from "lucide-react";

export default function Footer() {
  const links = [
    ["Home", "/#home"],
    ["Find Tutors", "/#tutors"],
    ["For Tutors", "/#for-tutors"],
    ["How It Works", "/#how-it-works"],
    ["Testimonials", "/#testimonials"]
  ];
  return (
    <footer className="footer section-wrap">
      <a className="brand" href="/"><span className="brand-mark"><BookOpen size={24} /></span><span>Tutor<span>Verse</span></span></a>
      <div className="footer-links">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
      <span className="copyright">© 2026 TutorVerse. Learn without limits.</span>
    </footer>
  );
}