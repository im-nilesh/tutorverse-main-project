import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";
import { nav } from "../../data/content";

export default function Header({ notify }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const close = () => setOpen(false);
  const actions = (
    <>
      <button className="btn btn-outline" onClick={() => notify("Login flow can be connected to your backend.")}>Log In</button>
      <button className="btn btn-primary" onClick={() => notify("Sign-up flow can be connected to your backend.")}>Sign Up <ArrowRight size={16} /></button>
    </>
  );
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <a className="brand" href="#home" aria-label="TutorVerse home">
        <span className="brand-mark"><BookOpen size={26} /></span><span>Tutor<span>Verse</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav nav-open" : "nav"}>
        {nav.map(([l, h], i) => <a key={l} className={i === 0 ? "nav-active" : ""} href={h} onClick={close}>{l}</a>)}
        <a href="#contact" onClick={close}>Contact</a>
        <div className="mobile-actions">{actions}</div>
      </nav>
      <div className="header-actions">{actions}</div>
    </header>
  );
}
