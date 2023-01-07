import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import  {  UserAuth } from "../../contexts/AuthContext";
import MyImage from "./image.png";
import Google from "./Google.png";

export default function SignIn() {
 

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

 const handleGoogleSignIn = async () => {
  await googleSignIn();
useEffect(() => {
if (user != null) {
  navigate('/');
}
}, [user]);}


  return (
<div className="flex flex-col justify-center items-center mt-12  ">

  <div className="w-3/4">
      <h1 className="text-5xl	">LOGIN</h1>
  </div>

  <div className="flex flex-row mt-24">
      <div className="flex flex-col justify-center items-center">
        <div className="shadow-lg px-10 py-10 ml-44">
        <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              id="exampleFormControlInput2"
              placeholder="Your Email"
            />

        <input
              type="password"
              className="form-control my-10 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              id="exampleFormControlInput2"
              placeholder="Your Password"
            />

        <div className="flex gap-8">
            <button
              type="button"
              className="inline-block px-7 py-2 w-3/4 bg-cyan-400 text-black font-sans font-medium text-base leading-snug rounded shadow-md hover:bg-cyan-100 hover:text-cyan-700 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>


            <button
              type="button"
              className="inline-block px-7 py-2 w-3/4  bg-white text-cyan-400 font-sans font-medium text-base border border-cyan-400 leading-snug rounded shadow-md hover:text-white hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-40 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <Link to="/signUp"> SignUp</Link>
            </button>
          </div>
        </div>
    <div className="w-2/4 ml-40">
        <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-cyan-400 before:mt-0.5 after:flex-1 after:border-t after:border-cyan-400 after:mt-0.5"
          >
            <p className="text-center text-cyan-400 font-semibold mx-4 mb-0">Or</p>
          </div>
          <div className="flex gap-10 justify-center items-center">

             <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-cyan-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button> 
           
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="inline-block p-1 white-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            > <img src={Google} alt="Google Icon" />
            </button>
      
          </div>
    </div>
   
    </div>

    
            <div className="w-full ml-44">
              <img src={MyImage} alt="login" className="w-3/4"/>
            </div>
          </div>


</div>  
)}