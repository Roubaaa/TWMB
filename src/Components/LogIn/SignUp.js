import React,{ useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {createUserWithEmailAndPassword,sendEmailVerification,signInWithPopup} from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import {auth,db,provider,facebookProvider} from "../../Firebase/Firebase";
import signupImage from "./SignupImage.png";







function SignUp() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [error, setError] = useState('')
const [val, setVal] = useState({})
const [setValue] = useState('')
const navigate = useNavigate()


const change= event =>{
 const keyName=event.target.name;
 const keyvalue=event.target.value;
 setVal((prev) =>{
 return{...prev,[keyName]:keyvalue};
 });
 }

 const validatePassword = () => {
 let isValid = true
 if (password !== '' && confirmPassword !== ''){
   if (password !== confirmPassword) {
     isValid = false
     setError('Passwords does not match')
   }
 }
 return isValid
}


 const create = async(event) => {
     event.preventDefault();
     setError('')

   await addDoc(collection(db, "signupData"), {
       ...val,email,password,confirmPassword
     });

     if(validatePassword()) {
       // Create a new user with email and password using firebase
         createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
           sendEmailVerification(auth.currentUser)
           .then(() => {
              navigate('/verify-email')
           }).catch((err) => alert(err.message))
         })
         .catch(err => setError(err.message))
     }
     setEmail('')
     setPassword('')
     setConfirmPassword('')
};


const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          navigate('/')
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
          navigate('/')
      })
  }

  const signInWithFacebook =()=>{

    signInWithPopup(auth,facebookProvider).then((data)=>{
      navigate('/')
      setValue(data.user.email)
    }
    ).catch(err => console.log(err.message))
  }



return (
<div className='my-20'>
    <div className='flex flex-wrap justify-center items-center'>
        <div className='w-2/4'>
       <img src={signupImage} alt="signup" className='w-3/4 ml-24 mt-16'/>
        </div>

        {/* Input Part */}
        <div className='w-2/4 '>
        <div className='auth'>

        <h1 className='text-5xl mb-10'>SIGNUP NOW</h1>
        {error && <div className='auth__error'>{error}</div>}
        </div>
        <div className='w-8/12 shadow-lg rounded-lg py-7'>
           <form onSubmit={create} name='registration_form'>
            <div className='flex flex-row gap-3 p-2 justify-center items-center'>

            <input
              onChange={change}
              value={val.firstName}
              name="firstName"
              type="text"
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="First Name"

            />
             <input
              type="text"
              name="lastName"
              value={val.lastName}
              onChange={change}
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"
              placeholder="Last Name"

            />
            </div>

            <div className='flex my-2 w-full px-2 items-center justify-center'>
            <input
            type='email'
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}
              className="form-control block w-11/12 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"

            />
            </div>

          <div className='flex flex-row gap-3 p-2 justify-center items-center'>
            <input
            type='password'
          value={password}
          required
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"

            />
             <input
             type='password'
             value={confirmPassword}
             required
             placeholder='Confirm password'
             onChange={e => setConfirmPassword(e.target.value)}
              className="form-control block w-56 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm"

            />
            </div>
            <div className='flex flex-row w-full justify-center items-center gap-6 m-5'>
                <h1 className='text-gray-700'>
                    Birth Date
                </h1>
                <input
                name="day"
                value={val.day}
                onChange={change}
                type="text" placeholder='DD' className='w-14 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>
                <input
                name="month"
                value={val.month}
                onChange={change}
                type="text" placeholder='MM' className='w-16 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>
                <input
                name="year"
                value={val.year}
                onChange={change}type="text" placeholder='YEAR' className='w-36 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-400 focus:outline-none placeholder:text-sm'/>

            </div>
            <div className='flex flex-row justify-center gap-10'>
            <button
              type='submit'

              className="inline-block px-7 py-2 w-44 h-14 bg-white text-cyan-400 font-sans font-semibold text-lg border border-cyan-400 leading-9 rounded shadow-md hover:text-white hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-40 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Signup
            </button>

             <button
               type="button"
               className="inline-block px-7 py-2 w-44 h-14 bg-cyan-400 text-black font-sans font-semibold text-lg leading-9 rounded shadow-md hover:bg-cyan-100 hover:text-cyan-700 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-600 active:shadow-lg transition duration-150 ease-in-out"
             >
              <Link to="/signIn"> LogIn</Link>
             </button>

            </div>
            </form>
        </div>
        <div className='w-2/4 ml-16'>
        <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-cyan-400 before:mt-0.5 after:flex-1 after:border-t after:border-cyan-400 after:mt-0.5"
          >
            <p className="text-center text-cyan-400 font-semibold mx-4 mb-0">Or</p>
          </div>

          <div className="flex gap-10 justify-center items-center">
          <button
              onClick={handleClick}
              type="button"
               data-mdb-ripple="true"
               data-mdb-ripple-color="light"
               className="inline-block p-3 bg-cyan-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
             >
             <img src="https://cdn-icons-png.flaticon.com/512/1240/1240979.png" className="w-4 h-4 text-white  " alt=""/>
             </button> <button
               onClick={signInWithFacebook}
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
          </div>

        </div>

        </div>
    </div>
</div>
  )
}

export default SignUp
