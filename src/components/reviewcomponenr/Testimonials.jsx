import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    title: "DIVINE",
    review:
      "I am in love with this fragrance since the time I got the whiff of it in the lobby of Burj Khalifa. I searched the entire Dubai Mall for this fragrance but could not find. Returning back I just wanted this and its just sheer luck I found it in dehn al oudh. Air conditioned rooms???? You need this. You and your guests shall go crazzzzzy with it.",
    name: "YOGESH",
    date: "MAY 2022",
    rating: 5,
  },
  {
    title: "NICE NATURAL PRODUCT",
    review:
      "Ordering for the second time the complete set. One of the best available in the market. Nice natural smoke-free fragrance. All flavors are good. Lovely packaging design.. not boring. Someone looking for a soothing chemical-free fragrance experience indoor or outdoors, this will definitely be the best choice. Loved it. :)",
    name: "MOHIT SUNEJA",
    date: "JULY 2021",
    rating: 5,
  },
  {
    title: "LONG LASTING FRAGRANCE",
    review:
      "Fragrance really stay whole day, even just tiny amount gives good result.",
    name: "NISARG TRIVEDI",
    date: "OCTOBER 2020",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        What our customers have to say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg shadow-lg p-6 flex flex-col justify-between items-center text-center"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />

            {/* Review */}
            <h3 className="font-semibold text-lg mb-2">"{t.title}"</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 overflow-y-auto max-h-40">
              {t.review}
            </p>

            {/* Rating */}
            <div className="flex gap-1 text-yellow-500 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* User Info */}
            <div className="text-gray-700 font-semibold">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
