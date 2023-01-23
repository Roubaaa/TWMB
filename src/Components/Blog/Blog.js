import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Blog.css";
import { IoPaperPlane } from "react-icons/io5";
import BlogItem from "./BlogItem";
import blogSecond from "./secondPic.png";
import blogThird from "./thirdPic.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export default function Blog(){

  const[input, setInput] = useState("") ;
  const inputHandler = (e) => {
  e.preventDefault();
    setInput(e.target.value)    };



  const submitHandler = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "Newsletter"), {
      email: input
    });

    setInput("")
  };
    return  (
<div>

        <BlogItem />


<div className="blogDiv flex flex-col my-16 mx-24">
<p className="titleThree pt-10 sm:text-[32px] text-[15px]">Sign up for The Healing blog</p>
<p className="sm:text-[20px] text-[10px] pb-4">A weekly, ad-free Blog that helps you stay in the know</p>

<form className="search flex items-center justify-between border-gray-500" onSubmit={submitHandler}>
          <input
            type="text"
            onChange ={inputHandler}
            placeholder="Enter Your e-mail"
            className=" searchh "
          />
          <button type="button"
            className="btn duration-300 px-5 py-2.5 font-[Poppins]
            text-black md:w-auto border-gray-500"
          >
        <IoPaperPlane />
          </button>
        </form>

<p className="titleThree pt-32 sm:text-[32px] text-[15px]">Recommended For you</p>
<div className="flex sm:flex-row flex-col justify-end my-8">
<Link to="/traumaBlog" >
<button type="button"><img src={blogSecond} alt="puzzle" /></button></Link>
<Link to="/depression" >
<button type="button"><img src={blogThird} alt="overthinking" /></button></Link>
</div>
</div>
</div>)
}
