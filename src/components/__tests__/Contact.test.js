import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe use to grouping the test cases
describe("Contact Us rendering test case", ()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
})

// we can also use the it instead of test coz both are same
describe("Contact us html tags exist or not test caes",()=>{
    it("Should load button inside contact us component",()=>{
        render(<Contact/>);
        const heading = screen.getByText("Submit");
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load input inside contact us component",()=>{
        render(<Contact/>);
        const heading = screen.getByPlaceholderText("Name");
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load 2 input boxes inside contact us component",()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
})



