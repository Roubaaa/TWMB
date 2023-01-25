import React from "react";
import { render, screen} from "@testing-library/react"; 
import Footer from "./Footer";
import { MemoryRouter, Route, Routes } from "react-router-dom";


// Route tests

test('render Links', async () => {
    render(
      <MemoryRouter>
          <Routes>
          <Route path="/" element={<Footer/>}/>
          </Routes>
      </MemoryRouter>,
  );
  const links =screen.getAllByRole("link");
  
  expect(links[0].textContent).toEqual("Home");
  expect(links[0].href).toContain("/");
  
  expect(links[1].textContent).toEqual("Blogs");
  expect(links[1].href).toContain("/blogs");
  
  expect(links[2].textContent).toEqual("About");
  expect(links[2].href).toContain("/about");
  
  expect(links[3].textContent).toEqual("Contact Us");
  expect(links[3].href).toContain("/contactUs");
  }) 