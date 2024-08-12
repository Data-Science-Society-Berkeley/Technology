import FAQ from "../components/FAQ";

const faqItems = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows returns within 30 days of purchase. Items must be in original condition.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking link sent to your email upon shipment.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping fees may apply.",
  },
];

function JoinUs() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <div className="w-[100vw] text-center">
        <h1 className="top-[10vw] font-lato w-[100vw] text-white font-bold text-6xl">
          JOIN US
        </h1>
        <img src={"/recruitmentFlyer.png"} width={500} className="mx-auto" />
        <div>
          Hey there! Thank you for taking the time to learn about DSS. On this
          page you will find all the different ways you can get involved with
          DSS, as well as what our recruitment timeline will look like for the
          upcoming semester. To stay up to date with all our events, including
          our recruitment events, you can add our external calendar to receive
          notifications. If you have any questions, feel free to reach out to us
          at info@dss.berkeley.edu. We hope to see you very soon!
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-white font-bold text-4xl">
          HOW TO APPLY
        </h1>
        <div className="flex flex-row justify-center gap-5">
          <div className="w-[20rem] bg-white border-2 border-blue-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              This is a rounded box with a white background and a blue border.
            </p>
          </div>
          <div className="w-[20rem] bg-white border-2 border-blue-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              This is a rounded box with a white background and a blue border.
            </p>
          </div>
          <div className="w-[20rem] bg-white border-2 border-blue-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              This is a rounded box with a white background and a blue border.
            </p>
          </div>
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-white font-bold text-4xl">
          RESOURCE PACKET
        </h1>
        <div>
          Hey there! Thank you for taking the time to learn about DSS. On this
          page you will find all the different ways you can get involved with
          DSS, as well as what our recruitment timeline will look like for the
          upcoming semester. To stay up to date with all our events, including
          our recruitment events, you can add our external calendar to receive
          notifications. If you have any questions, feel free to reach out to us
          at info@dss.berkeley.edu. We hope to see you very soon!
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-white font-bold text-4xl">
          FAQ
        </h1>
        {faqItems.map((item, index) => (
          <FAQ key={index} question={item.question} answer={item.answer} />
        ))}
        <img src={"/pattern2.png"} alt="Landing Photo" />
      </div>
    </div>
  );
}

export default JoinUs;
