
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";

export default function Header({ notify }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const close = () => setOpen(false);

  const actions = (
    <>
      <button
        className="btn btn-outline"
        onClick={() => {
          notify("Login flow can be connected to your backend.");
          close();
        }}
      >
        Log In
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          notify("Sign-up flow can be connected to your backend.");
          close();
        }}
      >
        Sign Up
        <ArrowRight size={16} />
      </button>
    </>
  );

  return (
    <header className={scrolled ? "header scrolled" : "header"}>

      <Link
        className="brand"
        to="/"
        onClick={close}
        aria-label="TutorVerse home"
      >
        <span className="brand-mark">
          <BookOpen size={26} />
        </span>

        <span>
          Tutor<span>Verse</span>
        </span>
      </Link>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
          onClick={close}
        >
          Home
        </NavLink>

        <NavLink
          to="/tutors"
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
          onClick={close}
        >
          Find Tutors
        </NavLink>

        <Link to="/#for-tutors" onClick={close}>
          For Tutors
        </Link>

        <Link to="/#how-it-works" onClick={close}>
          How It Works
        </Link>

        <Link to="/#testimonials" onClick={close}>
          Testimonials
        </Link>

        <Link to="/#contact" onClick={close}>
          Contact
        </Link>

        <div className="mobile-actions">
          {actions}
        </div>
      </nav>

      <div className="header-actions">
        {actions}
      </div>

    </header>
  );
}
