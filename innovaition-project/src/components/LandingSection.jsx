import React from "react";
import LandingSectionImage from "./LandingSectionImage.jsx";
const LandingSection = ({ item }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-12 my-8">
      <div className="w-1/2 md:w-1/2 flex justify-center">
        <LandingSectionImage image={item.ImageSrc} />
      </div>
    </div>
  );
};

export default LandingSection;
