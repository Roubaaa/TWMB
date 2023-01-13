import React ,{useState} from "react";
import "./ContactUs.css";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../Firebase"
// import { Link } from "react-router-dom";
import image from "./Group.png";

const  ContactUs = ()=> {
    
  const[name , setName] = useState("");
  const[email , setEmail] = useState({});
  const[details , setDetails] = useState("");
  const[questions , setQuestion] = useState("")

    // __________this handling  email,name,details input___________________
  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
  // console.log('handleOnChange:', keyName);
   
    setDetails((prev) => {
      return { ...prev, [keyName]: value };
    });
    setEmail((prev) => {
      return { ...prev, [keyName]: value };
    });
    setName((prev) => {
      return { ...prev, [keyName]: value };
    });
    setQuestion((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, 'contactdata'), {
      ...email 
    }).then(() => {
       alert('Message has been submitted');})
    // Clear the form
   
    setName({
      name: '',
    });
    setEmail({
      email: '',
    });
    setDetails({
      details: '',
    });
    setQuestion({
      questions: '',
    });
  };

  // const questionsChangeHandler = (event) => {
  //   // console.log('selected question:', event.target.value);
  //   const {
  //     target: { name: keyName, value },
  //   } = event;
  //   setQuestion((prev) => {
  //     return { ...prev, [keyName]: value };
  //   });
  // }

  return (

    <div>
<div className="flex flex-wrap justify-center items-center">
  <div className="w-10/12	">
    <h1 className="text-5xl	w-10/12 mt-10">SEND OUS YOUR REQUEST</h1>
    <h1 className="text-3xl	text-gray-400 mt-5">Do you have a question, concern, idea, feedback, or problem? If you need assistance, please fill out the form below and we&apos;d be happy to help!</h1>
  </div>
<div className="flex flex-row w-10/12	 mt-20 gap-56">
    <div className="w-2/4 mt-6">
      <h1 className="text-2xl font-medium	" >Type of contact</h1>
      <div className="space-y-5 mt-5" onChange={handleOnChange}>
       
        <label htmlFor="ques1">I have a question about the service.<input type="radio" id="ques1" name="questions" value={questions.QuestionA} /></label><br/>
        <label htmlFor="ques2">I am a registered client and I need support.<input type="radio" id="ques2" name="questions" value={questions.QuestionB} /></label><br/>
        <label htmlFor="ques3">I am a counselor interested in joining.<input type="radio" id="ques3" name="questions" value={questions.QuestionC}  /></label><br/>
        <label htmlFor="ques4">I am a registered counselor and I need support.<input type="radio" id="ques4" name="questions" value={questions.QuestionD}  /></label><br/>
        <label htmlFor="ques5">I have a business-related inquiry.<input type="radio" id="ques5" name="questions" value={questions.QuestionE}  /></label><br/>
        <label htmlFor="ques6">I am interested in Healing Online for my organization.<input type="radio" id="ques6" name="questions" value={questions.QuestionF}  /></label><br/>
        <label htmlFor="ques7">I have a billing related question.<input type="radio" id="ques7" name="questions" value={questions.QuestionG}  /></label><br/>
       

      </div>
    </div>
    <div className="w-2/4">
      <img src={image} alt='' className="" />
    </div>
</div>



</div>    

<div className="flex flex-row justify-center items-center my-10">
      <form className="w-10/12" onSubmit={handleSubmit}>
       <div className="flex flex-col w-2/4 justify-center  items-start space-y-5 px-32">
        <label htmlFor="name" className="font-normal text-xl" >Full Name:
        <input type="text"
        name="name"
        value={name.name}
        onChange={handleOnChange}
        
        className="rounded-lg shadow-md placeholder:text-lg placeholder border	px-6" style={{width:"604px",height:"68px"}} placeholder="Enter your full name here..."
      
        /></label>

        <label htmlFor="email" className="font-normal text-xl">Email:
        <input   className="rounded-lg shadow-md placeholder:text-lg placeholder border px-6"
         type="email"
         name="email"
         value={email.email}
         onChange={handleOnChange}
         style={{width:"604px",height:"68px"}
        } placeholder="Enter your email address here..."

        />
        </label>
        <label htmlFor="detail" className="font-normal text-xl">Details:
        <input type="text"  
        name="details"
        value={details.details}
        onChange={handleOnChange}
         className="rounded-lg shadow-md placeholder:text-lg placeholder border px-6" style={{width:"604px",height:"180px"}} placeholder="Enter your details here..."
         
      
        /></label>
        <button  type="submit"
              aria-label="Send"
              className='w-56	 h-16 rounded-md font-normal text-2xl mt-20'
             style={{background: '#2DD3E3'}}>SUBMIT</button>
        </div> 
      </form>
      <div className="flex w-10/12 justify-center items-center" style={{height:'581.71px'}}>
        <div className="flex flex-col rounded-lg w-96	justify-center items-start text-2xl" style={{background:"#EAF8F9", borderRadius:'35px'}}>
          <h1 className="ml-5 my-2 font-normal">Find US At:</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Nergiz Plaza</h1>
          <h1 className="ml-5 font-light	text-gray-500		">3rd Floor</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Bakhtiyari Street 40m</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Erbil, Iraq</h1>
          <h1 className="ml-5 font-light	text-gray-500		">44001</h1>
        </div>
      </div>
  </div>

</div>


)}
export default ContactUs