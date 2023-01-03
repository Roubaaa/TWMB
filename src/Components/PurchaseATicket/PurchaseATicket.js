import React from "react";
import "./PurchaseATicket.css";
import '../Home/Home.css';
import { Link } from "react-router-dom";


export default function PurchaseATicket() {
    return (


 <div className="div-tickt ">


 <h2 className="mt-10 font-bold text-xl sm:text-4xl title-ticket">Purchase tickets</h2>
 <p className=" font-bold sm:text-lg text-[14px] p-tickt mb-10">purchase tickets that can be used to book appointments!</p>


  <div className="parent-card grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5">
    {/* 1st */}
<div className="tickt max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-500">
    <h2 className=" sm:text-3xl">5 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">10$</p>

    <button type="button" className="text-[14px] font-bold sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600 ">
    Purchase
</button>
</div>

{/* 2nd */}
<div className="tickt  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-500 ">
<h2 className=" sm:text-3xl">25 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">40$</p>
    <button type="button" className="text-[14px] font-bold sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600 ">
    Purchase
</button>
</div>

{/* 3rd */}
<div className="tickt max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-500 ">
<h2 className="sm:text-3xl">50 Tickets</h2>
    <p className="sm:text-2xl mb-3 font-normal text-gray-700 dark:text-gray-400">70$</p>
    <button type="button" className="text-[14px] font-bold sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600 ">
    Purchase
</button>
</div>

</div>

<div className="tickt shadow-2xl shadow-gray-500  p-8 bg-white border border-gray-200 rounded-lg  ">
<h2 className="font-style  sm:text-4xl font-bold">Are you a counselor?</h2>
    <p className="mb-3 font-bold sm:text-lg text-[14px] p-tickt">Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!</p>
    <button type="button" className="text-[14px] font-bold sm:text-2xl text-black  py-2 px-4 rounded hover:bg-cyan-600 ">
  <Link to ="/learnMore">Learn More</Link>
</button>
</div>


</div>



  )}
