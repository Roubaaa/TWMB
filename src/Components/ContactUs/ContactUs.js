import React from "react";
import "./ContactUs.css";
// import { Link } from "react-router-dom";
import image from "./Group.png";
import image1 from "./Ellipse1.png";

export default function ContactUs() {
  return (

    <div>
<div className="flex flex-wrap justify-center items-center">
  <div className="w-10/12	">
    <h1 className="text-5xl	w-10/12 mt-10">SEND OUS YOUR REQUEST</h1>
    <h1 className="text-3xl	text-gray-400 mt-5">Do you have a question, concern, idea, feedback, or problem? If you need assistance, please fill out the form below and we&apos;d be happy to help!</h1>
  </div>
<div className="flex flex-row w-10/12	 mt-20 gap-56">
    <div className="w-2/4 mt-6">
      <h1 className="text-2xl font-medium	" >Type of contact</h1>
      <div className="space-y-5 mt-5">
        <div className="flex flex-row"><img src={image1} alt="" className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img src={image1} alt="" className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>


      </div>
    </div>
    <div className="w-2/4">
      <img src={image} alt='' className="" />
    </div>
</div>



</div>    

<div className="flex flex-row justify-center items-center my-10">
      <div className="w-10/12">
       <div className="flex flex-col w-2/4 justify-center  items-start space-y-5 px-32 ">
        <h1 className="font-normal text-xl" >Full Name:</h1>
        <input type="text" className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border	" style={{width:"604px",height:"68px"}} placeholder="Enter your full name here..."/>
        <h1 className="font-normal text-xl">Email:</h1>
        <input type="text"  className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border" style={{width:"604px",height:"68px"}} placeholder="Enter your email address here..."/>
        <h1 className="font-normal text-xl">Details:</h1>
        <input type="text"   className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border" style={{width:"604px",height:"180px"}} placeholder="Enter your details here..."/>
        <button type="button" className='w-56	 h-16 rounded-md font-normal text-2xl mt-20' style={{background: '#2DD3E3'}}>SUBMIT</button>
        </div> 
      </div>
      <div className="flex w-10/12 justify-center items-center" style={{height:'581.71px'}}>
        <div className="flex flex-col rounded-lg w-96	justify-center items-start text-2xl" style={{background:"#EAF8F9", borderRadius:'35px'}}>
          <h1 className="ml-5 my-2 font-normal">Find US At:</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Nergiz Plaza</h1>
          <h1 className="ml-5 font-light	text-gray-500		">3rd Floor</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Bakhtiyari Street 40m</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Erbil, Iraq</h1>
          <h1 className="ml-5 font-light	text-gray-500		">44001</h1>
        </div>
      </div>
  </div>

</div>


)}