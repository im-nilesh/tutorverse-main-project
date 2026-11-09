
import {
  SlidersHorizontal,
  RotateCcw,
  BookOpen,
  Video,
  Clock3,
  IndianRupee,
  Star
} from "lucide-react";

export default function TutorFilters({
  filters,
  setFilters,
  resetFilters
}) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <section className="find-filter-panel">

      <div className="find-filter-heading">
        <div className="find-filter-title">
          <span className="find-filter-icon">
            <SlidersHorizontal size={20} />
          </span>

          <div>
            <h3>Refine your search</h3>
            <p>Find a tutor who fits your learning needs.</p>
          </div>
        </div>

        <button
          className="find-reset-btn"
          onClick={resetFilters}
          type="button"
        >
          <RotateCcw size={15} />
          Reset filters
        </button>
      </div>

      <div className="find-filter-grid">

        <label className="find-filter-field">
          <span>
            <BookOpen size={15} />
            Subject
          </span>

          <select
            value={filters.subject}
            onChange={(e) => updateFilter("subject", e.target.value)}
          >
            <option value="All Subjects">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Computer Science">Computer Science</option>
            <option value="English">English</option>
            <option value="Social Science">Social Science</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </label>

        <label className="find-filter-field">
          <span>
            <Video size={15} />
            Teaching Mode
          </span>

          <select
            value={filters.mode}
            onChange={(e) => updateFilter("mode", e.target.value)}
          >
            <option value="Any mode">Any mode</option>
            <option value="Online">Online</option>
            <option value="Home">Home Classes</option>
          </select>
        </label>

        <label className="find-filter-field">
          <span>
            <Clock3 size={15} />
            Experience
          </span>

          <select
            value={filters.experience}
            onChange={(e) => updateFilter("experience", e.target.value)}
          >
            <option value="0">Any experience</option>
            <option value="3">3+ years</option>
            <option value="5">5+ years</option>
            <option value="8">8+ years</option>
          </select>
        </label>

        <label className="find-filter-field">
          <span>
            <IndianRupee size={15} />
            Maximum hourly fee
          </span>

          <select
            value={filters.budget}
            onChange={(e) => updateFilter("budget", e.target.value)}
          >
            <option value="0">Any budget</option>
            <option value="500">Up to ₹500</option>
            <option value="700">Up to ₹700</option>
            <option value="900">Up to ₹900</option>
          </select>
        </label>

      </div>
    </section>
  );
}
