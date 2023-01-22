import React from "react";
import { render, screen} from "@testing-library/react"; 
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Career from "./Career";

test ('Headers', async () => { 
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Career/>}/>
            </Routes>
        </MemoryRouter>,
    );
  expect(screen.getByText(/CAREERS AT HEALING/)).toBeInTheDocument()})

  test ('Titles', async () => { 
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Career/>}/>
            </Routes>
        </MemoryRouter>,
    );
  expect(screen.getByText(/CURRENT OPEN POSITIONS/)).toBeInTheDocument()
  expect(screen.getByText(/OUR HIRING PHILOSOPHY/)).toBeInTheDocument()})
