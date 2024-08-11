import React, { useState } from "react";

const CompanyCard = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      onClick={handleClick}
      className="relative max-w-sm rounded overflow-hidden shadow-lg cursor-pointer p-6 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a description of the card. Click to reveal more!
        </p>
      </div>

      {showText && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-lg font-semibold p-4">
            Here is the text displayed on a dark background!
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
