import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const headlineStats = [
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
  { name: "past decal students", num: "1000+" },
];

function App() {
  return (
    <div className="App bg-gradient-to-b from-white to-[#8CD6D1]">
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<Footer />} />
        </Routes>
        <Navbar />
        <img src={"/landingphoto.png"} alt="Landing Photo" />
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="p-4 m-2 text-black text-left font-lato flex-1 min-w-[20em]">
            <div className="text-4xl font-bold">DATA SCIENCE SOCIETY</div>
            <br />
            <div className="text-m">
              Berkeley’s first undergraduate data-science focused student
              organization. Actively fostering a strong data science community
              on campus via our consulting and educational initiatives.
            </div>
            <br />
            About us →
          </div>
          <div className="bg-green-500 m-2 text-white flex-1 min-w-[20em]">
            <div className="grid grid-cols-3 gap-4 p-4">
              {headlineStats.map((item) => (
                <div className="flex flex-col">
                  <div className="bg-gray-200 p-1">TEST</div>
                  <div className="bg-gray-200">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src={"/pattern1.png"} alt="Landing Photo" />
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 p-4 m-2 text-white font-lato">Item 1</div>
          <div className="bg-green-500 p-4 m-2 text-white">Item 2</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 p-4 m-2 text-white font-lato">Item 1</div>
          <div className="bg-green-500 p-4 m-2 text-white">Item 2</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 p-4 m-2 text-white font-lato">Item 1</div>
          <div className="bg-green-500 p-4 m-2 text-white">Item 2</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 p-4 m-2 text-white font-lato">Item 1</div>
          <div className="bg-green-500 p-4 m-2 text-white">Item 2</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 p-4 m-2 text-white font-lato">Item 1</div>
          <div className="bg-green-500 p-4 m-2 text-white">Item 2</div>
        </div>
        <img src={"/pattern2.png"} alt="Landing Photo" />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
