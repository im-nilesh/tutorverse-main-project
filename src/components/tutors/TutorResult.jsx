
import { SearchX, ArrowUpDown, Users } from "lucide-react";
import TutorCard from "../ui/TutorCard";
import Reveal from "../ui/Reveal";

export default function TutorResults({
  tutors,
  totalTutors,
  sortBy,
  setSortBy,
  resetFilters,
  notify
}) {
  return (
    <section className="find-results">

      <div className="find-results-heading">

        <div>
          <span className="kicker">YOUR LEARNING PARTNERS</span>

          <h2>
            Explore our <em>tutors.</em>
          </h2>

          <p>
            Browse profiles and find the right guide for your goals.
          </p>
        </div>

        <label className="find-sort">
          <ArrowUpDown size={17} />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort tutors"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="experience">Most experienced</option>
          </select>
        </label>

      </div>

      <div className="find-result-count">
        <div>
          <Users size={17} />
          Showing <strong>{tutors.length}</strong> of {totalTutors} tutors
        </div>

        <span>Demo profiles using local sample data</span>
      </div>

      {tutors.length > 0 ? (

        <div className="tutor-grid find-tutor-grid">
          {tutors.map((tutor) => (
            <Reveal key={tutor.name}>
              <TutorCard
                t={tutor}
                notify={notify}
              />
            </Reveal>
          ))}
        </div>

      ) : (

        <div className="find-empty-state">
          <div className="find-empty-icon">
            <SearchX size={34} />
          </div>

          <h3>No tutors found</h3>

          <p>
            We couldn't find tutors matching your selected
            filters. Try adjusting your search.
          </p>

          <button
            className="btn btn-primary"
            onClick={resetFilters}
          >
            Clear all filters
          </button>
        </div>

      )}

    </section>
  );
}
