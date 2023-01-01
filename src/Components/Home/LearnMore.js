import React from "react";
import "./LearnMore.css";
import learnMorePic from "./LearnMore.png"
// import { Link } from "react-router-dom";


export default function LearnMore() {
  return (
   <div className="sm:my-16 sm:mx-24  my-5 mx-8">
 
    <h1 className=" learnMoreTitle sm:text-[50px] text-[30px] mb-3.5 ">Why work with Healing?</h1> 

    <div className="flex lg:flex-row flex-col-reverse">

    <div>
    <h6 className="learnMoreTitleSec sm:text-[20px] text-[18px] mb-1">Reliable Income</h6>
    <p className=" para sm:text-[20px] text-[18px] text-justify sm:mr-20">
    Over 10,000 people sign up on BetterHelp every day looking 
    for a counselor to help with life`s challenges. BetterHelp can 
    be your main source of income (``full time``) or a supplement 
    to your current work.
    </p>
    <h6 className="learnMoreTitleSec sm:text-[20px] text-[18px] mb-1 mt-5 ">Focus on Counseling</h6>
    <p className=" para sm:text-[20px] text-[18px] text-justify sm:mr-20">
    No need to worry about costs from acquiring clients, billing, 
    support or operations. Let us handle the fees and paperwork 
    so you can focus on what you do best!
    </p >
    <h6 className="learnMoreTitleSec sm:text-[20px] text-[18px] mb-1 mt-5">Focus on Counseling</h6>
    <p className="para sm:text-[20px] text-[18px] text-justify sm:mr-20">No need to worry about costs from acquiring clients, billing, 
    support or operations. Let us handle the fees and paperwork 
    so you can focus on what you do best</p>
    
        <h3 className="learnMoreTitleThird sm:text-[35px] text-[23px] mb-2 mt-11">Requirements</h3>
        <ul  className=" learnMoreList sm:text-[20px] text-[18px]" >
            <li>Licensed by a State Board to provide counseling</li>
            <li>Experience in counseling for adults, couples, and/or teens</li>
            <li>Excellent writing skills</li>
            <li>Reliable Internet connection</li>
            <li>Currently residing in the US</li>
        </ul>
    </div>

    <div className="w-11/12"><img src={learnMorePic} alt="Girl on laptop" /></div>
   
    </div>

    <button type="button" className="learnMoreButton sm:text-2xl text-black  py-3 px-6 hover:bg-cyan-600 bg-cyan-400 rounded-md shadow-md mb-3.5 mt-6 ">get started</button>
 </div>
       )}