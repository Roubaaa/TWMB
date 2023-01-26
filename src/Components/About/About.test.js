import React from "react";
import { render, screen} from "@testing-library/react"; 
import About from "./About";


test ('Titles', async () => { 
  render( <About/>)

  expect(screen.getByText(/HEALING!/)).toBeInTheDocument() })

  test ('About', async () => { 
    render( <About/>)
  expect(screen.getByText("some cool one liner!")).toBeInTheDocument()})

  
