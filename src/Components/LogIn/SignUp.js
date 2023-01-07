
import { React, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import  {  UserAuth } from "../../contexts/AuthContext";
import Google from "./Google.png";
import signupImage from "./SignupImage.png";


function SignUp() {

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
<div className='my-20'>
    <div className='flex flex-wrap justify-center items-center'>
        <div className='w-2/4'>
       <img src={signupImage} alt="signup" className='w-3/4 ml-24 mt-16'/>
        </div>

        {/* Input Part */}

        <div className='w-2/4 '>
        <div>
        <h1 className='text-5xl mb-10'>SIGNUP NOW</h1>
        </div>
        <div className='w-8/12 shadow-lg rounded-lg py-7'>
            <div className='flex flex-row gap-3 p-2 justify-center items-center'>
            <input
              type="text"
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="First Name"
            /> 
             <input
              type="text"
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Last Name"
            />
            </div>

            <div className='flex my-2 w-full px-2 items-center justify-center'>
            <input
              type="text"
              className="form-control block w-11/12 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Your Email"
            />  
            </div>
            <div className='flex my-2 w-full px-2 items-center justify-center'>
            <input
              type="text"
              className="form-control block w-11/12 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Confirm Email"
            />  
            </div>
            <div className='flex flex-row gap-3 p-2 justify-center items-center'>
            <input
              type="text"
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Password"
            /> 
             <input
              type="text"
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Confirm Password"
            />
            </div>
            <div className='flex flex-row w-full justify-center items-center gap-6 m-5'>
                <h1 className='text-gray-700'>
                    Birth Date
                </h1>
                <input type="text" placeholder='DD' className='w-14 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>
                <input type="text" placeholder='MM' className='w-16 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>
                <input type="text" placeholder='YEAR' className='w-36 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>

            </div>
            <div className='flex flex-row justify-center gap-10'>
            <button
              type="button"
              className="inline-block px-7 py-2 w-44 h-14 bg-cyan-400 text-black font-sans font-semibold text-lg leading-9 rounded shadow-md hover:bg-cyan-100 hover:text-cyan-700 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-600 active:shadow-lg transition duration-150 ease-in-out"
            >
             <Link to="/signIn"> LogIn</Link>
            </button>


            <button
              type="button"
              className="inline-block px-7 py-2 w-44 h-14 bg-white text-cyan-400 font-sans font-semibold text-lg border border-cyan-400 leading-9 rounded shadow-md hover:text-white hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-40 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Signup
            </button>
            </div>
        </div>
        <div className='w-2/4 ml-16'>
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
    </div>
</div>
  )
}

export default SignUp