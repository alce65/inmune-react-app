import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Effect } from "./effect";

describe("", () => {
  beforeEach(() => {
    const mockData = { title: "sample data" };
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });
  });
  test("The component render the obtained data", async () => {
    render(<Effect />);
    const textElement = await screen.findByText(/sample data/i);
    expect(textElement).toBeInTheDocument();
  });

  test("The component render the obtained data", async () => {
    render(<Effect />);
    // await waitFor(() => {
    //   const textElement = screen.getByText(/sample data/i);
    //   expect(textElement).toBeInTheDocument();
    // });

    const textElement = await screen.findByText(/sample data/i);
    expect(textElement).toBeInTheDocument();
  });
});
