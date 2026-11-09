
import { useEffect, useRef, useState } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Toast from "./components/common/Toast";
import ScrollToHash from "./components/common/ScrollToHash";

import Home from "./pages/Home";
import Tutors from "./pages/Tutors";

function AppLayout() {
  const [notice, setNotice] = useState("");
  const timer = useRef(null);

  const notify = (message) => {
    setNotice(message);

    window.clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      setNotice("");
    }, 2800);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="site-shell">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <ScrollToHash />
      <Header notify={notify} />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home notify={notify} />}
          />

          <Route
            path="/tutors"
            element={<Tutors notify={notify} />}
          />

          <Route
            path="*"
            element={
              <div className="section-wrap">
                <h1>404 — Page not found</h1>
                <Link className="btn btn-primary" to="/">
                  Back to Home
                </Link>
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

      <Toast message={notice} />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
