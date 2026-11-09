
import {
  Search,
  Sparkles,
  GraduationCap,
  BookOpen,
  Video,
  BadgeCheck,
  ArrowRight
} from "lucide-react";

export default function TutorSearchHero({ query, setQuery, totalTutors }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="find-hero">

      <div className="find-hero-copy">
        <div className="eyebrow">
          <Sparkles size={14} />
          FIND YOUR PERFECT MENTOR
          <i />
          LEARN BETTER
        </div>

        <h1>
          Discover the right
          <br />
          tutor for your
          <br />
          <em>next big leap.</em>
        </h1>

        <p className="find-hero-description">
          Great learning starts with the right guidance.
          Explore experienced tutors, compare expertise and
          find someone who understands your learning goals.
        </p>

        <form className="find-search-box" onSubmit={handleSubmit}>
          <Search size={21} />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tutors, subjects or skills..."
            aria-label="Search tutors"
          />

          <button className="btn btn-primary" type="submit">
            Search
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="find-hero-meta">
          <div>
            <BadgeCheck size={17} />
            Verified tutor profiles
          </div>

          <div>
            <GraduationCap size={18} />
            Multiple learning subjects
          </div>
        </div>

        <div className="find-hero-count">
          <span>{totalTutors}+</span>
          <span>Sample tutor profiles available</span>
        </div>
      </div>

      <div className="find-hero-art" aria-hidden="true">

        <div className="find-art-glow" />

        <div className="find-orbit find-orbit-one">
          <i />
        </div>

        <div className="find-orbit find-orbit-two">
          <i />
        </div>

        <div className="find-orbit find-orbit-three">
          <i />
        </div>

        <div className="find-art-core">
          <GraduationCap size={76} strokeWidth={1.5} />
        </div>

        <div className="find-float-card find-float-one">
          <span className="find-float-icon">
            <BookOpen size={21} />
          </span>

          <div>
            <strong>Expert Learning</strong>
            <small>Learn at your pace</small>
          </div>
        </div>

        <div className="find-float-card find-float-two">
          <span className="find-float-icon pink">
            <Video size={21} />
          </span>

          <div>
            <strong>Live Classes</strong>
            <small>Learn from anywhere</small>
          </div>
        </div>

        <div className="find-float-card find-float-three">
          <span className="find-float-icon blue">
            <BadgeCheck size={21} />
          </span>

          <div>
            <strong>Trusted Tutors</strong>
            <small>Explore tutor profiles</small>
          </div>
        </div>

      </div>
    </section>
  );
}
