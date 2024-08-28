import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "What makes DSS different from other tech/consulting clubs?",
    answer:
      "1: We prioritize leaving a positive impact on our fellow students in the data science community at Berkeley. Every semester we host a variety of free events and workshops dedicated to providing educational and career opportunities to those interested, 2: We are the only club at UC Berkeley to annually host a Datathon for Social Good. Members of any DSS Committee can get involved in organizing this event. Anyone (non-UC Berkeley students included) is welcome and invited to enjoy the Annual Datathon for Social Good! 3: We have programs and opportunities tailored to ALL backgrounds and experience levels. Our DeCal is designed to teach beginners to think creatively using data and essential data science tools. And our Consulting and Social Good Committees provide further exposure to industry-level machine learning and analytics projects. Our Academic Development Committee enables students to share their expertise through leading workshops for and mentoring our DeCal students. Finally, our external events are free and open to anyone and everyone!",
  },
  {
    question: "Do I need experience to join?",
    answer:
      "DeCal: Nope! We will teach you data science from the ground up. Just come prepared with an open mind and lots of creativity; Committee: Knowledge of Python and data science libraries at the CS61A and Data 8 levels is highly recommended. For the Academic Development Committee, prior experience in teaching and mentorship is also preferred.Taking our DeCal is a great way to learn some of the concepts we use in our Committees!",
  },
  {
    question:
      "What’s the difference between the consulting and social good committees?",
    answer:
      "While our Consulting Committee focuses on developing machine learning and analytics projects for large companies with well-established data infrastructure, our Social Good Committee works flexibly with nonprofits and NGOs on meeting their needs, whether that be delivering analytics or building up data infrastructure.",
  },
  {
    question: "Can I apply to be a Committee Member and a DeCal Student?",
    answer:
      "Yes, you can apply to both a Committee and the DeCal, but may only choose one to participate in.",
  },
  {
    question: "What makes the DSS DeCal different from Data 8 or Data 100?",
    answer:
      "Courses such as Data 8 and Data 100 provide a fantastic foundation for learning technical data science concepts. Our DeCal aims to supplement UC Berkeley’s data science curriculum by challenging students to collaboratively brainstorm their own original data science project ideas and learn the practical steps needed to see their project through to completion.",
  },
  {
    question:
      "Are there ways to get involved apart from applying to a committee or registering for the DeCal?",
    answer:
      "Every semester we host a variety of events open to the public, which are great ways to mingle with other data science students! We have an upcoming data science focused career fair, Datathon for Social Good, and more! Add our external event calendar to obtain calendar invites to all our upcoming events, and subscribe to the mailing list for updates as events come up!",
  },
  {
    question: "When is the DeCal? Does the class allow conflicts?",
    answer:
      "The DeCal will be Mondays from 6:30-8:30 PM. We will not allow time conflicts and attendance will be mandatory because you will be working in groups on your projects!",
  },
];

function JoinUs() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1] font-lato">
      <div className="w-[100vw] text-center">
        <h1 className="top-[10vw] font-lato w-[100vw] text-black font-bold text-4xl py-[2em]">
          JOIN US
        </h1>
        <img
          src={"/recruitmentFlyer.png"}
          width={800}
          className="mx-auto rounded-lg shadow-xl border-solid border-gray-400 border-2"
        />
        <div className="mx-[2em] sm:mx-[5em] my-[2em] text-xl">
          Hey there! Thank you for taking the time to learn about DSS. On this
          page you will find all the different ways you can get involved with
          DSS, as well as what our recruitment timeline will look like for the
          upcoming semester. To stay up to date with all our events, including
          our recruitment events, you can add our external calendar to receive
          notifications. If you have any questions, feel free to reach out to us
          at info@dss.berkeley.edu. We hope to see you very soon!
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-black font-bold text-4xl my-[1em]">
          GET INVOLVED
        </h1>
        <div className="flex flex-row justify-center gap-1 sm:gap-5 text-xl">
          <div className="w-[20rem] bg-white border-2 border-gray-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              Apply to a committee{" "}
              <Link to="/about" className="text-blue-400">
                here!
              </Link>
            </p>
          </div>
          <div className="w-[20rem] bg-white border-2 border-gray-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              Enroll in our{" "}
              <Link to="/decalpage" className="text-blue-400">
                Decal!
              </Link>
            </p>
          </div>
          <div className="w-[20rem] bg-white border-2 border-gray-500 rounded-lg p-4">
            {/* Content inside the box */}
            <p>
              Join our mailing list{" "}
              <Link
                to="https://airtable.com/applSUum77sFQuQsM/shr084vc5JtxBydJK"
                className="text-blue-400"
              >
                here!
              </Link>
            </p>
          </div>
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-black font-bold text-4xl my-[1em]">
          RESOURCE PACKET
        </h1>
        <div className="text-xl">
          If you would like a better idea of how you can prep for the
          interviews, check out this{" "}
          <Link
            className="text-blue-500"
            to="https://docs.google.com/document/d/1SuvPHEXtFqpsyBNdgt-pKFBAvdOWBmcExDCYey02L8M/edit?usp=sharing"
          >
            {" "}
            resource packet!
          </Link>
        </div>
        <h1 className="top-[10vw] font-lato w-[100vw] text-black font-bold text-4xl my-[1em]">
          FAQ
        </h1>
        <div className="mx-[5em] sm:mx-[10em]">
          {faqItems.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <br />
        <br />

        <img src={"/pattern2.png"} alt="Landing Photo" />
      </div>
    </div>
  );
}

export default JoinUs;
