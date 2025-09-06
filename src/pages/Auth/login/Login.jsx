import React, { useContext, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { Context } from '../../../context/constext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setshowLogin}= useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload 
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add login API call here
  };

  return (
    <div className="w-[300px] bg-white shadow-lg rounded-lg p-6 text-center space-y-4 absolute top-[90px]  right-[10px] float-right transition-all duration-300 ease-in-out z-[2000] "
      style={{ boxShadow: '0px 0px 6px 0px black' }}>
      <RxCross1 style={{cursor:"pointer", color:"red",}} onClick={()=>setshowLogin(false)}/>
      <h2 className="text-xl font-semibold text-gray-800">LOGIN NOW</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="your@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <p className="text-sm text-gray-600">
          Don’t Have An Account?{' '}
          <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Create Now!
          </span>
        </p>

        <button
          type="submit"
          className="w-full py-2 border border-gray-800 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer"
        >
          Login Now
        </button>
      </form>
    </div>
  );
}
