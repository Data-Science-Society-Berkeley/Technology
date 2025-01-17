import { Link } from "react-router-dom";

const headlineStats = [
  { name: "past decal students", num: "1000+" },
  { name: "semesters of teaching", num: "20+" },
  { name: "client projects completed", num: "50+" },
  { name: "past datathon participants", num: "300+" },
  { name: "events hosted", num: "71" },
  { name: "past members", num: "800+" },
];

const landingPageIndex = [
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "We leave an impact beyond Berkeley through partnering with companies from a variety of domains to create enterprise-level machine learning and analytics solutions.",
    link: "More about consulting →",
    img: "/consulting.jpg",
    url: "/about#",
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
    url: "/events#",
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
  return <div>We have moved</div>;
}

export default Home;
