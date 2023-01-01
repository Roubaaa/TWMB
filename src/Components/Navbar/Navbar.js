import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown"
import logo from "./logo.png"


export default function Navbar() {


  return (

       <nav className="navBarContainer flex flex-row justify-evenly" >

        <div className="flex flex-row gap-x-2">
        <img src={logo} alt="logo" />
        <h1 className="title text-[20px] sm:text-[40px]">Healing</h1>
       </div>
            <ul className =" flex flex-row justify-center text-[15px]  items-center sm:gap-x-7 gap-x-4 sm:text-[20px] ">
                 <li className="navList">
                    <Link to ="/">Home</Link>
                </li>
                <li className="navList">
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li >
                        <Dropdown/>
            
                </li>
                <li className="navList" >
                    <Link to="/contactUs">Contact Us</Link>
                </li>
                
                   <button type="button" className=" press bg-cyan-400 rounded-md shadow-md px-5 py-1 hover:bg-cyan-600 " > <Link to="/signIn">Log In </Link> </button>
                
              
            </ul>
       </nav> )}
