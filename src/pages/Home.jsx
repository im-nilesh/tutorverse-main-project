import { useState } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Tutors from "../components/Tutors";
import Subjects from "../components/Subjects";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function Home({ notify }) {
  const [active, setActive] = useState("All Subjects");
  const pick = (subject) => {
    setActive(subject);
    document.getElementById("tutors")?.scrollIntoView({ behavior: "smooth" });
  };

  return <>
    <Hero />
    <Benefits />
    <HowItWorks />
    <Tutors active={active} setActive={setActive} notify={notify} />
    <Subjects pick={pick} />
    <Testimonials />
    <Cta />
  </>;
}