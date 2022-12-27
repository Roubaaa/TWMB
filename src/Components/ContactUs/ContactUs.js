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


</div>


)}