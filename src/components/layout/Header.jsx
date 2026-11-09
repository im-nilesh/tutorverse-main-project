import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header({ notify }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => setOpen(false);
  const actions = <>
    <button className="btn btn-outline" onClick={() => { notify("Login flow can be connected to your backend."); close(); }}>Log In</button>
    <button className="btn btn-primary" onClick={() => { notify("Sign-up flow can be connected to your backend."); close(); }}>Sign Up <ArrowRight size={16} /></button>
  </>;
  return <header className={scrolled ? "header scrolled" : "header"}>
    <NavLink className="brand" to="/" aria-label="TutorVerse home" onClick={close}>
      <span className="brand-mark"><BookOpen size={26} /></span><span>Tutor<span>Verse</span></span>
    </NavLink>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav nav-open" : "nav"}>
      <NavLink to="/" end onClick={close}>Home</NavLink>
      <NavLink to="/tutors" onClick={close}>Find Tutors</NavLink>
      <a href="/#for-tutors" onClick={close}>For Tutors</a>
      <a href="/#how-it-works" onClick={close}>How It Works</a>
      <a href="/#testimonials" onClick={close}>Testimonials</a>
      <a href="/#contact" onClick={close}>Contact</a>
      <div className="mobile-actions">{actions}</div>
    </nav>
    <div className="header-actions">{actions}</div>
  </header>;
}