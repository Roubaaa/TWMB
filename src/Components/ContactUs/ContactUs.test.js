import React from "react";
import { screen ,render } from "@testing-library/react";
import ContactUs from "./ContactUs";

test("renders learn react link", async() => {
   render(
      <ContactUs title ="TWMB" />
  );
const headingElement = screen.getByText(/twmb/i);
  expect(headingElement()).toBeInTheDocument();
});
