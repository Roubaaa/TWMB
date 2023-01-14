import './verifyEmail.css'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {sendEmailVerification} from 'firebase/auth'
import {auth} from '../../Firebase/Firebase'
import {useAuthValue} from "../../AuthContext/AuthContext"




function VerifyEmail() {

 const {currentUser} = useAuthValue()
 const [time, setTime] = useState(60)
 const {timeActive, setTimeActive} = useAuthValue()
 const navigate = useNavigate()

 useEffect(() => {
   const interval = setInterval(() => {
     currentUser?.reload()
     .then(() => {
       if(currentUser?.emailVerified){
         clearInterval(interval)
         navigate('/')
       }
     })
     .catch((err) => {
       alert(err.message)
     })
   }, 1000)
 }, [navigate, currentUser])

 useEffect(() => {
   let interval = null
   if(timeActive && time !== 0 ){
     interval = setInterval(() => {
       setTime((time1) => time1 - 1)
     }, 1000)
   }else if(time === 0){
     setTimeActive(false)
     setTime(60)
     clearInterval(interval)
   }
   return () => clearInterval(interval);
 }, [timeActive, time, setTimeActive])

 const resendEmailVerification = () => {
   sendEmailVerification(auth.currentUser)
   .then(() => {
     setTimeActive(true)
   }).catch((err) => {
     alert(err.message)
   })
 }

  return (
    <div className='flex justify-center mt-20 mb-20 '>
      <div className='verifyEmail'>
        <h1 className='pb-3 text-xl'>Verify your Email Address</h1>
        <p className='pb-5 pt-5  '>
          <strong className='font-bold'>A Verification email has been sent to:</strong><br/>
          <span className='font-bold  '>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button onClick={resendEmailVerification}
         disabled={timeActive} className="inline-block px-13 py-2 w-48 h-14 bg-cyan-400 text-gray-800 font-sans font-semibold text-lg leading-9 rounded shadow-md hover:bg-cyan-100 hover:text-cyan-700 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-400 active:shadow-lg transition duration-150 ease-in-out" type='button' >Resend Email {timeActive && time} </button>
      </div>
    </div>
  )
}

export default VerifyEmail
