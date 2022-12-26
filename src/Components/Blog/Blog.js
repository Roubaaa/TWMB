import React from "react";
import "./Blog.css";
import { IoPaperPlane } from "react-icons/io5";
import BlogItem from "./BlogItem";
import blogSecond from "./secondPic.png";
import blogThird from "./thirdPic.png";

export default function Blog(){
    return  (
<div>

        <BlogItem />


<div className="blogDiv flex flex-col my-16 mx-24"> 
<p className="titleThree pt-10 sm:text-[32px] text-[15px]">Sign up for The Healing blog</p>
<p className="sm:text-[20px] text-[10px] pb-4">A weekly, ad-free Blog that helps you stay in the know</p>

<div className="search flex items-center justify-between border-gray-500">
          <input
            type="text"
            placeholder="Enter Your e-mail"
            className=" searchh "
          />
          <button type="button"
            className="btn duration-300 px-5 py-2.5 font-[Poppins]
            text-black md:w-auto border-gray-500"
          >
        <IoPaperPlane />
          </button>
        </div>
<p className="titleThree pt-32 sm:text-[32px] text-[15px]">Recommended For you</p>
<div className="flex sm:flex-row flex-col justify-end my-8">
<button type="button"><img src={blogSecond} alt="puzzle" /></button>
<button type="button"><img src={blogThird} alt="overthinking" /></button>
</div>
</div>
</div>)
}