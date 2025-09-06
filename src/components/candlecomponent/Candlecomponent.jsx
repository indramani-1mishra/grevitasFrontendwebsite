import React from "react";

const CandleSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Curated Selection of Ayurveda Candles
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Hand-Poured Coconut Butter Scented Candles
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Illuminate your path to inner harmony with this luxurious coconut butter 
          and soy wax scented candle. There is just something about a candle that 
          adds a very special touch to the ambience, whether it’s the coziness factor 
          or just sheer elegance that it lends to the décor. Infused with the goodness 
          of ayurvedic essential oils, the candle is hand-poured in a gorgeous glass jar 
          decorated with gold decal and packaged beautifully in a tube box. You will love 
          its fresh fragrance and how it makes the most beautiful little addition to any space.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition">
          DISCOVER NOW
        </button>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <video
          className="w-full rounded-lg shadow-lg"
          controls
         
        >
          <source src="/pictures/introVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default CandleSection;
