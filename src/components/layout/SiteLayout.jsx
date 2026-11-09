import Header from "./Header";
import Footer from "../Footer";
import Toast from "../Toast";

export default function SiteLayout({ children, pathname, navigate, notify, notice }) {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header notify={notify} pathname={pathname} navigate={navigate} />
      <main>{children}</main>
      <Footer />
      <Toast message={notice} />
    </div>
  );
}