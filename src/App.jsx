import { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Tutors from "./components/Tutors";
import Subjects from "./components/Subjects";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [active, setActive] = useState("All Subjects");
  const [notice, setNotice] = useState("");
  const timer = useRef();
  const notify = (m) => { setNotice(m); clearTimeout(timer.current); timer.current = setTimeout(() => setNotice(""), 2800); };
  const pick = (s) => { setActive(s); document.getElementById("tutors")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Header notify={notify} />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Tutors active={active} setActive={setActive} notify={notify} />
        <Subjects pick={pick} />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <Toast message={notice} />
    </div>
  );
}
