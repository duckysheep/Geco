import { render, screen } from "@testing-library/react";
// import App from "./AppSession10";
import App from "./AppSession11";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
