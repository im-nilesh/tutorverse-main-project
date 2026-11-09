
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, GraduationCap, ArrowRight } from "lucide-react";

import { tutors } from "../data/content";

import TutorSearchHero from "../components/tutors/TutorSearchHero";
import TutorFilters from "../components/tutors/TutorFilters";
import TutorResults from "../components/tutors/TutorResult";

import Reveal from "../components/ui/Reveal";
import Tilt from "../components/ui/Tilt";

import "../styles/tutor.css";

const initialFilters = {
  subject: "All Subjects",
  mode: "Any mode",
  experience: "0",
  budget: "0"
};

export default function Tutors({ notify }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("recommended");

  const resetFilters = () => {
    setQuery("");
    setFilters(initialFilters);
    setSortBy("recommended");
  };

  const filteredTutors = useMemo(() => {
    let result = tutors.filter((tutor) => {
      const searchTerm = query.trim().toLowerCase();

      const searchableText = [
        tutor.name,
        tutor.subject,
        tutor.mode,
        ...(tutor.tags || [])
      ].join(" ").toLowerCase();

      const matchesSearch =
        !searchTerm || searchableText.includes(searchTerm);

      const matchesSubject =
        filters.subject === "All Subjects" ||
        (tutor.tags || []).includes(filters.subject);

      const matchesMode =
        filters.mode === "Any mode" ||
        tutor.mode.toLowerCase().includes(filters.mode.toLowerCase());

      const experience = parseInt(tutor.exp, 10) || 0;

      const matchesExperience =
        experience >= Number(filters.experience);

      const price = Number(
        String(tutor.price).replace(/[^\d]/g, "")
      );

      const matchesBudget =
        Number(filters.budget) === 0 ||
        price <= Number(filters.budget);

      return (
        matchesSearch &&
        matchesSubject &&
        matchesMode &&
        matchesExperience &&
        matchesBudget
      );
    });

    result = [...result];

    switch (sortBy) {
      case "rating":
        result.sort(
          (a, b) => Number(b.rating) - Number(a.rating)
        );
        break;

      case "price-low":
        result.sort(
          (a, b) =>
            Number(a.price.replace(/[^\d]/g, "")) -
            Number(b.price.replace(/[^\d]/g, ""))
        );
        break;

      case "price-high":
        result.sort(
          (a, b) =>
            Number(b.price.replace(/[^\d]/g, "")) -
            Number(a.price.replace(/[^\d]/g, ""))
        );
        break;

      case "experience":
        result.sort(
          (a, b) =>
            parseInt(b.exp, 10) - parseInt(a.exp, 10)
        );
        break;

      default:
        break;
    }

    return result;
  }, [query, filters, sortBy]);

  return (
    <div className="find-page">

      <div className="section-wrap">

        {/* Hero */}

        <TutorSearchHero
          query={query}
          setQuery={setQuery}
          totalTutors={tutors.length}
        />

        {/* Filters */}

        <Reveal className="find-filter-wrapper">
          <TutorFilters
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
          />
        </Reveal>

        {/* Results */}

        <TutorResults
          tutors={filteredTutors}
          totalTutors={tutors.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resetFilters={resetFilters}
          notify={notify}
        />

        {/* Tutor CTA */}

        <Reveal className="find-tutor-cta">

          <Tilt className="find-cta-inner" max={4}>

            <div className="find-cta-icon">
              <GraduationCap size={38} />
            </div>

            <div className="find-cta-copy">
              <span className="kicker">
                SHARE YOUR KNOWLEDGE
              </span>

              <h2>
                Are you ready to become a <em>tutor?</em>
              </h2>

              <p>
                Connect with students, showcase your expertise
                and make a difference through teaching.
              </p>
            </div>

            <Link className="btn btn-light" to="/#for-tutors">
              Become a Tutor
              <ArrowRight size={17} />
            </Link>

            <Sparkles className="find-cta-sparkle" size={30} />

          </Tilt>
        </Reveal>

      </div>
    </div>
  );
}
