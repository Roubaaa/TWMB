import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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

function App() {
  return (
  <div>
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
        <Route path="/meet" element={<Meet/>} /> 
         <Route path="/learnMore" element={<LearnMore />} />
      </Routes>
  
  <Footer />
  </div>
  );
}

export default App;
