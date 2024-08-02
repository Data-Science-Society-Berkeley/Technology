const headlineStats = [
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
  { name: "Completed Client Projects", num: "42" },
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
    </div>
  );
}

export default About;
