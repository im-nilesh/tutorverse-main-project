import { useRef, useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Benefits from "./components/home/Benefits";
import HowItWorks from "./components/home/HowItWorks";
import Tutors from "./components/home/Tutors";
import Subjects from "./components/home/Subjects";
import Testimonials from "./components/home/Testimonials";
import Cta from "./components/home/Cta";
import Footer from "./components/layout/Footer";
import Toast from "./components/common/Toast";

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
