import React from "react";
import { useEffect, useState } from "react";
import Translation from './Data.json';
import "./About.css";
import finder from "./finder.jpg";

function About(){
    const [language,setLanguage]=useState("english")
    const [content,setContent]=useState({})

    useEffect(()=>{
        if(language=="english"){
            setContent(Translation.english)
        }else if(language=="kurdish"){
            setContent(Translation.kurdish)
        }else if(language=="arabic"){
            setContent(Translation.arabic)
        }
    })
   
    return(
        <div>
          <div>
            <select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
                <option>english</option>
                <option>kurdish</option>
                <option>arabic</option>
            </select>

            <h2></h2>
            <h1 className="sm:px-48 px-2 pt-8 font-normal font-sans text-xl  md:text-2xl">{content.Title}</h1>
            <p className="sm:px-48 px-2 text-zinc-500 font-sans text-xs sm:text-sm md:text-s ">{content.Description}</p>
<p className="sm:px-48 px-2 pt-8 pb-12 font-sans text-xs sm:text-sm md:text-l  break-keep">{content.Paragraph}</p>
 </div>
<div className="sm:py-2 bg-cyan-50 flex items-stretch ">
<img className="sm:w-56 w-56 h-56 sm:ml-56 ml-2 sm:py-2 py-8" src={finder} alt="finder" />
<div>
<h2 className="sm:px-16 px-4 pt-4 font-sans  text-xl sm:text-xl md:text-2xl">{content.h2}</h2>
<p className="sm:px-16 px-4 sm:pr-32 font-sans pt-2 pb-8 text-xs sm:text-sm md:text-l ">{content.p}</p>
 </div>
        </div>
        </div>
    );
}
export default About;