import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { createRoot } from "react-dom/client";

jest.mock("react-dom/client", () => ({
    createRoot: jest.fn().mockReturnValue({
        render: jest.fn(),
    }),
}));

describe("bootstrap", () => {
    it("renders without crashing", () => {
        const root = document.createElement("div");
        root.id = "root";
        document.body.appendChild(root);

        require("./bootstrap");

        expect(document.getElementById("root")).toBeTruthy();
    });

    it("renders App component inside BrowserRouter", () => {
        const rootElement = document.createElement("div");
        document.body.appendChild(rootElement);
        const root = createRoot(rootElement);
    
        root.render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );
    
        expect(rootElement).toBeTruthy();
    });
});