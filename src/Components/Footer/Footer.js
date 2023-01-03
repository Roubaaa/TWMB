import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoPaperPlane } from "react-icons/io5";
import { AiOutlineTwitter, AiOutlineGoogle} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";



export default function Footer() {
  return (

      
<footer className="footer p-4  rounded-lg shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
    <h1 className="title text-[20px] sm:text-[40px]">Subscribe</h1>
    
        <ul className="uls flex flex-wrap items-center mb-6 text-m text-gray-500 sm:mb-0 dark:text-gray-400">
               <li>
                    <Link to ="/" className="mr-4  md:mr-6">Home</Link>
                </li>
                <li>
                    <Link to="/blogs" className="mr-4  md:mr-6">Blogs</Link>
                </li>
                <li>
                    <Link to="/about" className="mr-4  md:mr-6">About</Link>
                </li>
                <li>
                    <Link to="/contactUs" className="mr-4  md:mr-6">Contact Us</Link>
                </li>
        </ul>
    </div>
    
    <p className="etext text-gray-500">
    We`ll never to spam you or share your email
    </p>
    <div className="searchparent sm:flex sm:items-center sm:justify-between ">
    
    <div className="search flex items-center justify-between border-gray-500">
          <input
            type="text"
            placeholder="Enter Your e-mail"
            className=" searchh "
          />
          <button type="button"
            className="btn duration-300 px-5 py-2.5 font-[Poppins]
            text-black md:w-auto border-gray-500"
          >
        <IoPaperPlane />
          </button>
        </div>
          
        <div className="icons flex mt-4 space-x-6 sm:justify-center sm:mt-0">

<Link to="/"className="text-black-900 hover:text-gray-900 ">
  <AiOutlineTwitter size='30px'/>
</Link>

<Link to="/"  className="text-black-900 hover:text-gray-900 ">
  <SiFacebook size='30px'/>
</Link>

<Link to="/"  className=" text-black-900 hover:text-gray-900 ">
  <AiOutlineGoogle size='30px'/>
</Link>

</div>
        

    </div>
</footer>
)}
