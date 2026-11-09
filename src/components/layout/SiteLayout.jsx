import { useRef, useState } from "react";
import Header from "./Header";
import Footer from "../Footer";
import Toast from "../Toast";

export default function SiteLayout({ children, pathname, navigate }) {
  const [notice, setNotice] = useState("");
  const timer = useRef();
  const notify = (message) => {
    setNotice(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(""), 2800);
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header notify={notify} pathname={pathname} navigate={navigate} />
      <main>{typeof children === "function" ? children({ notify }) : children}</main>
      <Footer />
      <Toast message={notice} />
    </div>
  );
}