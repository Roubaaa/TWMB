// import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";
 import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp  } from "react-icons/ai"

export default function Dropdown(){
    const [isOpen, setIsOpen] = useState(false)

return(

    
        <div>
  <button type="button" className="flex flex-row" onClick={()=> setIsOpen((prev) => !prev)}> <Link className ="navList"to="/about">About</Link>
  { !isOpen ? (

<AiOutlineCaretDown className="h-8"/>
):(

<AiOutlineCaretUp className="h-8"/>
)}

  </button>
    
    { isOpen && (
        <ul className= "navList bg-white rounded-md shadow-xl absolute top-20 flex flex-col p-2 items-start w-auto "> 
        <li className ="navList"><Link to="/about">About</Link></li>
        </ul>
    )}
    </div>


    




)



}