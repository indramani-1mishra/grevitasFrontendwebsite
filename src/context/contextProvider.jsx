import React, { useState } from 'react';
import { Context } from './constext.jsx';


export default function ContextProvider({ children }) {
  const [showInput, setShowInput] = useState(false);
  const [showlogin, setshowLogin] = useState(false);

  return (
    <Context.Provider value={{ showInput, setShowInput,showlogin,setshowLogin }}>
      {children}
    </Context.Provider>
  );
}
