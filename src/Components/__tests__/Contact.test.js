import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("contact heading should be" ,() => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
   expect(heading).toBeInTheDocument();

})