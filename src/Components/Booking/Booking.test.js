import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Booking from './Booking';

describe('Booking', () => {


    it('displays the correct message and text for step 1', () => {
        const { getByText } = render(<Booking />);
        getByText("let's match you with the right therapist");
        getByText("Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.");
      });


    //   for select part
  it('sets the initial selected option to null', () => {
    const { getByText } = render(<Booking />);
    expect(getByText('What type of coumseling are you looking for?')).toBeInTheDocument();
    expect(getByText('Individual counseling')).toBeInTheDocument();
    expect(getByText('Teen counseling (for my child)')).toBeInTheDocument();
    const selectOption = getByText('Individual counseling');
    expect(selectOption.getAttribute('checked')).toBeFalsy();
  });

// css part button
it('updates selected option when an option is clicked', () => {
    const { getByText } = render(<Booking />);
    const selectOption = getByText('Individual counseling');
    fireEvent.click(selectOption);
    expect(selectOption.classList.contains('bg-light-blue')).toBeTruthy();
});

// it('displays radio options and updates selected option', () => {
//     const { getByLabelText } = render(<Booking />);
  
//     // assert that the radio options are displayed
//     const option1 = getByLabelText("I prefer a male counselor");
//     const option2 = getByLabelText("I prefer a female counselor");
//     const option3 = getByLabelText("I  prefer an older counselor (45+)");
//     const option4 = getByLabelText("I prefer a non-religious counselor");
//     const option5 = getByLabelText("I prefer an older counselor (45+)");
//     expect(option1).toBeInTheDocument();
//     expect(option2).toBeInTheDocument();
//     expect(option3).toBeInTheDocument();
//     expect(option4).toBeInTheDocument();
//     expect(option5).toBeInTheDocument();
  
//     // simulate user interaction to select option 1
//     fireEvent.click(option1);
  
//     // assert that option 1 is selected
//     expect(option1.checked).toBe(true);
//     expect(option2.checked).toBe(false);
//     expect(option3.checked).toBe(false);
//     expect(option4.checked).toBe(false);
//     expect(option5.checked).toBe(false);
    

  
//     // assert that enteredData object is updated with the selected option
//     expect(enteredData["Are there any specific qualities that you'd like in a counselor?"]).toBe("I prefer a male counselor");
  
//     // simulate user interaction to select option 2
//     fireEvent.click(option2);
  
//     // assert that option 2 is selected
//     expect(option1.checked).toBe(false);
//     expect(option2.checked).toBe(true);
//     expect(option3.checked).toBe(false);
//     expect(option4.checked).toBe(false);
//     expect(option5.checked).toBe(false);
    
  
//     // assert that enteredData object is updated with the selected option
//     expect(enteredData["Are there any specific qualities that you'd like in a counselor?"]).toBe("I prefer a female counselor");

  

//   fireEvent.click(option3);
  
//   // assert that option 2 is selected
//   expect(option1.checked).toBe(false);
//   expect(option2.checked).toBe(false);
//   expect(option3.checked).toBe(true);
//   expect(option4.checked).toBe(false);
//   expect(option5.checked).toBe(false);
  

//   // assert that enteredData object is updated with the selected option
//   expect(enteredData["Are there any specific qualities that you'd like in a counselor?"]).toBe("I  prefer an older counselor (45+)");


//   fireEvent.click(option4);
  
//   // assert that option 2 is selected
//   expect(option1.checked).toBe(false);
//   expect(option2.checked).toBe(false);
//   expect(option3.checked).toBe(false);
//   expect(option4.checked).toBe(true);
//   expect(option5.checked).toBe(false);
  

//   // assert that enteredData object is updated with the selected option
//   expect(enteredData["Are there any specific qualities that you'd like in a counselor?"]).toBe("I prefer a non-religious counselor");


  

// fireEvent.click(option5);
  
//   // assert that option 2 is selected
//   expect(option1.checked).toBe(false);
//   expect(option2.checked).toBe(false);
//   expect(option3.checked).toBe(false);
//   expect(option4.checked).toBe(false);
//   expect(option5.checked).toBe(true);
  

//   // assert that enteredData object is updated with the selected option
//   expect(enteredData["Are there any specific qualities that you'd like in a counselor?"]).toBe("I prefer an older counselor (45+)");

// });

  


});
