import ProfileCard from "../components/ProfileCard";

const headlineStats = [
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
];

const execMembers = [
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
];

const sponsors = [{ path: "test" }, { path: "test" }];

const partners = [
  { path: "test" },
  { path: "test" },
  { path: "test" },
  { path: "test" },
  { path: "test" },
  { path: "test" },
  { path: "test" },
  { path: "test" },
];

function About() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <img src={"/aboutUs.png"} alt="Landing Photo" />
      <div className="w-[100vw] text-center">
        <h1 className="top-[10vw] font-lato absolute w-[100vw] text-white font-bold text-6xl">
          ABOUT US
        </h1>
      </div>
      <div className="mx-[10em]">
        <div className="text-center">Who We Are</div>
        Data Science Society is UC Berkeley's first student-run, not-for-profit
        organization focused on data science and its interdisciplinary
        applications. Since our founding in 2016, we have united students from a
        wide range of disciplines behind our shared passion for all things data.
      </div>
      <div className="flex flex-row mx-[10em] justify-between">
        {headlineStats.map((item) => (
          <div className="flex flex-col text-center">
            <div>{item.num}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="mx-[10em]">
        <div className="text-center">Who We Are</div>
        Data Science Society is UC Berkeley's first student-run, not-for-profit
        organization focused on data science and its interdisciplinary
        applications. Since our founding in 2016, we have united students from a
        wide range of disciplines behind our shared passion for all things data.
      </div>
      <div className="mx-[10em]">
        <div className="text-center">Who We Are</div>
        Data Science Society is UC Berkeley's first student-run, not-for-profit
        organization focused on data science and its interdisciplinary
        applications. Since our founding in 2016, we have united students from a
        wide range of disciplines behind our shared passion for all things data.
      </div>
      <div className="mx-[5em]">
        <div className="text-center">Meet Our Executive Team</div>
        <div className="flex flex-row flex-wrap justify-center">
          {execMembers.map((member) => (
            <ProfileCard />
          ))}
        </div>
      </div>
      <div className="mx-[5em]">
        <div className="text-center">Sponsors</div>
        <div className="flex flex-row flex-wrap justify-center">
          {sponsors.map((sponsor) => (
            <div>test sponsor</div>
          ))}
        </div>
      </div>
      <div className="mx-[5em]">
        <div className="text-center">Current and Past Collaborators</div>
        <div className="flex flex-row flex-wrap justify-center">
          {partners.map((partner) => (
            <div>test partner</div>
          ))}
        </div>
      </div>
      <img src={"/pattern2.png"} alt="Landing Photo" />
    </div>
  );
}

export default About;
