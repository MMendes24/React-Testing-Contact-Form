import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {

  render(<App />);

});

test('We can enter things into the input', () => {
  //first define get functions as variables for convenience
  render(<App />);
  const fnInput = screen.getByLabelText(/first name/i)
  const lnInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const mesInput = screen.getByLabelText(/message/i)

  //next we fire events
  fireEvent.change(fnInput, { target: { value: 'Lord'} })
  fireEvent.change(lnInput, { target: { value: 'Buggycode III'} })
  fireEvent.change(emailInput, { target: { value: 'lordbuggycode3@gmail.com'} })
  fireEvent.change(mesInput, { target: { value: 'I have arrived, peasants!'} })
})
