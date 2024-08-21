import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import About from "./subpages/About.js";
import Home from "./subpages/Home.js";
import Decal from "./subpages/Decal.js";
import Events from "./subpages/Events.js";
import Services from "./subpages/Services.js";
import JoinUs from "./subpages/JoinUs.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function RedirectToExternal({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App bg-gradient-to-b from-white to-[#8CD6D1]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/decal" element={<Decal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/services" element={<Services />} />
          {/* Deprecate soon plz */}
          <Route path="/apply" element={<JoinUs />} />
          <Route
            path="/applydecal"
            element={
              <RedirectToExternal url="https://forms.gle/2xteSjbushfj41HT6" />
            }
          />
          <Route
            path="/coffee"
            element={
              <RedirectToExternal url="https://forms.gle/2xteSjbushfj41HT6" />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
