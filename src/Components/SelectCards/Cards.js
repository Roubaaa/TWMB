import React from "react";
import './Cards.css';
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";



export default function PurchaseATicket() {
    return (


<div className="div-cards mt-12">
 <h2 className="text-xl sm:text-3xl title-ticket ml-12">Your saved cards</h2>
 <p className="sm:text-lg text-[14px] ml-12 text-cards">We only support cards as a payment method at the moment!</p>

<div id="default-carousel" className="relative my-14 ml-10 " data-carousel="static">

    {/* <!-- Carousel wrapper --> */}

    <div className="slider">
        <div className="slides ">
          <div id="slides__1" className="slide flex  ">

           <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
          v
           </div>
           <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
          v
           </div>
           <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
          v
           </div>
            <a className="slide__prev" href="#slides__4" title="Next">.</a>
            <a className="slide__next" href="#slides__2" title="Next">.</a>
          </div>
          <div id="slides__2" className="slide">
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
            <a className="slide__prev" href="#slides__1" title="Prev">.</a>
            <a className="slide__next" href="#slides__3" title="Next" >.</a>
          </div>
          <div id="slides__3" className="slide">
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
            <a className="slide__prev" href="#slides__2" title="Prev" >.</a>
            <a className="slide__next" href="#slides__4" title="Next" >.</a>
          </div>
          <div id="slides__4" className="slide">
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
          <div className="w-80 h-56 bg-gray-100 text-white mr-5 rounded-lg">
         v
          </div>
            <a className="slide__prev" href="#slides__3" title="Prev">.</a>
            <a className="slide__next" href="#slides__1" title="Prev" >.</a>
          </div>
        </div>
      </div>


</div>
<Link to="/carddetails">

<button type="button" className="btncard text-[12px] sm:text-xl text-black  py-2 px-4 rounded my-20">
   ADD NEW CARDS <BsPlusLg className="plus"/>
</button></Link>
</div>


  )}
