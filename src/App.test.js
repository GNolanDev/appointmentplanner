import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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
});
