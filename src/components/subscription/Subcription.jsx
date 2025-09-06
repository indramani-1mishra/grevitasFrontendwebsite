import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify the reCAPTCHA!");
      return;
    }
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div
      className="relative bg-cover bg-center py-20 px-6 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('/pictures/bgimage.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Newsletters</h2>
        <p className="mb-8 text-lg">
          Get insider access for limited edition offers, new launches, insights
          on wellness and fragrances!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-2/3 px-4 py-3 rounded-md text-gray-900 bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md cursor-pointer transition"
          >
            Subscribe
          </button>
        </form>

        {/* reCAPTCHA */}
        <div className="flex justify-center mt-6">
          <ReCAPTCHA
            sitekey="6LcBI8ArAAAAADzj5Li9mgneqNLbz879wvn6ex57"
            onChange={(value) => setCaptcha(value)}
          />
        </div>
      </div>
    </div>
  );
}
