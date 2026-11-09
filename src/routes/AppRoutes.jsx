import { useCallback, useEffect, useRef, useState } from "react";
import SiteLayout from "../components/layout/SiteLayout";
import Home from "../pages/Home";
import TutorsPage from "../pages/Tutors";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  const [pathname, setPathname] = useState(window.location.pathname.replace(/\/+$/, "") || "/");
  const [notice, setNotice] = useState("");
  const timer = useRef();

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname.replace(/\/+$/, "") || "/");
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.clearTimeout(timer.current);
    };
  }, []);

  const navigate = useCallback((path) => {
    const nextPath = path.replace(/\/+$/, "") || "/";
    if (nextPath === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", nextPath);
    setPathname(nextPath);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const notify = useCallback((message) => {
    setNotice(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(""), 2800);
  }, []);

  let page;
  if (pathname === "/") page = <Home notify={notify} />;
  else if (pathname === "/tutors") page = <TutorsPage notify={notify} />;
  else page = <NotFound />;

  return <SiteLayout pathname={pathname} navigate={navigate} notify={notify} notice={notice}>{page}</SiteLayout>;
}