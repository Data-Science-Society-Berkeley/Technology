import ServiceCard from "../components/ServiceCard";
import ServicesCarousel from "../components/ServicesCarousel";
import CompanyCard from "../components/CompanyCard";
import ProfileCard from "../components/ProfileCard";

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

let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
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
      <ServicesCarousel slides={slides} />
      <div className="mx-[5em]">
        <CompanyCard />

        <div className="text-center">Want to work with us?</div>
        <div className="flex flex-row flex-wrap justify-center">
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="text-center">
          You can also reach us through our email or social medias listed below.
        </div>
      </div>
    </div>
  );
}

export default Services;
