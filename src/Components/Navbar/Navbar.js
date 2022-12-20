import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"


export default function Navbar() {
  return (

       <nav className="navBarContainer flex flex-row justify-evenly" >

        <div className="flex flex-row gap-x-2">
        <img src={logo} alt="logo" />
        <h1 className="title ">Healing</h1>
       </div>
            <ul className ="flex flex-row justify-center items-center gap-x-8">
                 <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
                
                   <button type="button" className="press bg-cyan-400 rounded-md shadow-md px-5 py-1 hover:bg-cyan-600 " > <Link to="/signIn">Log In </Link> </button>
                
              
            </ul>
       </nav> )}
