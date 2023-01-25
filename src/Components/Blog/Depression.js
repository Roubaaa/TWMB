import React, { useEffect, useState } from 'react';
import "./Blog.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import depressionImage from "./depression.png";



export default function Depression(){

  const [blogs, setBlogs] = useState([]);
  const userCollectionRef = collection(db, 'DepessionBlogs');
  useEffect(() => {
    const fetchBlog= async () => {
      const data = await getDocs(userCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlog();
  }, []);


    return  (
      <div className=" flex flex-col sm:my-16 sm:mx-24  mx-20 my-10">

      <img src={depressionImage} alt="reading"  className="place-self-center"/>


      <h1 className="titleOne pt-12 pb-3  sm:text-[50px] text-[18px]">HEALING STORIES</h1>

      {blogs.map((stories) => {
                return (

      <div className="flex flex-col mt-16" key={stories.id}>

      <div className="w-full h-auto mb-24 ">
      <div className="w-full h-36 bg-cyan-50"></div>
      <div className="flex absolute ml-20 -mt-24   ">
      <img src={stories.userUrl} alt="pic1"  className="w-96 h-72 rounded-lg"/>
      <h1 className="title text-left  text-gray-500 pl-40 pr-40  font-bold pt-12 pb-3  text-4xl ">{stories.tittle}</h1>
      </div>
      <p className="mt-60 py-2 mr-6 ml-20 text-black sm:text-[20px] text-[10px]">{stories.story}</p>
      </div>



      </div>

    );
    })}

      </div>

)
}
