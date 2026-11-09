
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap">

      <Link className="brand" to="/">
        <span className="brand-mark">
          <BookOpen size={24} />
        </span>

        <span>
          Tutor<span>Verse</span>
        </span>
      </Link>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/tutors">Find Tutors</Link>
        <Link to="/#for-tutors">For Tutors</Link>
        <Link to="/#how-it-works">How It Works</Link>
        <Link to="/#testimonials">Testimonials</Link>
      </div>

      <span className="copyright">
        © 2026 TutorVerse. Learn without limits.
      </span>

    </footer>
  );
}
