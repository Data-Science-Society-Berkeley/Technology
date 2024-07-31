import Footer from "./components/Footer.js";
import About from "./subpages/About.js";
import Home from "./subpages/Home.js";
import Decal from "./subpages/Decal.js";
import Events from "./subpages/Events.js";
import Services from "./subpages/Services.js";
import JoinUs from "./subpages/JoinUs.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-b from-white to-[#8CD6D1]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/decal" element={<Decal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
