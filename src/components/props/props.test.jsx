import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Props } from "./props";
describe("Sample component", () => {
  test("The props value is rendered in the screen", () => {
    render(<Props text="Texto de prueba" />);
    const textElement = screen.getByText(/Texto de prueba/i);
    expect(textElement).toBeInTheDocument();
  });
});
