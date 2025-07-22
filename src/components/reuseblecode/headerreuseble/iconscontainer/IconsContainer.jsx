import React, { useContext } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart, FaUserAlt, FaRegHeart } from "react-icons/fa";
import { Context } from '../../../../context/constext';

export default function IconsContainer() {
  const iconStyle = "relative p-2 rounded-md hover:bg-gray-100 transition duration-300 h-[40px] flex justify-center items-center bg-gray-100 ";
   const {setShowInput,setshowLogin} = useContext(Context)
  return (
    <div className="flex items-center gap-4 text-gray-700 text-xl ">
      <div className={iconStyle} title="Search" onMouseEnter={()=>setShowInput(true)} >
        <IoSearchSharp className="cursor-pointer hover:text-blue-600" />
      </div>

      <div className={iconStyle} title="Cart">
        <FaShoppingCart className="cursor-pointer hover:text-blue-600" />
        {/* Optional Badge */}
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">0</span>
      </div>

      <div className={iconStyle} title="Account" >
        <FaUserAlt className="cursor-pointer hover:text-blue-600 bg-black-400"onMouseEnter={()=>setshowLogin(true)} />
      </div>

      <div className={iconStyle} title="Wishlist">
        <FaRegHeart className="cursor-pointer hover:text-blue-600" />
      </div>
    </div>
  );
}
