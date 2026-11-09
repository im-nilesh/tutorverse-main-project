import { useCallback, useEffect, useRef, useState } from "react";
import SiteLayout from "../components/layout/SiteLayout";
import Home from "../pages/Home";
import TutorsPage from "../pages/Tutors";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [notice, setNotice] = useState("");
  const timer = useRef();

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.clearTimeout(timer.current);
    };
  }, []);

  const navigate = useCallback((path) => {
    if (path === window.location.pathname) return;
    window.history.pushState({}, "", path);
    setPathname(window.location.pathname);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const notify = useCallback((message) => {
    setNotice(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(""), 2800);
  }, []);

  let page;
  if (pathname === "/") page = <Home notify={notify} />;
  else if (pathname === "/tutors") page = <TutorsPage notify={notify} />;
  else page = <NotFound />;

  return <SiteLayout pathname={pathname} navigate={navigate} notify={notify}>{page}</SiteLayout>;
}