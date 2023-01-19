import React from "react";
import { screen ,render } from "@testing-library/react";
import ContactUs from "./ContactUs";
import userEvent from '@testing-library/user-event';


//get By Text

it("first header", async() => {
  render(
     <ContactUs title ="SEND US YOUR REQUEST" />
 );
const headingElement = screen.getByText(/SEND US YOUR REQUEST/i);
 expect(headingElement).toBeInTheDocument();
});

it("second header", async() => {
  render(
     <ContactUs title ="Do you have a question" />
 );
const headingElement = screen.getByText(/Do you have a question/i);
 expect(headingElement).toBeInTheDocument();
});

it("title of the radio buttons", async() => {
  render(
     <ContactUs title ="Type of contact" />
 );
const headingElement = screen.getByText(/Type of contact/i);
 expect(headingElement).toBeInTheDocument();
});

it("title of the contact", async() => {
  render(
     <ContactUs title ="Find US At:" />
 );
const headingElement = screen.getByText(/Find US At:/i);
 expect(headingElement).toBeInTheDocument();
});

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

//get by title
it("address line 3", async() => {
  render(
     <ContactUs title ="Bakhtiyari Street 40m" />
 );


const headingElement = screen.getByTitle("Street");
 expect(headingElement).toBeInTheDocument();
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

