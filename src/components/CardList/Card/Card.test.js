import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./";

describe("<Card/>test", () => {
  const props = {
    name: "test name",
    image: "http://fake image",
    id: 0,
    handleClick: jest.fn(),
  };

  it("should reder properly", () => {
    render(<Card {...props} />);
    //Act
    const image = screen.getByAltText("test name");
    const h2 = screen.getByText("test name");
    //Assert
    expect(image).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  });
  it("Should handle click event properly", () => {
    render(<Card {...props} />);
    const card = screen.getByTestId("card");
    fireEvent.click(card);
    expect(props.handleClick).toHaveBeenCalled();
  });
});
