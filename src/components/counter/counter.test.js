import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "./counter";

describe("Counter component", () => {
  it("should be rendered with 0 value", () => {
    render(<Counter></Counter>);
    // const element = screen.getByText("count is 0");
    const elementButton = screen.getByRole("button", { name: "count is 0" });
    expect(elementButton).toBeInTheDocument();
  });

  it("should increment the value when clicked", async () => {
    render(<Counter></Counter>);
    let elementButton = screen.getByRole("button", { name: "count is 0" });
    await elementButton.click();
    // const elementButton = screen.getByText("count is 1");
    elementButton = screen.getByRole("button", { name: "count is 1" });
    expect(elementButton).toBeInTheDocument();
  });
});
