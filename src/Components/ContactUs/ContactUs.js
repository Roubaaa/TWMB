import React from "react";
import "./ContactUs.css";
import finder from "./contact.png"

// import { Link } from "react-router-dom";


export default function ContactUs() {
  return (
    <div>
      <div>
<h1 className="sm:px-28 px-2 pt-8 font-normal font-sans text-xl  md:text-2xl">SEND US YOUR REQUEST!</h1>

<p className="sm:px-28 px-2 text-zinc-500 font-sans text-xs sm:text-sm md:text-s ">Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we d be happy to help!</p>
 </div>
<div className="sm:py-4  flex items-stretch ">
  <div>
    <h6 className="sm:pl-28 pl-2 py-4 font-sans font-semibold text-sm sm:text-sm md:text-s">Type of contact</h6>
<ul className="sm:pl-32 px-2  font-sans text-xs sm:text-sm md:text-s list-disc ">
  <li className="py-2 text-xs">I have a question about the service.</li>
  <li className="py-2 text-xs">I m a registered client and I need support.</li>
  <li className="py-2 text-xs">I m a counselor interested in joining.</li>
  <li className="py-2 text-xs">I m a registered counselor and I need support.</li>
  <li className="py-2 text-xs">I have a business-related inquiry.</li>
  <li className="py-2 text-xs">I m interested in Healing Online for my organization.</li>
  <li className="py-2 text-xs">I have a billing related question.</li>
</ul>
</div>
<div >
<img className="sm:w-80 w-80 h-80 sm:ml-64 ml-2 sm:py-2 py-8" src={finder} alt="finder" />
</div>

 </div>
 <div className="flex flex-col pl-28">
  <div>
    <h2 className=" py-4 font-sans font-semibold text-base sm:text-base md:text-s">Full Name:</h2>
<textarea className="w-1/3 h-12 border-solid border-inherit border-y border-x rounded-md drop-shadow text-zinc-500 font-sans text-s pt-2 pl-4">Enter your full name here...</textarea>
</div>
<div>
<h2 className=" py-4 font-sans font-semibold text-base sm:text-base md:text-s">Email:</h2>
<textarea className="w-1/3 h-12 border-solid border-inherit border-y border-x rounded-md drop-shadow text-zinc-500 font-sans text-s pt-2 pl-4">Enter your email address here...</textarea>
</div>
<div>
<h2 className=" py-4 font-sans font-semibold text-base sm:text-base md:text-s">Details:</h2>
<textarea className="w-1/3 h-32 border-solid border-inherit border-y border-x rounded-md drop-shadow text-zinc-500 font-sans text-s pt-2 pl-4">Enter your details here...</textarea>
</div>
<div className="pt-4 pb-24">
<button type="button" className=" press bg-cyan-400 rounded-md shadow-md px-5 py-1 hover:bg-cyan-600 w-40 h-12 font-semibold text-base" > SUBMIT </button>
</div>
</div>

</div>
)}