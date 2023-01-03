import React from "react";
import { Link } from "react-router-dom";
import Cardd1 from "./cardd1.png"
import Cardd2 from "./cardd2.png"


export default function Carddetails() {
    return (
  
        
 <div className="div-select mx-8 sm:mx-40">

<h2 className="text-l sm:text-3xl title-ticket ">add card details</h2>
 <p className="sm:text-lg text-[14px] text-cards">Please make sure all of the info you enter are the same as your card registration info.</p>


  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
    {/* 1st */}

<div className=" max-w-sm  bg-white">
<form action="/action_page.php" className="flex flex-col">
  <p className="text-sm text-cards mt-5">Supported Card types</p>
  <div className="flex ">
  <button type="button" className="sm:w-2/4 btndetail bg-transparent font-semibold  px-4 ">
  Visa
</button>
<button type="button" className="sm:w-2/4 btndetail bg-transparent font-semibold  px-4 ">
Mastercard
</button>
  </div>

  <p className="text-sm text-cards mt-6">Card Number</p>
 <input className="text-sm border px-2 w-auto py-1" type="tel" pattern="\d*" maxLength={19} placeholder="Card Number" name="card num" /> 
 

 <div className="flex ">
 <p className="text-sm text-cards mt-6">Expiry Date</p>
 <p className="text-sm text-cards ml-2 sm:ml-5 mt-6">CVV Code</p>
  </div>

  <div className="flex ">

 <input className="text-sm border px-2 w-2/6 py-1" name="credit-expires" type="tel" pattern="\d*" maxLength={7} placeholder="MM / YY"/> 
 <input className="text-sm border px-2 w-2/6 ml-2 sm:ml-2 py-1" name="credit-cvc" type="password"  minLength="4" placeholder="***"/> 
  </div>

  <p className="text-cards mt-6">Name on Card</p>
 <input className="border px-2 w-auto py-1" type="text"  placeholder="Card Name" name="card name" /> 
 
</form>
</div>

{/* 2nddd */}
<div className=" max-w-sm  bg-white">
<form action="/action_page.php" className="flex flex-col">

<p className="text-sm text-cards mt-6">Country</p>
<select className="text-sm border px-2 w-auto py-1" type="tel" pattern="\d*" maxLength={19} placeholder="Card Number" name="card num" >
  <option value="volvo">United State</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>


  <p className="text-sm text-cards mt-6">ZIP Code</p>
 <input className="text-sm border px-2 w-auto py-1" type="text"  maxLength={19} placeholder="your ZIP Code" name="card num" /> 
 

 <p className="text-sm text-cards mt-6">City</p>
<select className="text-sm border px-2 w-3/4 py-1" type="tel" pattern="\d*" maxLength={19} placeholder="Card Number" name="card num" >
  <option value="volvo">San-FranciscoUnited State</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>


  <p className="text-cards mt-6">Address</p>
 <input className="border px-2 w-auto py-1" type="text"  placeholder="your Address" name="card name" /> 
 
</form>
</div>

{/* 3rddddddddd */}


<div className=" max-w-sm  bg-white">
  <img src={Cardd1} alt="card"/>
<img src={Cardd2} alt="card"/>

</div>

</div>
<Link to="/">

<button type="button" className="btncard text-[12px] sm:text-xl text-black  py-2 px-4 rounded my-20">
   ADD CARD 
</button></Link>


</div>



  )}
  