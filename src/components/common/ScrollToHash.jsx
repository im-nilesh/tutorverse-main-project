import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the #section in the URL after navigation, or to the top on a plain route change.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
