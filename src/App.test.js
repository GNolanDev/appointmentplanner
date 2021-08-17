import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("With full UI loaded", () => {
  describe("On initial page load", () => {
    test("A name input should be visible", () => {
      render(
        <MemoryRouter>
          <App />)
        </MemoryRouter>
      );
      expect(screen.getByLabelText("Name:")).toBeTruthy();
    });
  });

  describe("On typing in a contact name", () => {
    test("The name typed in should be the value of the input and be visible", () => {
      const validname = "Joe Bloggs";
      render(
        <MemoryRouter>
          <App />)
        </MemoryRouter>
      );
      let input = screen.getByLabelText("Name:");
      userEvent.type(input, validname);
      expect(input).toHaveDisplayValue(validname);
      expect(input).toHaveValue(validname);
      userEvent.clear(input);
    });
  });

  describe("On submitting a contact", () => {
    test("The contact details should appear in the contact list", () => {
      const [validname, validphone, validemail] = [
        "Joe Bloggs",
        "0123456789",
        "joe@bloggs.com",
      ];
      render(
        <MemoryRouter>
          <App />)
        </MemoryRouter>
      );
      userEvent.type(screen.getByLabelText("Name:"), validname);
      userEvent.type(screen.getByLabelText("Phone:"), validphone);
      userEvent.type(screen.getByLabelText("Email:"), validemail);
      userEvent.click(screen.getByText("Submit"));

      // input should be cleared & contact added to list
      expect(screen.getByLabelText("Name:")).not.toHaveValue(validname);
      expect(screen.getByText(validname)).toBeInTheDocument();
    });
  });
});
