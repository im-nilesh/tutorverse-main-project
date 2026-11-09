import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Tutors from "../components/Tutors";
import Subjects from "../components/Subjects";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function Home() {
  const [active, setActive] = useState("All Subjects");
  const { notify } = useOutletContext();
  const pick = (subject) => {
    setActive(subject);
    document.getElementById("tutors")?.scrollIntoView({ behavior: "smooth" });
  };
  return <>
    <Hero />
    <div className="section-wrap"><Benefits /></div>
    <div className="section-wrap"><HowItWorks /></div>
    <div className="section-wrap"><Tutors active={active} setActive={setActive} notify={notify} /></div>
    <div className="section-wrap"><Subjects pick={pick} /></div>
    <div className="section-wrap"><Testimonials /></div>
    <div className="section-wrap"><Cta /></div>
  </>;
}