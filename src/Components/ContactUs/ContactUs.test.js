import React from "react";
import { screen ,render } from "@testing-library/react";
import ContactUs from "./ContactUs";



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