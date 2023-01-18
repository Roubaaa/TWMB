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
  const[first,setFirst] = useState(true)
  const[second,setSecond] = useState(true)
  const[third,setThird] = useState(true)
  const[fourth,setFourth] = useState(true)
  const[fifth,setFifth] = useState(true)
  const[sixth,setSixth] = useState(true)
  const[seventh,setSeventh] = useState(true)

    // __________this handling  email,name,details input___________________

const handleOnChange1 = (data) => {

if (data==='first'){
     if (first===true) {
      setQuestion("I have a question about the service.")
     }
    setFirst(!first)
  };


  if (data==='second'){
       if (second===true) {
        setQuestion("I am a registered client and I need support.")
       }
      setSecond(!second)
    };

if (data==='third'){
         if (third===true) {
          setQuestion("I am a counselor interested in joining.")
         }
        setThird(!third)
      };

if (data==='fourth'){
           if (fourth===true) {
            setQuestion("I am a registered counselor and I need support.")
           }
          setFourth(!fourth)
        };

if (data==='fifth'){
             if (fifth===true) {
              setQuestion("I have a business-related inquiry.")
             }
            setFifth(!fifth)
          };
if (data==='sixth'){
               if (sixth===true) {
                setQuestion("I am interested in Healing Online for my organization.")
               }
              setSixth(!sixth)
            };

if (data==='seventh'){
                 if (seventh===true) {
                  setQuestion("I have a billing related question.")
                 }
                setSeventh(!seventh)
              };

};


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

  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, 'contactdata'), {
      ...email,questions 
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

  };
console.log(questions)
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
    <h1 className="	w-10/12 mt-10 font-normal font-sans text-2xl  md:text-3xl">SEND US YOUR REQUEST</h1>
    <h1 className=" mt-5 text-zinc-500 font-sans text-s sm:text-sm md:text-xl">Do you have a question, concern, idea, feedback, or problem? If you need assistance, please fill out the form below and we will be happy to help!</h1>
  </div>
<div className="flex flex-row w-10/12	 mt-20 gap-56">
    <div className=" w-2/4 mt-6">
      <h1 className="text-s sm:text-sm md:text-2xl font-medium	" >Type of contact</h1>

      <div className="flex flex-col mt-5"  >

        <label htmlFor="ques1">I have a question about the service.<input className="float-left mr-4 mt-2 md-mr-2 md-mt-0 md-float-left" type="radio" id="ques1" name="questions" onChange={()=> handleOnChange1("first")} value={first} /></label><br/>
        <label htmlFor="ques2">I am a registered client and I need support.<input className="float-left mr-4 mt-2" type="radio" id="ques2" name="questions" onChange={()=> handleOnChange1("second")} value={second} /></label><br/>
        <label htmlFor="ques3">I am a counselor interested in joining.<input className="float-left mr-4 mt-2" type="radio" id="ques3" name="questions" onChange={()=> handleOnChange1("third")} value={third}  /></label><br/>
        <label htmlFor="ques4">I am a registered counselor and I need support.<input className="float-left mr-4 mt-2" type="radio" id="ques4" name="questions" onChange={()=> handleOnChange1("fourth")} value={fourth}  /></label><br/>
        <label htmlFor="ques5">I have a business-related inquiry.<input className="float-left mr-4 mt-2" type="radio" id="ques5" name="questions" onChange={()=> handleOnChange1("fifth")} value={fifth}  /></label><br/>
        <label htmlFor="ques6">I am interested in Healing Online for my organization.<input className="float-left mr-4 mt-2" type="radio" id="ques6" name="questions" onChange={()=> handleOnChange1("sixth")} value={sixth}  /></label><br/>
        <label htmlFor="ques7">I have a billing related question.<input className="float-left mr-4 mt-2 mt-2" type="radio" id="ques7" name="questions" onChange={()=> handleOnChange1("seventh")} value={seventh}  /></label><br/>


      </div>
    </div>
    <div className="">
      <img  src={image} alt='' className="sm:w-auto w-auto h-auto " />
    </div>
</div>



</div>

<div className="flex flex-row justify-center items-center my-12">
      <form className="w-10/12  " onSubmit={handleSubmit}>
       <div className="flex flex-col sm:w-2/4 w-2/4 justify-center  items-start space-y-5  sm:px-28 px-48">
        <label htmlFor="name" className="font-normal text-l sm:text-sm md:text-xl" >Full Name:
        <input type="text"
        name="name"
        value={name.name}
        onChange={handleOnChange}

        className="rounded-lg shadow-md sm:placeholder:text-lg placeholder:text-sm placeholder border my-4	px-4" style={{width:"604px",height:"68px"}} placeholder="Enter your full name here..."

        /></label>

        <label htmlFor="email" className="font-normal text-l sm:text-sm md:text-xl ">Email:
        <input   className="rounded-lg shadow-md sm:placeholder:text-lg placeholder:text-sm placeholder border my-4 px-4 "
         type="email"
         name="email"
         value={email.email}
         onChange={handleOnChange}
         style={{width:"604px",height:"68px"}
        } placeholder="Enter your email address here..."

        />
        </label>
        <label htmlFor="detail" className="font-normal text-l sm:text-sm md:text-xl">Details:
        <input type="text"
        name="details"
        value={details.details}
        onChange={handleOnChange}
         className=" rounded-lg shadow-md sm:placeholder:text-lg placeholder:text-sm  placeholder border my-4 px-4" style={{width:"604px",height:"180px"}} placeholder="Enter your details here..."


        /></label>
        <button  type="submit"
              aria-label="Send"
              className='w-28 sm:w-56	 h-8 sm:h-16 rounded-md font-normal text-l sm:text-2xl mt-20'
             style={{background: '#2DD3E3'}}>SUBMIT</button>
        </div>
      </form>
      <div className="flex w-56 justify-center items-center mx-20 mt-96 sm:my-48">
        <div className="flex flex-col rounded-lg w-96	justify-center items-start text-s sm:text-2xl" style={{background:"#EAF8F9", borderRadius:'35px'}}>
          <h1 className="ml-5 my-2 font-normal">Find US At:</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Nergiz Plaza</h1>
          <h1 className="ml-5 font-light	text-gray-500		">3rd Floor</h1>
          <h1 title="Street"  className="ml-5 font-light	text-gray-500		">Bakhtiyari Street 40m</h1>
          <h1 className="ml-5 font-light	text-gray-500		">Erbil, Iraq</h1>
          <h1 className="ml-5 font-light	text-gray-500		">44001</h1>
        </div>
      </div>
  </div>

</div>


)}
export default ContactUs
