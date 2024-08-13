import { Link } from "react-router-dom";

const headlineStats = [
  { name: "past decal students", num: "1000+" },
  { name: "semesters of teaching", num: "20+" },
  { name: "client projects completed", num: "50+" },
  { name: "past datathon participants", num: "300+" },
  { name: "events hosted", num: "71" },
  { name: "camera duels", num: "500+" },
];

const landingPageIndex = [
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "We leave an impact beyond Berkeley through partnering with companies from a variety of domains to create enterprise-level machine learning and analytics solutions.",
    link: "More about consulting →",
    img: "/consulting.jpg",
    url: "/about",
  },
  {
    keyword: "EDUCATE",
    subtitle: "ACADEMIC DEVELOPMENT COMMITTEE",
    desc: "We lead & teach the DeCal course, “Introduction to Real World Data Science”, in addition to spearheading multiple data science educational iniatives on campus.",
    link: "More about education →",
    img: "/acadev.jpg",
    url: "/about",
  },
  {
    keyword: "GIVE BACK",
    subtitle: "SOCIAL GOOD COMMITTEE",
    desc: "We provide pro-bono support for non-profit organizations through developing advanced analytical insights to recognize uplifting initiatives around the globe.",
    link: "More about social good →",
    img: "/socialgood.jpg",
    url: "/about",
  },
  {
    keyword: "EMPOWER",
    subtitle: "DATATHONS, PANELS & MORE EVENTS",
    desc: "We host an annual datathon and UCB's annual Data Science Forum, inspiring students to make data-driven decisions and to incorporate data science in their professional lives.",
    link: "More about events →",
    img: "/datathons.jpg",
    url: "/about",
  },
  {
    keyword: "LEARN",
    subtitle: "",
    desc: "Read our educational articles on Medium, written by members.",
    link: "Check out the DSS Medium →",
    img: "/medium.png",
    url: "https://medium.com/@dssberkeley",
  },
];

function Home() {
  return (
    <div>
      <img src={"/landingphoto.png"} alt="Landing" />
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="p-4 mx-[4em] mt-[2em] text-black text-left font-lato flex-1 min-w-[20em]">
          <div className="text-4xl font-bold">DATA SCIENCE SOCIETY</div>
          <br />
          <div className="text-m">
            Berkeley’s first undergraduate data-science focused student
            organization. Actively fostering a strong data science community on
            campus via our consulting and educational initiatives.
          </div>
          <br />
          <Link to="/about" className="text-[#77b8b3]">
            About us →
          </Link>
        </div>
        <div className="mx-[4em] mt-[2em] text-black flex-1 min-w-[20em]">
          <div className="grid grid-cols-3 gap-4 p-4">
            {headlineStats.map((item) => (
              <div className="flex flex-col items-center">
                <div className="p-1 text-3xl text-[#77b8b3] font-lato font-bold">
                  {item.num}
                </div>
                <div className="text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={"/pattern1.png"} alt="Pattern 1" />
      {landingPageIndex.map((item) => (
        <div className="flex flex-row items-center justify-center flex-wrap">
          <div className="p-4 m-2 text-black text-left font-lato flex-grow max-w-[30em]">
            <div className="text-4xl font-bold">{item.keyword}</div>
            <br />
            <div className="text-xl font-bold">{item.subtitle}</div>
            <br />
            <div className="text-m">{item.desc}</div>
            <br />
            <Link to={item.url} className="text-[#77b8b3]">
              {item.link}
            </Link>
          </div>
          <div className="p-4 m-2 text-white">
            <img
              className="md:w-[30em] w-[15em]"
              src={item.img}
              alt={item.img}
            />
          </div>
        </div>
      ))}
      <img src={"/pattern2.png"} alt="Pattern 2" />
    </div>
  );
}

export default Home;
