import React from "react";
import { render, screen} from "@testing-library/react"; 
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog";


test ('Headers', async () => { 
  render(<MemoryRouter>
    <Routes>
        <Route path="/" element={<Blog/>}/>
    </Routes>
</MemoryRouter>,)

  expect(screen.getByText(/Mental Health and Technology/)).toBeInTheDocument()
  expect(screen.getByText(/The need for taking care of our emotional health/)).toBeInTheDocument()})

test ('Newsletter', async () => { 
 render( <MemoryRouter>
  <Routes>
      <Route path="/" element={<Blog/>}/>
  </Routes>
</MemoryRouter>,)

 expect(screen.getByText(/A weekly, ad-free Blog that helps you stay in the know/)).toBeInTheDocument()
 expect(screen.getByText(/Sign up for The Healing blog/)).toBeInTheDocument()
})

test ('email', async () => { 
    render( <MemoryRouter>
      <Routes>
          <Route path="/" element={<Blog/>}/>
      </Routes>
  </MemoryRouter>,)
  
    expect(screen.getByPlaceholderText(/Enter Your e-mail/)).toBeInTheDocument()

})
  