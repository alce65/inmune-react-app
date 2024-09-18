import { render, screen, waitFor, fireEvent } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Async } from "./async";

describe("first", () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ title: "sample data" }),
    });
  });

  test("The component render the obtained data", async () => {
    render(<Async />);
    const buttonElement = screen.getByText(/Obtener datos/i);
    fireEvent.click(buttonElement);
    //   await waitFor(() => {
    //     const textElement = screen.getByText(/sample data/i);
    //     expect(textElement).toBeInTheDocument();
    //   });

    const textElement = await screen.findByText(/sample data/i);
    expect(textElement).toBeInTheDocument();
  });
});
