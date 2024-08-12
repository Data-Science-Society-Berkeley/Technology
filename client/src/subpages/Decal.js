import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

const directors = [
  {
    name: "Bing Concepcion",
    role: "Director of Acadev",
    linkedin: "https://www.linkedin.com/in/brandon-concepcion-a161b4248/",
    email: "mailto:brandon_concepcion@berkeley.edu",
    img: "/Leadership/Bing.png",
  },
  {
    name: "Lynn Chien",
    role: "Director of Acadev",
    linkedin: "https://www.linkedin.com/in/lynn-chien-772747113/",
    email: "mailto:lchien8@berkeley.edu",
    img: "/Leadership/Lynn.jpeg",
  },
  {
    name: "Ryan Stevenson",
    role: "Director of Acadev",
    linkedin: "https://www.linkedin.com/in/ryan-stevenson-315926252/",
    email: "mailto:ryanstevenson@berkeley.edu",
    img: "/Leadership/Ryan.jpeg",
  },
];

function Decal() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1] font-lato">
      <img src={"/DecalLanding.png"} alt="Landing" />
      <div className="font-lato text-xl">
        <div className="text-center font-bold text-5xl my-[1em]">DeCal</div>
      </div>
      <div className="mx-[10em] text-xl">
        Data 198: Intro to Real World Data Science{" "}
        <Link
          className="text-[#77b8b3]"
          to="https://jegeronimo.github.io/dss-data-198/"
        >
          (DeCal Website Link)
        </Link>
        .
        <br /> <br />
        The goal of our DeCal is to provide data science education and
        experience for students with little to no prior knowledge of the field.
        Our course focuses on practical tools not otherwise emphasized in
        Berkeley’s academic curricula, and allows for students to explore their
        domain interests in a semester-long project.
      </div>

      {/* Section 1 */}
      <div className="mx-[10em] text-xl font-bold">
        <br />
        What will you learn in the DeCal?
      </div>
      <div className="mx-[10em] text-xl">
        This semester-long course focuses on introducing students to essential
        data science skills in an interactive setting. As a DeCal student, you
        will learn every step of the data science lifecycle: from formulating a
        data-centric project idea, to extracting stories with exploratory data
        analysis, and finally creating and evaluating predictive models.
        <br /> <br />
        Using your new skills and knowledge, you will have the opportunity to
        develop a project of your choosing with other undergraduate students
        under a DSS mentor. You will also be able to present your findings and
        final project at Berkeley’s semesterly Data Science Research Symposium
        and publish your project on DSS’s website.
      </div>

      {/* Section 2 */}
      <div className="mx-[10em] text-xl font-bold">
        <br />
        What project do you work on?
      </div>
      <div className="mx-[10em] text-xl">
        You may choose your own project! Decal students in past semesters have
        worked on projects related to various different disciplines like
        Economics, Public Health, Linguistics, Biology, and much more! Feel free
        to look at previous projects below for some inspiration. Be creative!
      </div>

      {/* Section 3 */}
      <div className="mx-[10em] text-xl font-bold">
        <br />
        Who can take the DeCal?
      </div>
      <div className="mx-[10em] text-xl">
        There are no formal prerequisites for this course. However, it is
        recommended to have some level of basic programming experience in
        Python; many of our past students have taken this DeCal concurrently or
        after DATA 8. Above all, we are looking for beginners in data science
        who are passionate about learning more about the field and willing to
        dedicate themselves to the required semester-long project.
      </div>

      {/* Section 4 */}
      <div className="mx-[10em] text-xl font-bold">
        <br />
        How can you apply?
      </div>
      <div className="mx-[10em] text-xl">
        Our application window will open soon. Visit the "Join Us" page and keep
        an eye out for our on-campus and virtual events for our timeline!
      </div>

      {/* Section 5 */}
      <div className="mx-[10em] text-xl font-bold">
        <br />
        Further details
      </div>
      <div className="mx-[10em] text-xl">
        The DeCal is 1 unit (P/NP) and there is a mandatory lecture on Mondays
        from 6:30-8:30pm in SOCS 20. We allow two unexcused absences before it
        affects your grade. The commitments for this course include: homeworks
        graded on completion, a final project and symposium presentations.
      </div>

      <div className="mx-[5em]">
        <div className="text-center font-bold text-3xl py-[1em]">
          Our Directors
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {directors.map((member) => (
            <ProfileCard
              name={member.name}
              linkedin={member.linkedin}
              email={member.email}
              img={member.img}
              position={member.role}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <img src={"/pattern2.png"} alt="Landing Photo" />
    </div>
  );
}

export default Decal;
