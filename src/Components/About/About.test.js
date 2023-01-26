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



test ('Titles', async () => { 
  render( <About/>)

  expect(screen.getByText(/HEALING!/)).toBeInTheDocument() })

  test ('About', async () => { 
    render( <About/>)
  expect(screen.getByText("some cool one liner!")).toBeInTheDocument()})

  
  test ('Founder', async () => { 
    render( <About/>)
  expect(screen.getByText("Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world s therapists shared their research and ideas. We launched the Beginner s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!")).toBeInTheDocument()})

  test('image of the founder', async()=> {
 render (<About/>)
 expect(screen.getByAltText("finder")).toBeInTheDocument() })
