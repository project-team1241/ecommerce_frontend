import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { adData } from "../Utils/Constants";

const Ads = () => {
  return (
    <main className="bg-white p-2 flex md:h-80 h-40 shadow rounded-md border border-slate-100">
      <div className="h-full w-4/12 border bottom-1 rounded-md border-gray-300 relative">
      <a href={adData[0].adimageurl} target="_blank"><img
          src={adData[0].adimage}
          className="w-full h-full rounded-md object-fill"
        /></a>
        <FaExternalLinkAlt className="absolute top-2 left-2 md:text-base text-sm" />
      </div>
      <div className="w-8/12 pl-1">
      <div className="h-1/2 w-full border bottom-1 rounded-md border-gray-300 relative">
      <a href={adData[1].adimageurl} target="_blank"> <img
            src={adData[1].adimage}
            className="w-full h-full rounded-md object-fill"
          /></a>
          <FaExternalLinkAlt className="absolute top-2 left-2 text-white md:text-base text-sm" />
        </div>
        <div className="flex w-full h-1/2 pt-1">
          <div className="w-6/12 h-full border bottom-1 rounded-md border-gray-300 relative">
          <a href={adData[2].adimageurl} target="_blank"> <img
              src={adData[2].adimage}
              className="w-full h-full rounded-md object-fill"
            /></a>
            <FaExternalLinkAlt className="absolute top-2 left-2 md:text-base text-sm" />
          </div>
          <div className="w-6/12 h-full border bottom-1 rounded-md ml-1 border-gray-300 relative">
          <a href={adData[3].adimageurl} target="_blank"> <img
              src={adData[3].adimage}
              className="w-full h-full rounded-md object-fill"
            /></a>
            <FaExternalLinkAlt className="absolute top-2 left-2 md:text-base text-sm" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ads;
