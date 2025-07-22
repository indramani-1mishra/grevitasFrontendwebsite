import React, { useContext, useState } from 'react';
import Componeylogo from '../../components/reuseblecode/headerreuseble/componeylogo/Componeylogo';
import ListComponent from '../../components/reuseblecode/headerreuseble/listcomponent/ListComponent';
import IconsContainer from '../../components/reuseblecode/headerreuseble/iconscontainer/IconsContainer';
import InputBox from '../../components/reuseblecode/inputbox/InputBox';
import { Context } from '../../context/constext';
import LoginForm from '../Auth/login/Login';

export default function Header() {
  const logo = '/pictures/componeylogo1.png';
  const { showInput, showlogin } = useContext(Context);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-[90px]">
        
        {/* Left: Logo */}
        <Componeylogo image={logo} />
        
        {/* Center: Navigation List */}
        <div className="hidden md:block">
          <ListComponent />
        </div>

        {/* Right: Icons (like social, cart, profile etc.) */}
        <IconsContainer />
        
      </div>

      {showInput && <InputBox />}
      {showlogin && <LoginForm />}
    </header>
  );
}
