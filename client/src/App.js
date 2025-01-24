import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import About from "./subpages/About.js";
import Home from "./subpages/Home.js";
import Decal from "./subpages/Decal.js";
import Events from "./subpages/Events.js";
import Services from "./subpages/Services.js";
import JoinUs from "./subpages/JoinUs.js";
import ScrollToTop from "./components/ScrollToTop.js";
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
      <ScrollToTop />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/decalpage" element={<Decal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/services" element={<Services />} />
          {/* Deprecate soon plz */}
          <Route
            path="/apply"
            element={
              <RedirectToExternal url="https://docs.google.com/forms/d/e/1FAIpQLSfTRD7Rtkrt1RBn_dikLj1JziyFoLo03WWRhRpNfPzWOjRIzQ/viewform" />
            }
          />
          <Route
            path="/applydecal"
            element={
              <RedirectToExternal url="https://forms.gle/2xteSjbushfj41HT6" />
            }
          />
          <Route
            path="/decalapply"
            element={
              <RedirectToExternal url="https://forms.gle/2xteSjbushfj41HT6" />
            }
          />
          <Route
            path="/coffee"
            element={
              <RedirectToExternal url="https://dssberkeley.notion.site/DSS-Fall-2024-Coffee-Chat-Sign-Ups-be8830b0f4b141d787049d63389c7ccb" />
            }
          />
          <Route
            path="/mailinglist"
            element={
              <RedirectToExternal url="https://airtable.com/applSUum77sFQuQsM/shr084vc5JtxBydJK" />
            }
          />
          <Route
            path="/data-198"
            element={
              <RedirectToExternal url="https://dss-data198.github.io/Data198/" />
            }
          />
          <Route
            path="/decal"
            element={
              <RedirectToExternal url="https://drive.google.com/file/d/1hWbepIm6o2TfZ4lbKNMXm6cDuk_xUkgt/view" />
            }
          />
          <Route
            path="/zoom"
            element={
              <RedirectToExternal url="https://berkeley.zoom.us/j/98049362210" />
            }
          />
          <Route
            path="/resource"
            element={
              <RedirectToExternal url="https://docs.google.com/document/d/1SuvPHEXtFqpsyBNdgt-pKFBAvdOWBmcExDCYey02L8M/edit?usp=sharing" />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
