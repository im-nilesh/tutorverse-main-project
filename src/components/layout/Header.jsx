import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";

export default function Header({ notify, pathname, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const routeTo = (event, path) => {
    event.preventDefault();
    close();
    navigate(path);
  };
  const actions = <>
    <button className="btn btn-outline" onClick={() => { notify("Login flow can be connected to your backend."); close(); }}>Log In</button>
    <button className="btn btn-primary" onClick={() => { notify("Sign-up flow can be connected to your backend."); close(); }}>Sign Up <ArrowRight size={16} /></button>
  </>;

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <a className="brand" href="/" aria-label="TutorVerse home" onClick={(event) => routeTo(event, "/")}>
        <span className="brand-mark"><BookOpen size={26} /></span><span>Tutor<span>Verse</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav nav-open" : "nav"}>
        <a href="/" className={pathname === "/" ? "nav-active" : ""} onClick={(event) => routeTo(event, "/")}>Home</a>
        <a href="/tutors" className={pathname === "/tutors" ? "nav-active" : ""} onClick={(event) => routeTo(event, "/tutors")}>Find Tutors</a>
        <a href="/#for-tutors" onClick={close}>For Tutors</a>
        <a href="/#how-it-works" onClick={close}>How It Works</a>
        <a href="/#testimonials" onClick={close}>Testimonials</a>
        <a href="/#contact" onClick={close}>Contact</a>
        <div className="mobile-actions">{actions}</div>
      </nav>
      <div className="header-actions">{actions}</div>
    </header>
  );
}