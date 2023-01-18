import React from "react";
import { screen ,render } from "@testing-library/react";
import About from "./About";

test("renders learn react link", async() => {
   render(
      <About title ="Healing" />
  );
const headingElement = screen.getAllByText(/healing/i);
  expect(headingElement).toBeInTheDocument;
});


it("title of the website", async() => {
    render(
       <About paragraph ="some cool one liner!" />
   );
  const headingElement = screen.getByText(/about/i);
   expect(headingElement).toBeInTheDocument();
  });