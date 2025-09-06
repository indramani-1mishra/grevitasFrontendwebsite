// Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCcVisa, FaCcPaypal, FaCcDiscover, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-[20px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About us</li>
            <li>Contact us</li>
            <li>Store locations</li>
            <li>My account</li>
            <li>Orders history</li>
            <li>Advanced search</li>
            <li>Policy - Payment, Privacy, Terms</li>
          </ul>
        </div>

        {/* Collection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Collection</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Organic Goodness</li>
            <li>Little Pleasures</li>
            <li>Luxurious Veda</li>
            <li>Privé Eau de Parfum</li>
            <li>Citronella - Anti Mosquito</li>
            <li>Gifting</li>
          </ul>
        </div>

        {/* Catalog Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Catalog Products</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
            <span>Scented Candle</span>
            <span>Eau De Parfum</span>
            <span>Reeds Diffuser</span>
            <span>Perfume Oil</span>
            <span>Aroma Oil</span>
            <span>Solid Perfume</span>
            <span>Room Spray</span>
            <span>Essential Oil</span>
            <span>Perfume Bags</span>
            <span>Aromatherapy Spray</span>
            <span>Incense Stick</span>
            <span>Handmade Soaps</span>
            <span>Dhoop & Cones</span>
            <span>Arabic Bakhour</span>
            <span>Natural Resin</span>
            <span>Diffusers & Burners</span>
          </div>
        </div>
      </div>

      {/* Social Media & Payments */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>

        <div className="flex justify-center gap-4 text-3xl text-gray-400">
          <FaCcVisa />
          <FaCcPaypal />
          <FaCcDiscover />
          <FaCcMastercard />
          <FaCcAmex />
        </div>

        <p className="text-gray-400 text-sm">
          © Song of India 2021. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
