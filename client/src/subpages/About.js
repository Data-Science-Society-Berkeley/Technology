import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

const headlineStats = [
  { name: "Completed Client Projects", num: "50+" },
  { name: "Past Workshops and Events Hosted", num: "68" },
  { name: "Datathon Past Participants", num: "300+" },
  { name: "Past Members", num: "800+" },
];

const execMembers = [
  {
    name: "Siddharth Ramshankar",
    role: "President",
    linkedin: "https://www.linkedin.com/in/siddharth-ramshankar1/",
    email: "mailto:siddharthr@berkeley.edu",
    img: "/Leadership/Sid.jpg",
  },
  {
    name: "James Geronimo",
    role: "Internal Vice President",
    linkedin: "https://www.linkedin.com/in/james-geronimo/",
    email: "mailto:jegeronimo@berkeley.edu",
    img: "/Leadership/James.jpg",
  },
  {
    name: "Michael Florip",
    role: "External Vice President",
    linkedin: "https://www.linkedin.com/in/michael-florip/",
    email: "mailto:michaelflorip@berkeley.edu",
    img: "/Leadership/Michael.jpg",
  },
  {
    name: "Austin Ardisaputra",
    role: "VP of Tech",
    linkedin: "https://www.linkedin.com/in/aardisaputra/",
    email: "mailto:ardisaputra@berkeley.edu",
    img: "/Leadership/Austin2.png",
  },
  {
    name: "Wilson Fung",
    role: "VP of Marketing",
    linkedin: "https://www.linkedin.com/in/michael-florip/",
    email: "mailto:michaelflorip@berkeley.edu",
    img: "/Leadership/Wilson.jpeg",
  },
  {
    name: "Joseph Zhai",
    role: "VP of Culture",
    linkedin: "https://www.linkedin.com/in/josephzhai/",
    email: "mailto:josephzhai@berkeley.edu",
    img: "/Leadership/Joseph.jpeg",
  },
  {
    name: "Shreeya Sethuraman",
    role: "VP of Culture",
    linkedin: "https://www.linkedin.com/in/shreeya-sethuraman-0266751b0/",
    email: "mailto:shreeya.sethuraman@berkeley.edu",
    img: "/Leadership/Shreeya.jpeg",
  },
  {
    name: "Fiona Chang",
    role: "VP of Finance",
    linkedin: "https://www.linkedin.com/in/fionacch/",
    email: "mailto:fionac@berkeley.edu",
    img: "/Leadership/Fiona.jpg",
  },
  {
    name: "Madeleine Larson",
    role: "Director of Consulting",
    linkedin: "https://www.linkedin.com/in/madeleinelarson/",
    email: "mailto:madeleinelarson@berkeley.edu",
    img: "/Leadership/Madeleine.jpeg",
  },
  {
    name: "Nathan Kuo",
    role: "Director of Social Good",
    linkedin: "https://www.linkedin.com/in/nathanpkuo",
    email: "mailto:nathanpkuo@berkeley.edu",
    img: "/Leadership/Nathan.jpeg",
  },
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
    img: "/Leadership/Lynn.jpg",
  },
  {
    name: "Ryan Stevenson",
    role: "Director of Acadev",
    linkedin: "https://www.linkedin.com/in/ryan-stevenson-315926252/",
    email: "mailto:ryanstevenson@berkeley.edu",
    img: "/Leadership/Ryan.jpg",
  },
];

const sponsors = [
  { path: "/Sponsors/Deepnote.png" },
  { path: "/Sponsors/Decal.png" },
];

const partners = [
  { path: "/Partners/Ascend.png" },
  { path: "/Partners/BIDS.png" },
  { path: "/Partners/Blueprint.png" },
  { path: "/Partners/CalActuarial.png" },
  { path: "/Partners/CDSS.png" },
  { path: "/Partners/Data8.png" },
  { path: "/Partners/EAB.png" },
  { path: "/Partners/ecode.png" },
  { path: "/Partners/Haas-DS.png" },
  { path: "/Partners/HBSA.png" },
  { path: "/Partners/MLAB.png" },
  { path: "/Partners/NIB.png" },
  { path: "/Partners/PBL.png" },
  { path: "/Partners/PCS.png" },
  { path: "/Partners/SAAS.png" },
  { path: "/Partners/UEA.png" },
];

function About() {
  return (
    <div>
      <div className="bg-gradient-to-b from-white to-[#8CD6D1] font-lato">
        <div className="w-full">
          <img
            class="h-full w-full object-cover"
            src={"/aboutUs.png"}
            alt="About Us"
          />
          <h1 className="top-[5vw] font-lato w-[100vw] text-white font-bold text-6xl text-center">
            {/* ABOUT US */}
          </h1>
        </div>

        <div className="mx-[5em] md:mx-[10em] font-lato text-xl">
          <div className="text-center font-bold text-3xl my-[1em]">
            Who We Are
          </div>
          {/* Data Science Society is UC Berkeley's first student-run,
          not-for-profit organization focused on data science and its
          interdisciplinary applications. Since our founding in 2016, we have
          united students from a wide range of disciplines behind our shared
          passion for all things data. */}
        </div>
        <div className="flex flex-row sm:mx-[1em] md:mx-0 lg:mx-[10em] justify-between flex-wrap w-100">
          {headlineStats.map((item) => (
            <div className="flex flex-col text-center my-[2em] mx-auto">
              <div className="text-[#ffc54a] text-5xl font-bold">
                {item.num}
              </div>
              <div className="text-xl mx-[5em]">{item.name}</div>
            </div>
          ))}
        </div>
        <div className="mx-[5em] md:mx-[10em] font-lato text-xl">
          <div className="text-center font-bold text-3xl my-[1em]">
            Mission and Values
          </div>
          Our mission is to foster a strong data science community on campus by
          advocating for educational workshops, professional events, and
          corporate projects. Our educational and consulting initiatives have
          impacted thousands of students in a variety of majors across campus
          and given them the technical and soft skills needed to thrive in an
          increasingly data-centric world.`
        </div>
        <div className="mx-[5em] md:mx-[10em] font-lato text-xl">
          <div className="text-center font-bold text-3xl my-[1em] italic">
            How We Achieve This Mission: Our Committees
          </div>
          <div className="text-center font-bold text-2xl my-[1em]">
            Academic Development Committee
          </div>
          <div className="text-xl my-[1em]">
            The academic development committee directs our decal program open to
            all skill levels and students and hosts a variety of educational
            workshops for the greater campus community.
          </div>
          <Link to="/joinus" className="text-[#3a78dd] w-[100vw]">
            <div className="text-center mb-[3em]">Join Acadev →</div>
          </Link>
          <div className="text-center font-bold text-2xl my-[1em]">
            Consulting Committee
          </div>
          <div className="text-xl my-[1em]">
            We are passionate about working with corporate clients to provide
            data-driven insights and actionable solutions through advanced
            analytical methods.
          </div>
          <Link to="/joinus" className="text-[#3a78dd] w-[100vw]">
            <div className="text-center mb-[3em]">Join Consulting →</div>
          </Link>
          <div className="text-center font-bold text-2xl my-[1em]">
            Social Good Committee
          </div>
          <div className="text-xl my-[1em]">
            We are passionate about contributing to tech for good by identifying
            data-driven insights and actionable solutions for the missions of
            non-profit organizations. The Social Good committee acts as a
            consulting committee for nonprofits with social good initiatives.
          </div>
          <Link to="/joinus" className="text-[#3a78dd] w-[100vw]">
            <div className="text-center pb-[3em]">Join Social Good →</div>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#8CD6D1] to-white font-lato">
        <div className="mx-[5em]">
          <div className="text-center font-bold text-3xl py-[1em]">
            Meet Our Executive Team
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-5">
            {execMembers.map((member) => (
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
        <div className="mx-[5em]">
          <div className="text-center font-bold text-3xl mt-[3em]">
            Our Sponsors
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {sponsors.map((sponsor) => (
              <img
                className="max-w-[300px] mx-[2em] my-[2em] shadow-xl object-cover"
                src={sponsor.path}
                alt="sponsor"
              />
            ))}
          </div>
        </div>
        <div className="mx-[5em]">
          <div className="text-center font-bold text-3xl mt-[3em]">
            Current and Past Collaborators
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {partners.map((partner) => (
              <img
                className="mx-[2em] my-[2em] shadow-xl w-fit h-fit bg-white rounded-lg"
                src={partner.path}
                alt="partner"
              />
            ))}
          </div>
        </div>
        <img src={"/pattern2.png"} alt="Landing Photo" />
      </div>
    </div>
  );
}

export default About;
