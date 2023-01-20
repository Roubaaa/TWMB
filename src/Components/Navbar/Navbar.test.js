import React from "react";
import { render, screen} from "@testing-library/react"; 
import Navbar from "./Navbar";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Dropdown from "./Dropdown";

// Title of the Website
test ('website title', async () => { 
  render(
    <MemoryRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}/>
        </Routes>
    </MemoryRouter>,
);
  expect(screen.getByText(/Healing/)).toBeInTheDocument()})

// Route Links
test('render Links', async () => {
  render(
    <MemoryRouter>
        <Routes>
        <Route path="/" element={<Navbar/>}/>
        </Routes>
    </MemoryRouter>,
);
const links =screen.getAllByRole("link");

expect(links[0].textContent).toEqual("Home");
expect(links[0].href).toContain("/");

expect(links[1].textContent).toEqual("Blogs");
expect(links[1].href).toContain("/blogs");

expect(links[3].textContent).toEqual("Contact Us");
expect(links[3].href).toContain("/contactUs");

expect(links[4].textContent).toEqual("Log In");
expect(links[4].href).toContain("/signIn");
}) 

// Dropdown test 

test ('dropdown tests', async () => { 
  render(
    <MemoryRouter>
        <Routes>
        <Route path="/" element={<Dropdown/>}/>
        </Routes>
    </MemoryRouter>,
);

const links =screen.getAllByRole("link");
 expect(links[0].textContent).toEqual("About");

});
  
