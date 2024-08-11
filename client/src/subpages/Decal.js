import ProfileCard from "../components/ProfileCard";

const directors = [
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
  { name: "Austin", role: "VP of Tech", linkedin: "url", email: "email" },
];

function Decal() {
  return (
    <div className="bg-gradient-to-b from-white to-[#8CD6D1]">
      <img src={"/aboutUs.png"} alt="Landing Photo" />
      <h1>Decal</h1>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      {/* Section 1 */}
      <div>Subtitle</div>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      {/* Section 2 */}
      <div>Subtitle</div>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      {/* Section 3 */}
      <div>Subtitle</div>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      {/* Section 4 */}
      <div>Subtitle</div>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      {/* Section 5 */}
      <div>Subtitle</div>
      <div>
        for students with little to no prior knowledge of the field. Our course
        focuses on practical tools not otherwise emphasized in Berkeley’s
        academic curricula, and allows for students to explore their domain
        interests in a semester-long project.
      </div>

      <div className="mx-[5em]">
        <div className="text-center">Our Directors</div>
        <div className="flex flex-row flex-wrap justify-center">
          {directors.map((director) => (
            <ProfileCard />
          ))}
        </div>
      </div>

      <img src={"/pattern2.png"} alt="Landing Photo" />
    </div>
  );
}

export default Decal;
