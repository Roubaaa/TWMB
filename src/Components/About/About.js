import React from "react";
import "./About.css";
import finder from "./finder.jpg"
// import { Link } from "react-router-dom";


export default function About() {
  return (
    <div>
      <div>
<h1 className="lg:px-48 pt-8 font-normal font-sans text-2xl md:pl-4">HEALING!</h1>

<p className="lg:px-48 text-zinc-500 font-sans  text-s md:pl-4">some cool one liner!</p>
<p className="lg:px-48 pt-8 pb-12 font-sans  text-s break-keep md:pl-2">At Healing, we believe there 
is a better way to do things. A more valuable way where customers are earned rather than
bought. We re obsessively passionate about it, and our mission is to help people achieve it. 
We focus on search engine optimization. It s one of the least understood and least transparent
 aspects of great marketing, and we see that as an opportunity. We re excited to simplify SEO for 
 everyone through our software, education, and community.</p>
 </div>
<div className="lg:py-2 bg-emerald-50 flex items-stretch">
<img className="lg:w-56 ml-56 md:w-32" src={finder} alt="finder" />
<div>
<h2 className=" px-20 pt-8 font-sans  text-2xl">Our Founding</h2>
<p className="  px-20 pr-32 font-sans pt-4 pb-8 text-s break-keep">Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world s therapists shared their research and ideas. We launched the Beginner s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!</p>
 </div>
 </div>


</div>


)}