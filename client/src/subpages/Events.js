const pastEvents = [
  {
    path: "test",
    title: "testTitle",
    description: "Lorem ipsum",
    stats: "test stats",
  },
  {
    path: "test",
    title: "testTitle",
    description: "Lorem ipsum",
    stats: "test stats",
  },
  {
    path: "test",
    title: "testTitle",
    description: "Lorem ipsum",
    stats: "test stats",
  },
];

function Events() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <div className="w-[100vw] text-center">Upcoming Events</div>

      <div className="flex flex-row items-center justify-center flex-wrap">
        <div className="p-4 m-2 text-white">
          <img
            className="max-w-[30em]"
            src={"/consulting.jpg"}
            alt="Landing Photo"
          />
        </div>
        <div className="p-4 m-2 text-black text-left font-lato flex-grow max-w-[30em]">
          <div className="text-4xl font-bold">Test Title</div>
          <br />
          <div className="text-xl font-bold">CONSULTING COMMITTEE</div>
          <br />
          <div className="text-m">
            Berkeley’s first undergraduate data-science focused student
            organization. Actively fostering a strong data science community on
            campus via our consulting and educational initiatives.
          </div>
          <br />
          About us →
        </div>
      </div>

      <img src={"/pattern1.png"} alt="Landing Photo" />

      <div className="w-[100vw] text-center">Past Events</div>
      {pastEvents.map((pastEvent) => (
        <div className="flex flex-row items-center justify-center flex-wrap">
          <div className="p-4 m-2 text-white">
            <img
              className="max-w-[30em]"
              src={"/consulting.jpg"}
              alt="Landing Photo"
            />
          </div>
          <div className="p-4 m-2 text-black text-left font-lato flex-grow max-w-[30em]">
            <div className="text-4xl font-bold">{pastEvent.title}</div>
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
        </div>
      ))}
      <img src={"/pattern2.png"} alt="Landing Photo" />
    </div>
  );
}

export default Events;
