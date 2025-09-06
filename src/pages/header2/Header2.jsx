import React, { useContext } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { BsBag } from "react-icons/bs";
import './header2.css'
import { Context } from '../../context/constext';
import InputBox from '../../components/reuseblecode/inputbox/InputBox';
import LoginForm from '../Auth/login/Login';

export default function Header2() {

  const {setShowInput,showInput,setshowLogin,showlogin}=useContext(Context);
    
  return (
   <>
     <div className='headerConatainer1'>
      {/* Left section */}
      <div>
        <p>
          <IoSearch className="searchIconDesktop" onClick={()=>setShowInput(true)} />
          <Link to="" className='hedding'> About Us</Link>
        </p>
        <p className='hedding'><Link to="">Store Locations</Link></p>
      </div>

      {/* Center Logo */}
      <div>
        <Link to=""><img src='/pictures/clonelogo.png' alt="Logo" /></Link>
      </div>

      {/* Right section */}
      <div>
        <p className='hedding'><Link to="">Create an Account</Link></p>
        <p className='hedding'>
          <span onClick={()=>setshowLogin(true)}>Sign In</span> <span>Namaste!</span>
        </p>
        
        {/* Desktop cart */}
        <BsBag className="cartIcon" style={{cursor:"pointer"}} />

        {/* Mobile search */}
        <IoSearch 
          className="mobileSearchIcon" 
          style={{cursor:"pointer"}} 
          onClick={()=>setShowInput(true)} 
        />
      </div>
    </div>

    {/* Conditional renders */}
    {showInput && <InputBox/>}
    {showlogin && <LoginForm/>}
   </>
  )
}
