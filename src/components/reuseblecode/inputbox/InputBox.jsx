import React, { useContext, useState } from 'react';
import './input.css';
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Context } from '../../../context/constext';

export default function InputBox() {
  const [inputValue, setInputValue] = useState('');
  const {setShowInput} =useContext(Context);
  return (
    <div className='inputContainer'>
      <input
        type='text'
        placeholder='search here...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IoSearchOutline className='searchIcon' />
      <RxCross2 className='searchIcon' style={{color:"red" ,fontSize:"32px"}} title='close' onClick={()=>setShowInput(false)} />
    </div>
    
  );
}
