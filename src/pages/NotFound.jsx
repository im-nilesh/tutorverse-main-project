import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";

export default function NotFound() {
  return <div className="section-wrap not-found-wrap"><Reveal className="not-found">
    <Tilt className="not-found-icon" max={16}><span>404</span></Tilt>
    <span className="kicker">PAGE NOT FOUND</span><h1>Looks like you're <em>off track.</em></h1>
    <p className="hero-description">The page you're looking for may have moved or doesn't exist.</p>
    <a className="btn btn-primary" href="/">Back to TutorVerse</a>
  </Reveal></div>;
}