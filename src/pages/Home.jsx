
import { useState } from "react";

import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import HowItWorks from "../components/home/HowItWorks";
import Tutors from "../components/home/Tutors";
import Subjects from "../components/home/Subjects";
import Testimonials from "../components/home/Testimonials";
import Cta from "../components/home/Cta";

export default function Home({ notify }) {
  const [active, setActive] = useState("All Subjects");

  const pick = (subject) => {
    setActive(subject);

    document
      .getElementById("tutors")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero />

      <div className="section-wrap">
        <Benefits />
      </div>

      <div className="section-wrap">
        <HowItWorks />
      </div>

      <div className="section-wrap">
        <Tutors
          active={active}
          setActive={setActive}
          notify={notify}
        />
      </div>

      <div className="section-wrap">
        <Subjects pick={pick} />
      </div>

      <div className="section-wrap">
        <Testimonials />
      </div>

      <div className="section-wrap">
        <Cta />
      </div>
    </>
  );
}
