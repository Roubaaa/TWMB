import React ,{useState} from "react";
import "./ContactUs.css";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../Firebase"
// import { Link } from "react-router-dom";
import image from "./Group.png";
import image1 from "./Ellipse1.png";

const  ContactUs = ()=> {
    
  // const[name , setName] = useState("");
  const[email , setEmail] = useState({});
  // const[details , setDetails] = useState("");

    // __________this handling  email,name,details input___________________
  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
    // console.log('handleOnChange:', keyName);
    setEmail((prev) => {
      return { ...prev, [keyName]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, 'contactdata'), {
      ...email, // { "": muslim@gmail.com } => { "email": "muslim@gmail.com" }  key value shouldnot be empty so in email input we have name=email
    });
    // Clear the form
    setEmail({
      email: '',
    });
  };





  // const [userCollectionRef ,setuserCollectionRef] = useState();
  // const handleOnChange = (event) => {
  //   const {keyName} = event.target;
  //   const {value} = event.target;
  //   useEffect(() => {
  //     onSnapshot(collection(db, "movies"), (snapshot) => {
  //       snapshot.docChanges().forEach((docChange) => {
  //         if (docChange.type === "added") {
  //           setMoviesList((prevMoviesList) => [
  //             ...prevMoviesList,
  //             docChange.doc.data(),
  //           ]);
  //         } else if (docChange.type === "removed") {
  //           setMoviesList(
  //             moviesList.filter((movie) => movie.id !== docChange.doc.id)
  //           );
  //         }
  //       });
  //     });
  //   }, []);


  //   setuserCollectionRef((prev) => {
  //     // Copy the previous object (state) and only change the keyName that I want
  //     // prev is aka newMovieInput
  //     return { ...prev, [keyName]: value };
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // instead of saving new items to our state
  //   // we will create a post request to add items to our database
  //   await addDoc(collection(db, "contactdata"), {
  //     ...userCollectionRef,
  //   });
  //   // Clear the form
  //   setuserCollectionRef({
  //     name: "",
  //    email: "",
  //     details: "",
 
  //   });
  // };


  // const [loader , setLoader] = useState("false")

  // const handleSubmit = (e)=> {

  //   e.preventDefault();
  //   setLoader(true)
  //   db.collection('contactdata').add({
  //     name:'name',
  //     email:'email',
  //     details:'details',
  //   }).then(() => {
  //     alert('message has been submitted successfully');
  //     setLoader(false)
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //     setLoader(false)
  //   });

  //   setName("");
  //   setEmail("");
  //   setDetails("");
  // };

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
      <div className="space-y-5 mt-5">
        <div className="flex flex-row"><img src={image1} alt="" className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img src={image1} alt="" className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>
        <div className="flex flex-row"><img alt="" src={image1} className="w-5 h-5"/><h1 className="text-xl">I have a question about the service.</h1></div>


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
        <lable className="font-normal text-xl" >Full Name:</lable>
        <input type="text" className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border	" style={{width:"604px",height:"68px"}} placeholder="Enter your full name here..."
        //  value={userCollectionRef.name}
        // onChange={handleOnChange}
        // value={name}
        // onChange={(e)=>
        // setName(e.target.value)
        // }
        />

        <lable className="font-normal text-xl">Email:</lable>
        <input   className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border"
         type="email"
         name="email"
         value={email.email}
         onChange={handleOnChange}
         style={{width:"604px",height:"68px"}
        } placeholder="Enter your email address here..."
        
    
          // value={userCollectionRef.email}
          // onChange={handleOnChange}
          // value={email}
          // onChange={(e)=>
          // setEmail(e.target.value)
          // }
        />
        <lable className="font-normal text-xl">Details:</lable>
        <input type="text"   className="rounded-lg shadow-md placeholder:text-lg placeholder:px-5 border" style={{width:"604px",height:"180px"}} placeholder="Enter your details here..."
         
        //  value={userCollectionRef.details}
        //  onChange={handleOnChange}
        // // value={details}
        // onChange={(e)=>
        // setDetails(e.target.value)
        // }
        />
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