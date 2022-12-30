import React from "react";
import { Link } from "react-router-dom";
import "./PurchaseATicket.css";
// import { Link } from "react-router-dom";


export default function PurchaseATicket() {
    return (
  
        
 <div className="div-tickt">


 <h2 className="text-xl sm:text-3xl title-ticket">Purchase tickets</h2>
 <p className="sm:text-lg text-[14px] p-tickt">purchase tickets that can be used to book appointments!</p>
  

  <div className="parent-card grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
    {/* 1st */}
<div className="tickt max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <h2 className="sm:text-3xl">5 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">10$</p>
    
    <Link to="/cards">
    <button type="button" className="text-[14px] sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600">
    Purchase
</button></Link>
</div>

{/* 2nd */}
<div className="tickt max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
<h2 className="sm:text-3xl">25 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">40$</p>

    <Link to="/cards">
    <button type="button" className="text-[14px] sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600">
    Purchase
</button></Link>
</div>

{/* 3rd */}
<div className="tickt max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
<h2 className="sm:text-3xl">50 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">70$</p>
    <Link to="/cards">
    <button type="button" className="text-[14px] sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600">
    Purchase
</button></Link>
</div>

</div>

<div className="tickt tickt2 p-8 bg-white border border-gray-200 rounded-lg shadow-md ">
<h2 className="sm:text-4xl">Are you a counselor?</h2>
    <p className="mb-3 font-normal text-[10px] sm:text-2xl">Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!</p>
    <button type="button" className="sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600">
    Learn More
</button>
</div>


</div>



  )}
  