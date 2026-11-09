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

      <Benefits />

      <HowItWorks />

      <Tutors
        active={active}
        setActive={setActive}
        notify={notify}
      />

      <Subjects pick={pick} />

      <Testimonials />

      <Cta />
    </>
  );
}