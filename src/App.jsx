import React,{useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {onAuthStateChanged} from 'firebase/auth';
import {AuthProvider} from './AuthContext/AuthContext';
import {auth} from './Firebase/Firebase'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import SignIn from "./Components/LogIn/SignIn"
import SignUp from "./Components/LogIn/SignUp"
import ContactUs from "./Components/ContactUs/ContactUs"
import CreateAnAccount from "./Components/CreateAnAccount/CreateAnAccount"
import PurchaseATicket from "./Components/PurchaseATicket/PurchaseATicket"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import SelectCards from "./Components/SelectCards/Cards"
import CardDetails from "./Components/CardDetails/Carddetails"
import Meet from "./Components/About/Meet"
import LearnMore from "./Components/Home/LearnMore";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import Career from "./Components/Career/Career";
import Booking from "./Components/Booking/Booking";
import GoogleTranslate from "./Components/GoogleTranslate"

function App() {

const [currentUser, setCurrentUser] = useState(null);
const [timeActive, setTimeActive] = useState(false);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user)
   })
}, [])

  return (
  <AuthProvider  value={{currentUser, timeActive, setTimeActive}}>
  <div>

  <GoogleTranslate/>
  
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/account" element={<CreateAnAccount />} />
        <Route path="/purchase" element={<PurchaseATicket />} />
        <Route path="/cards" element={<SelectCards/>} />
        <Route path="/carddetails" element={<CardDetails/>} />
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/meet" element={<Meet/>} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="/career" element={<Career/>} />

      </Routes>

  <Footer />
  </div>
  </AuthProvider>
  );
}

export default App;

