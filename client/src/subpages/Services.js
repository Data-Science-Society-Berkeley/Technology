import ServiceCard from "../components/ServiceCard";
import ServicesCarousel from "../components/ServicesCarousel";
import CompanyCard from "../components/CompanyCard";
import ProfileCard from "../components/ProfileCard";

const services = [
  {
    name: "MACHINE LEARNING",
    path: "/Services/servicesMl.jpeg",
    description:
      "Natural Language Processing, Accurate Algorithms, Predictive Analytics, Classification, Computer Vision, Data Mining",
  },
  {
    name: "BUSINESS INTELLIGENCE",
    path: "/Services/servicesBi.jpg",
    description:
      "Customer Segmentation, Efficiency of Operations, Customer Churn, Marketing Effectiveness, Visualizations and Dashboards, Geospatial Mapping",
  },
  {
    name: "SOFTWARE DEVELOPMENT",
    path: "/Services/servicesSd.jpg",
    description:
      "Data Warehousing, Systems Integration, Cloud Computing, Front-End Development, Back-End Development, Building End-End Data Pipelines",
  },
];

const items = [
  <div className="bg-gray-500 w-full h-full flex items-center text-white flex-col font-lato py-[2em]">
    <div className="text-2xl font-bold">CLIENT TESTIMONIALS</div>
    <br />
    <div className="text-s md:text-m mx-[7em]">
      “Over the past semester, the Data Science Society volunteers helped Medic
      develop a tool to synthesize datasets from scratch, given only a Community
      Health Toolkit app's configuration code. This was a challenging project,
      and the team really stepped up, delivering a fully functional dataset
      generator in just a few months. I'm looking forward to future Data Science
      Society / Medic collaborations!”
    </div>
    <br />
    <div className="text-m text-center">
      - Lucas Goldstone, Data Scientist at Medic
    </div>
    <br />
    <br />
  </div>,
  <div className="bg-gray-500 w-full h-full flex items-center text-white flex-col font-lato py-[2em]">
    <div className="text-2xl font-bold">CLIENT TESTIMONIALS</div>
    <br />
    <div className="text-s md:text-m mx-[7em]">
      “Working with DSS gave us great and immediately actionable insight into a
      new Blockchain project we had launched. I really hope we can work with DSS
      again on our next big project!”
    </div>
    <br />
    <div className="text-m text-center mx-[5rem]">
      - Michael Todasco, Senior Director of Innovation at PayPal
    </div>
    <br />
    <br />
  </div>,
  <div className="bg-gray-500 w-full h-full flex items-center text-white flex-col font-lato py-[2em]">
    <div className="text-2xl font-bold">CLIENT TESTIMONIALS</div>
    <br />
    <div className="text-s md:text-m mx-[7em]">
      “My company hired DSS to analyze data in the winter of 2019 and fall of
      2020, and they did an amazing job. They took the project seriously and I
      greatly appreciated the professional manner in which they handled it. Most
      importantly, they gathered insights from the data that were incredibly
      valuable and helped us in building a stronger product. I would definitely
      use DSS again!”
    </div>
    <br />
    <div className="text-m text-center">- Cory Linton, CEO of edify.ai</div>
    <br />
    <br />
  </div>,
  <div className="bg-gray-500 w-full h-full flex items-center text-white flex-col font-lato py-[2em]">
    <div className="text-2xl font-bold">CLIENT TESTIMONIALS</div>
    <br />
    <div className="text-s md:text-m mx-[7em]">
      “Our team worked with DSS to analyze and model our member behavior. The
      consultants delivered high quality presentations of their insights. Their
      metrics, visualizations, and model provided new perspectives for us to
      consider when evaluating engagement. The team was very professional and
      skilled, and they were a pleasure to work with.”
    </div>
    <br />
    <div className="text-m text-center mx-[5rem]">
      - Michelle Leahy, Business Operations Manager, Data & Engineering at SoFi
    </div>
    <br />
    <br />
  </div>,
  <div className="bg-gray-500 w-full h-full flex items-center text-white flex-col font-lato py-[2em]">
    <div className="text-2xl font-bold">CLIENT TESTIMONIALS</div>
    <br />
    <div className="text-s mx-[6em]">
      “I have never worked with students more competent than my analysts at
      DSS... The first thing that impressed me was their process, which was
      clearly documented and thorough, but not cumbersome on the client... My
      team used ML models to understand churn-user behavior. When COVID-19 hit
      mid-project, I anticipated these students to take a step back. Instead,
      they doubled down. My team exceeded the original parameters of the
      projects. I'm chomping at the bit to hire them back.”
    </div>
    <br />
    <div className="text-m text-center">- Richard Wu, CEO, Simmer (YC S19)</div>
    <br />
    <br />
  </div>,
];

const clients = [
  {
    path: "/Services/paypal.png",
    desc: "Improve employee engagement. Utilized regression models and NLP topic modeling on employee activity datasets to improve employee interaction within the existing system. Developed a Tableau dashboard for monitoring engagement and presented insights leading to the development of PayPal's Global Innovation Tournament.",
  },
  {
    path: "/Services/walmart.png",
    desc: "Built LLM interface to allow non-technical queries to input human text and automatically translate into SQL, find relevant data, and return results along with the corresponding SQL code.",
  },
  {
    path: "/Services/qualcomm.png",
    desc: "Performed web scraping to obtain media data about qualcomm and its competitors and built NLP model utilizing GLDA to perform topic modelling and sentiment analysis, helping qualcomm's marketing team come up with and improve marketing strategies",
  },
  {
    path: "/Services/tnc.png",
    desc: "Analyzed the trends and spatial distribution of water right applications by creating an interactive map using GeoPandas. Determined the most influential variables in approved applications through feature selection. Predicted the approval status of pending water right applications through the usage of a logistic regression model.",
  },
  {
    path: "/Services/ts.png",
    desc: "Our goal was to examine and analyze TechSoup’s business records from the past 15 years in order to provide insight and business directions on how its operation and revenue can be improved. TechSoup requested us to create cohorts of records based on each client organization’s budget range, fiscal year, and months. Based on the cohorts we created, we visualize and project the trends using several metrics, including revenue, amount, frequency, etc.",
  },
  {
    path: "/Services/ctn.png",
    desc: "Community Tech Network (CTN) is a non-profit organization which promotes digital literacy for senior citizens through various programs. For this project we performed data analysis and developed a tool which automatically produces visualizations and insights on the efficacy of their digital literacy program in helping senior citizens cope with loneliness by connecting them with loved ones.",
  },
  {
    path: "/Services/mara.png",
    desc: "MEP envisions the existence of a stable elephant population co-existing peacefully with people across the Greater Mara Ecosystem. Their collaborative approach of boots on the ground rangers and applied research has disrupted poaching in the region and combatted conflict and habitat loss.",
  },
  {
    path: "/Services/sofi.png",
    desc: "Created cash in, cash out and category spending visualizations for SoFi Relay. Used MCC codes to semi-manually tag 10k SoFi transactions as their proper SoFi category. Using NLP to categorize transaction using transaction amount, merchant name, description, etc.",
  },
  {
    path: "/Services/monday.png",
    desc: "Evaluate channel partners’ performance through customer satisfaction scores. Utilized NLP techniques like topic modeling and sentiment analysis. Combined most important customer satisfaction, metrics devised clear steps on how to obtain this data, and designed an experiment that Monday would be able to execute to determine if the score was an accurate indicator.",
  },
  {
    path: "/Services/venmo.png",
    desc: "",
  },
  {
    path: "/Services/oust.png",
    desc: "We built a contextual AI chatbot using Rasa NLU framework, implemented end-to-end architecture, deploying in GCP Firebase, Cloud Functions, App Engine. We also implemented BERT to automate heuristic for chatbot interactive training, tested flow with Facebook Messenger and Android with XMPP server.",
  },
  {
    path: "/Services/simmer.png",
    desc: "Churn Prediction. Generated statistical modeling-ready dataset from app session data and find useful features for predicting churn. Engineered additional metrics/features for measuring user behavior. Devised a scheme for labeling users as churned or active.",
  },
  {
    path: "/Services/ed.png",
    desc: "Predict whether or not a trucking trip would be vulnerable to a safety incident. Researched and implemented different models trained for this task including neural networks, random forests, and autoencoders as well as techniques to handle the class imbalance such as SMOTE and Near Miss. Compiled results and compared the different models based on precision and recall.",
  },
  {
    path: "/Services/mm.png",
    desc: "Set up a foundation for Metromile to be able to explore models that are cannot be used in production for comparative purposes. Gathered relevant usage based data. Appended weather and accident rate data based on the time and location of trips. Performed baseline modeling, generated a final model-ready dataset for Metromile to use for exploratory purposes and identified avenues through which Metromile could take the explorations to commercial use.",
  },
  {
    path: "/Services/dn.png",
    desc: "We used anonymized data of Deepnote’s users, which consists of various actions they took in their first days of using the product, as well as which users were retained, and for how long. Using this data, we used machine learning to predict which actions are most correlated with user retention, as well as which are indicative of user churning.",
  },
];

const people = [
  {
    name: "Sid Ramshankar",
    role: "President",
    linkedin: "https://www.linkedin.com/in/siddharth-ramshankar1/",
    email: "mailto:siddharthr@berkeley.edu",
    img: "/Leadership/Sid.jpg",
  },
  {
    name: "Michael Florip",
    role: "External Vice President",
    linkedin: "https://www.linkedin.com/in/michael-florip/",
    email: "mailto:michaelflorip@berkeley.edu",
    img: "/Leadership/Michael.jpg",
  },
];

function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <img src={"/Services/ServicesLanding.jpg"} alt="Photo" />
      <div className="w-[100vw] text-center">
        <h1 className="top-[10vw] font-lato absolute w-[100vw] text-white font-bold text-6xl">
          {/* SERVICES */}
        </h1>
        <div className="mx-[1em] md:mx-[10em]">
          <div className="font-lato text-xl md:text-3xl">
            <div className="text-center font-bold my-[1em]">WHAT WE OFFER</div>
          </div>
          <div className="text-s sm:text-xl mx-[5em] text-justify">
            We partner with corporations and non-profit organizations to provide
            data-driven insights and actionable solutions through advanced
            analytical methods. We believe that the skills that we have learned
            in university can and should be applied to support and uplift
            communities equitably, not just for private tech and those who
            exclusively benefit from it.
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {services.map((service) => (
          <ServiceCard
            name={service.name}
            path={service.path}
            desc={service.description}
          />
        ))}
      </div>
      <br />
      <br />
      <ServicesCarousel items={items} />
      <div className="mx-[5em]">
        <h1 className="font-lato mt-[3em] text-black font-bold text-3xl text-center">
          Featured Past Clients
        </h1>
        <div className="flex flex-wrap gap-5 mt-[3em] justify-center">
          {clients.map((client) => (
            <CompanyCard path={client.path} desc={client.desc} />
          ))}
        </div>

        <h1 className="font-lato mt-[3em] text-black font-bold text-3xl text-center">
          Want to work with us?
        </h1>
        <div className="mt-5 flex flex-row flex-wrap justify-center gap-5">
          {people.map((member) => (
            <ProfileCard
              name={member.name}
              linkedin={member.linkedin}
              email={member.email}
              img={member.img}
              position={member.role}
            />
          ))}
        </div>
        <div className="font-lato py-[3em] text-black font-bold text-xl text-center">
          You can also reach us through our email or social medias listed below.
        </div>
      </div>
    </div>
  );
}

export default Services;
