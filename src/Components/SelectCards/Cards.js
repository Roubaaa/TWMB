import React from "react";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import Card1 from "./card1.png"
import Card2 from "./card2.png"
import Card3 from "./card3.png"


export default function PurchaseATicket() {
    return (
  
        
<div className="div-cards mt-12">
 <h2 className="text-xl sm:text-3xl title-ticket ml-12">Your saved cards</h2>
 <p className="sm:text-lg text-[14px] ml-12 text-cards">We only support cards as a payment method at the moment!</p>

<div id="default-carousel" className="relative my-14 " data-carousel="static">

    {/* <!-- Carousel wrapper --> */}
    
    <div className="cardss grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4  sm:px-6">
    {/* 1st */}

<img src={Card1} alt="card"/>


{/* 2nd */}
<img src={Card2} alt="card"/>


{/* 3rd */}
<img src={Card3} alt="card"/>

</div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="rounded-md inline-flex items-center justify-center w-8 h-8  sm:w-12 sm:h-12 bg-white/30  group-focus:ring-white dark:group-focus:ring-gray-800/70 border-2 border-black">
           <AiOutlineLeft size='30px'/>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none rounded-xl" data-carousel-next>
        <span className="rounded-md inline-flex items-center justify-center w-8 h-8  sm:w-12 sm:h-12 bg-white/30 group-focus:ring-white dark:group-focus:ring-gray-800/70 border-2 border-black">
           <AiOutlineRight size='30px'/>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
<button type="button" className="btncard text-[12px] sm:text-xl text-black  py-2 px-4 rounded my-20">
   ADD NEW CARDS <BsPlusLg className="plus"/>
</button>
</div>


  )}
