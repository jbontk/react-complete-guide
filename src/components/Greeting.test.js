import Greeting from './Greeting';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // ... Nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders It\'s good to see you', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // NO-OP

    // Assert
    const goodToSeeYouElement = screen.getByText(/It's good to see you/i);
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test('renders Changed when clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByText(/Change text/i);
    buttonElement.click();

    // Assert
    const changedElement = screen.getByText(/Changed!/i);
    expect(changedElement).toBeInTheDocument();
  });

  test('renders Changed when button is clicked (alternative using getByRole)', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText(/Changed!/i);
    expect(changedElement).toBeInTheDocument();
  });

  test('does NOT render Good to See You when button is clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const shouldNotBeThere = screen.queryByText(/It's good to see you/i);
    expect(shouldNotBeThere).toBeNull();
  });
});


