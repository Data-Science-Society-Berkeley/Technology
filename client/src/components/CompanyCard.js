import React, { useState } from "react";

const CompanyCard = ({ path, desc }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[15em] rounded overflow-hidden shadow-lg cursor-pointer p-6 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <img className="w-[15em] h-[15em] object-contain" src={path} alt="Card" />

      {showText && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-xs p-4">{desc}</div>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
