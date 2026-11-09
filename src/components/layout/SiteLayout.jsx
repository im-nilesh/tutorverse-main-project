import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toast from "../Toast";

export default function SiteLayout() {
  const [notice, setNotice] = useState("");
  const timer = useRef();
  const notify = (message) => {
    setNotice(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(""), 2800);
  };
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header notify={notify} />
      <main><Outlet context={{ notify }} /></main>
      <Footer />
      <Toast message={notice} />
    </div>
  );
}