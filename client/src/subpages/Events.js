const pastEvents = [
  {
    path: "/Events/startup.jpeg",
    title: "Start-up Career Fair",
    description:
      "Are you still looking for an internship this summer or full-time role? 💼 Come out to the Start-Up Career Fair on March 18th at East Pauley Ballroom in MLK from 2-5pm to meet some super cool rising startups and learn about their various STEM and software opportunities. This is a great in person networking opportunity for those looking for a job, so make sure to bring your resume! 👩‍💻👨‍💻",
  },
  {
    path: "/Events/datathon.jpg",
    title: "5th Annual Datathon for Social Good: Healthcare & Public Health",
    description:
      "November 2023, Cory & Soda Hall \n This years Datathon theme was An Exploration into Healthcare and Public Health. \n 200+ participants. \n Sponsored by SingleStore, Primerica, C.LIGHT Technologies \nPartners include Doordash and CalData \nCo-hosted with SAAS, BDAB, CSUA",
  },
  {
    path: "/Events/worldofdata.jpg",
    title: "World of Data Career Fair",
    description:
      "World of Data is an in-person, data science-focused dedicated to showcasing the interdisciplinary applications of data science across various industries. The event offers networking and recruiting opportunities for data science/machine learning and full-time positions for Summer 2024 and beyond. Companies in attendance: OpenCV, Kaiser Permanente, American Heart Association, Uniphore, Hayden AI, and Plume Design! Co-hosted with SAAS, BDAB",
  },
  {
    path: "/Events/dsforum.jpg",
    title: "5th Annual Data Science Forum: Tech for Social Good",
    description:
      "April 2023, Dwinelle Hall; This year’s Forum theme was Tech for Social Good — the intersection of data and social impact. The goal of the event was to educate the UC Berkeley community on how to carry social good values in tech work and/or use tech to drive solutions to societal issues. To show that this intersection comes in a spectrum, speakers came from a wide variety of different industries — NPO, big tech, startup, research, government, and so on. Other than learning, the event provided other benefits such as resume drops, networking sessions, free food, and also gave away a raffle prize of a JBL speaker! 400+ audience. 10 professionals in attendance. Co-hosted with SAAS, BDAB",
  },
];

function Events() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      {/* <div className="w-[100vw] text-center">Upcoming Events</div> */}

      {/* <div className="flex flex-row items-center justify-center flex-wrap">
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

      <img src={"/pattern1.png"} alt="Landing Photo" /> */}

      <div className="w-[100vw] text-center">
        <div className="mx-[10em] font-lato">
          <div className="text-center font-bold text-4xl my-[1em]">
            Past Events
          </div>
        </div>
      </div>
      {pastEvents.map((pastEvent) => (
        <div className="flex flex-row items-center justify-center flex-wrap">
          <div className="p-4 m-2 text-white">
            <img
              className="max-w-[20em]"
              src={pastEvent.path}
              alt="Landing pattern"
            />
          </div>
          <div className="p-4 m-2 text-black text-left font-lato flex-grow max-w-[30em]">
            <div className="text-4xl font-bold">{pastEvent.title}</div>
            <br />
            <div>{pastEvent.description}</div>
          </div>
        </div>
      ))}
      <img src={"/pattern2.png"} alt="Landing pattern" />
    </div>
  );
}

export default Events;
