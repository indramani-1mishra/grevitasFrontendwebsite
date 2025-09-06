import React from "react";

export default function ProductHighlight() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-white shadow-lg mt-[10px] p-[20px]">
      
      {/* Left Side - Video */}
      <div className="w-[80%]  h-[300px] md:w-1/2 ">
        <video
          className="rounded-lg shadow-lg w-[90%] h-[300px]"
          controls
        >
          <source src="/pictures/introVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          What's Trending
        </p>
        <h2 className="text-3xl font-semibold text-gray-900">
          Back-Flow Waterfall Incense Cones
        </h2>
        <p className="text-gray-600 leading-relaxed">
          These unique incense cones produce a calming and sacred smoke that
          cascades down the burner and lends a beautiful, soft fragrance. This
          is in contrast to a traditional dhoop cone where the smoke is emitted
          from the top. The product is in trend as it enthralls one and all with
          its magical smoke flowing downwards like a fountain or waterfall from
          the burner. The sight is therapeutic and meditative to watch as you
          calm your nerves and focus on the simple things of life. Take some
          time off, relax and embrace a slow lifestyle.
        </p>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md w-fit">
          DISCOVER NOW
        </button>
      </div>
    </div>
  );
}
