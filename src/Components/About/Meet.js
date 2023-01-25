import React from "react";
import "./About.css";
import maryam from "./maryam.jpg";
import rukaya from "./rukaya.jpg";
import ruba from "./ruba.jpg";
import ahmad from "./ahmad.png";
import shad from "./shad.jpg";
// import { Link } from "react-router-dom";


export default function Meet() {
  return (
    <div>
      <div>
<h1 className="sm:px-48 px-2 pt-12 font-normal font-sans text-2xl  md:text-3xl">WE ARE HEALING, NICE TO MEET YOU!</h1>

<p className="sm:px-48 px-2 sm:pt-20 text-zinc-500 font-normal font-sans text-lg normal-case ">Meet the Team!</p>
 </div>
 <div className="sm:pl-48 px-2 flex flex-wrap sm:flex-row">
<div className=" sm:pl-0 pr-4 px-2 py-8">
<img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={maryam} alt="maryam" />
<div className=" w-28 h-36 bg-cyan-50 rounded-b-3xl text-center text-zinc-500 px-2">
<h2 className="text-s sm:text-sm md:text-s py-4">Maryyam Salah</h2>
<p className="text-xs sm:text-xs md:text-s normal-case">Lead Engineer & Web Developer</p>

</div>
</div>
<div className=" sm:px-8 px-2 py-8">
<img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={rukaya} alt="rukaya" />
<div className=" w-28 h-36 bg-cyan-50 rounded-b-3xl text-center text-zinc-500 px-2">
<h2 className="text-s sm:text-sm md:text-s py-4">Rokaya Amjaad</h2>
<p className="text-xs sm:text-xs md:text-s normal-case">Lead Engineer & Web Developer</p>

</div>
</div>
<div className=" sm:px-8 px-2 py-8">
<img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={ruba} alt="ruba" />
<div className=" w-28 h-36 bg-cyan-50 rounded-b-3xl text-center text-zinc-500 px-2">
<h2 className="text-s sm:text-sm md:text-s py-4">Ruba Alsoheil</h2>
<p className="text-xs sm:text-xs md:text-s normal-case">Lead Engineer & Web Developer</p>

</div>
</div>
<div className=" sm:px-8 px-4 py-8">
<img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={shad} alt="shad" />
<div className=" w-28 h-36 bg-cyan-50 rounded-b-3xl text-center text-zinc-500 px-2">
<h2 className="text-s sm:text-sm md:text-s py-4">Shad Mustafa</h2>
<p className="text-xs sm:text-xs md:text-s normal-case">Lead Engineer & Web Developer</p>

</div>
</div>
<div className=" sm:px-8 px-2 py-8">
<img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={ahmad} alt="ahmad" />
<div className=" w-28 h-36 bg-cyan-50 rounded-b-3xl text-center text-zinc-500 px-2">
<h2 className="text-s sm:text-sm md:text-s py-4">Ahmad Hasoun</h2>
<p className="text-xs sm:text-xs md:text-s normal-case">Lead Engineer & Web Developer</p>

</div>
</div>
 </div>


</div>


)}