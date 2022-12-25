import React from 'react';
import './Home.css';
import Background from './homeimages/background.png';
import Pic1 from './homeimages/main-image.png';
import Pic2 from './homeimages/therapist1.jpg';
import Pic3 from './homeimages/therapist2.jpg';
import Pic4 from './homeimages/therapist3.jpg';
import Pic5 from './homeimages/therapist4.jpg';
import Pic6 from './homeimages/therapist5.jpg';
import Button1 from './button';




// import { Link } from "react-router-dom";


export default function Home() {
  return (

<div >


<div>
<img src={Background} alt="background" className="object-cover"/>
<div className="absolute flex -mt-96  " >
<div className="w-2/4 ml-48 -mt-20 center">
<p className="text-3xl">WE ARE HERE TO</p>
<p className="text-8xl">HELP</p>
<Button1 p="BOOK AN APPIONTMENT"/>
</div>
<div className="w-3/4 -mt-32 mr-20"><img src={Pic1} alt="background" className=""/></div>
</div>
</div>


<div className="bg-yellow-200 w-full pl-40 h-auto">
<p className="text-4xl mt-5 pt-20   uppercase">Professional, licensed, and vetted <br/>therapists that you can trust</p>
<div className="flex mt-16  ">
<div><img  src={Pic2} alt="" className="bg-cover bg-center rounded-full bg-white border-2 w-32 h-32 border-sky-900 mr-3"/></div>
<div><img  src={Pic3}  alt="" className="bg-cover bg-center rounded-full bg-white border-2 w-32 h-32 border-sky-900 mr-3"/></div>
<div><img  src={Pic4}  alt="" className="bg-cover bg-center rounded-full bg-white border-2 w-32 h-32 border-sky-900 mr-3"/></div>
<div><img  src={Pic5}  alt="" className="bg-cover  rounded-full bg-white border-2 w-32 h-32 border-sky-900 mr-3"/></div>
<div><img  src={Pic6}  alt="" className="bg-cover  rounded-full bg-white border-2 w-32 h-32 border-sky-900 mr-3"/></div>
</div>
<p className="font-style font-bold text-xl pt-14  mr-32">Tap into the world largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.</p>
<div className="ml-4 pb-20"><Button1 p="BOOK AN APPIONTMENT"/></div>
</div>


<div className="w-full h-auto pl-40">
<p className="text-4xl mt-5 pt-20   uppercase">we can communicate through</p>
<div className="flex   mt-16 mb-10">
<div className=" w-80 h-80 bg-white shadow-2xl shadow-gray-500 mr-5 rounded-3xl ">
<div className="flex justify-center mt-10"><i className="fa-solid fa-phone text-7xl "/></div>
<div className="flex justify-center mt-5">
<p className="  text-4xl  ">Voice Call</p>
</div>
<div className="flex justify-center mt-5">
<p className="  font-style  font-semibold text-md text-center 	ml-8 mr-8 ">Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!</p>
</div>
</div>
<div className="w-80 h-80 bg-white shadow-2xl shadow-gray-500 mr-5 rounded-3xl center">
<div className="flex justify-center mt-10"><i className="fa-solid fa-comments text-7xl"/></div>
<div className="flex justify-center mt-5">
<p className="  text-4xl  ">Chat</p>
</div>
<div className="flex justify-center mt-5">
<p className="  font-style  font-semibold text-md text-center 	ml-8 mr-8 ">Need to talk to someone?<br/>Come have a chat with your<br/> therapist!</p>
</div>
</div>
<div className="w-80 h-80 bg-white shadow-2xl shadow-gray-500  rounded-3xl center">
<div className="flex justify-center mt-10"><i className="fa-solid fa-video text-7xl"/></div>
<div className="flex justify-center mt-5">
<p className="  text-4xl  ">Video Call</p>
</div>
<div className="flex justify-center mt-5">
<p className="  font-style  font-semibold text-md text-center 	ml-8 mr-8 ">For better experience therapists recommend video calls, but always remember that its a choice!</p>
</div>
</div>
</div>
</div>






</div>


       )}
