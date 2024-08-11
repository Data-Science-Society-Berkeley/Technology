import ServiceCard from "../components/ServiceCard";
import ServiceCarousel from "../components/ServiceCarousel";

const services = [
  {
    name: "Machine Learning",
    path: "test",
    description: "test",
  },
  {
    name: "Machine Learning",
    path: "test",
    description: "test",
  },
  {
    name: "Machine Learning",
    path: "test",
    description: "test",
  },
];

function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <img src={"/aboutUs.png"} alt="Landing Photo" />
      <div className="w-[100vw] text-center">
        <h1 className="top-[10vw] font-lato absolute w-[100vw] text-white font-bold text-6xl">
          SERVICES
        </h1>
        <div className="mx-[10em]">
          <div className="text-center">What We Offer</div>
          Data Science Society is UC Berkeley's first student-run,
          not-for-profit organization focused on data science and its
          interdisciplinary applications. Since our founding in 2016, we have
          united students from a wide range of disciplines behind our shared
          passion for all things data.
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {services.map((service) => (
          <ServiceCard />
        ))}
      </div>
      <ServiceCarousel />
    </div>
  );
}

export default Services;
