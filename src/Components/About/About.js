import React from "react";
import "./About.css";
import luck from "./luck.jpg"
// import { Link } from "react-router-dom";


export default function About() {
  return (
    <div>
      <div>
<h1 className="sm:px-48 px-2 pt-8 font-normal font-sans text-xl  md:text-2xl">HEALING!</h1>

<p className="sm:px-48 px-2 text-zinc-500 font-sans text-xs sm:text-sm md:text-s normal-case ">some cool one liner!</p>
<p className="sm:px-48 px-2 pt-8 pb-12 font-sans text-xs sm:text-sm md:text-l  break-keep normal-case">At Healing, we believe there 
is a better way to do things. A more valuable way where customers are earned rather than
bought. We re obsessively passionate about it, and our mission is to help people achieve it. 
We focus on search engine optimization. It s one of the least understood and least transparent
 aspects of great marketing, and we see that as an opportunity. We re excited to simplify SEO for 
 everyone through our software, education, and community.</p>
 </div>
<div className="sm:py-2 bg-cyan-50 flex items-stretch ">
<img className="sm:w-56 w-56 h-56 sm:ml-56 ml-2 sm:py-2 py-8" src={luck} alt="luck" />
<div>
<h2 className="sm:px-16 px-4 pt-4 font-sans  text-xl sm:text-xl md:text-2xl">Our Founding</h2>
<p className="sm:px-16 px-4 sm:pr-32 font-sans pt-2 pb-8 text-xs sm:text-sm md:text-l normal-case">Healing was founded  in 2021. It was called Healing Online, and started as a blog and an online community where some of the world s therapists shared their research and ideas. We launched the Beginner s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!</p>
 </div>
 </div>


</div>


)}