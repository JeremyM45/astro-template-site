import { useState } from 'react';
import Popup from './Popup';

export default function SignupButton(){
  const [ isOpen , setIsOpen ] = useState(false); 
  function handleClick(){
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  function handleClose(){
    setIsOpen(false)
    document.body.style.overflow = "visible"
  }

  return(
    <div>
      {isOpen ? <Popup handleClose={handleClose}/> : <></>}
      <div className='flex justify-end'>
        <button  onClick={handleClick} className="border-2 border-highlightRed px-3 p-2 font-bold rounded-lg hover:bg-highlightRed hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
    
  )
}