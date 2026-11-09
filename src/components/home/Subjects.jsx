import { subjectIcons, subjects } from "../../data/content";
import Reveal from "../../ui/Reveal";
import SectionTitle from "../../ui/SectionTitle";
import Tilt from "../../ui/Tilt";

export default function Subjects({ pick }) {
  return (
    <Reveal className="subjects-section">
      <SectionTitle kicker="EXPLORE & DISCOVER" title="Popular" accent="Subjects" link={["Explore subjects", "#tutors"]} />
      <div className="subject-pills">
        {subjects.map((s, i) => <Tilt as="button" max={16} key={s} onClick={() => pick(s)}><span>{subjectIcons[i]}</span>{s}</Tilt>)}
      </div>
    </Reveal>
  );
}
