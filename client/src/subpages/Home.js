const headlineStats = [
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
];

const landingPageIndex = [
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.",
    link: "About us →",
  },
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.",
    link: "About us →",
  },
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.",
    link: "About us →",
  },
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.",
    link: "About us →",
  },
  {
    keyword: "IMPACT",
    subtitle: "CONSULTING COMMITTEE",
    desc: "Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.",
    link: "About us →",
  },
];

function Home() {
  return (
    <div>
      <img src={"/landingphoto.png"} alt="Landing Photo" />
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="p-4 m-2 text-black text-left font-lato flex-1 min-w-[20em]">
          <div className="text-4xl font-bold">DATA SCIENCE SOCIETY</div>
          <br />
          <div className="text-m">
            Berkeley’s first undergraduate data-science focused student
            organization. Actively fostering a strong data science community on
            campus via our consulting and educational initiatives.
          </div>
          <br />
          About us →
        </div>
        <div className="m-2 text-black flex-1 min-w-[20em]">
          <div className="grid grid-cols-3 gap-4 p-4">
            {headlineStats.map((item) => (
              <div className="flex flex-col items-center">
                <div className="p-1 text-3xl text-black font-lato font-bold">
                  {item.num}
                </div>
                <div className="">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={"/pattern1.png"} alt="Landing Photo" />
      {landingPageIndex.map((item) => (
        <div className="flex flex-row items-center justify-center flex-wrap">
          <div className="p-4 m-2 text-black text-left font-lato flex-grow max-w-[30em]">
            <div className="text-4xl font-bold">IMPACT</div>
            <br />
            <div className="text-xl font-bold">CONSULTING COMMITTEE</div>
            <br />
            <div className="text-m">
              Berkeley’s first undergraduate data-science focused student
              organization. Actively fostering a strong data science community
              on campus via our consulting and educational initiatives.
            </div>
            <br />
            About us →
          </div>
          <div className="p-4 m-2 text-white">
            <img
              className="max-w-[30em]"
              src={"/consulting.jpg"}
              alt="Landing Photo"
            />
          </div>
        </div>
      ))}
      <img src={"/pattern2.png"} alt="Landing Photo" />
    </div>
  );
}

export default Home;
