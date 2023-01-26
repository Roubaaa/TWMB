import React from "react";
import { screen ,render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderer from "react-test-renderer";
import ContactUs from "./ContactUs";




describe("contact component", ()=>{
  //snapshot

it ("render first header",()=>{
  const fa = renderer.create(<ContactUs title ={"SEND US YOUR REQUEST"}/>).toJSON();
  expect(fa).toMatchSnapshot();
  
})



it ("second header",()=>{
  const fa = renderer.create(<ContactUs title ={"Do you have a question"}/>).toJSON();
  expect(fa).toMatchSnapshot();
  
})

it ("radio button title",()=>{
  const fa = renderer.create(<ContactUs title ={"Type of contact"}/>).toJSON();
  expect(fa).toMatchSnapshot();
  
})

it ("contact information",()=>{
  const fa = renderer.create(<ContactUs title ={"Find US At:"}/>).toJSON();
  expect(fa).toMatchSnapshot();
  
})

//get By Text

it("address line 1", async() => {
  render(
     <ContactUs title ="Nergiz Plaza" />
 );
const headingElement = screen.getByText(/Nergiz Plaza/i);
 expect(headingElement).toBeInTheDocument();
});


//find by
it("address line 2", async() => {
  render(
     <ContactUs title ="3rd Floor" />
 );
const headingElement = await screen.findByText(/3rd Floor/i);
 expect(headingElement).toBeInTheDocument();
});

//query by
it("address line 2", async() => {
  render(
     <ContactUs title ="3rd Floor" />
 );
const headingElement =  screen.queryByText(/call me /i);
 expect(headingElement).not.toBeInTheDocument();
});


it("City/Country", async() => {
  render(
     <ContactUs title ="Erbil, Iraq" />
 );
const headingElement = screen.getByText(/Erbil, Iraq/i);
 expect(headingElement).toBeInTheDocument();
});

//get by role
it("Zip code", async() => {
  render(
     <ContactUs title ="44001" />
 );
const headingElement = screen.getByRole("heading", {name: "44001"});
 expect(headingElement).toBeInTheDocument();
});

//show error when all fields are not entered
it("should show error message when all the fields are not entered", () => {
  render(<ContactUs />);
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
});
});