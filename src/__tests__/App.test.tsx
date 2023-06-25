import { render,fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";


test("測試 App.tsx 頁面是否正常運作", async () => {
  render(<App />);

  expect(true).toBeTruthy();
});

test('renders right amount of input elements', () => {
  // Render the App component
  render(<App />);

  // Find the input elements on the screen
  const inputElements = screen.getAllByRole('textbox');

  // Assert that there are two input elements
  expect(inputElements.length).toBe(3);
});

test('renders heading with text: Sign up now', () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Use getByText to select the heading element
  const headingElement = getByText('Sign up now');

  // Assert that the heading element is present
  expect(headingElement).toBeInTheDocument();
});

test('typing in input elements changes their values', () => {
  // Render the App component
  render(<App />);

  // Define an array of input data with label and value
  const inputData = [
    { label: 'Email', value: 'test@example.com' },
    { label: 'Country', value: 'USA' },
    { label:'Phone Number',value:'12345'}
    // Add more input data objects as needed
  ];

  // Iterate through the input data array
  inputData.forEach(({ label, value }) => {
    // Find the input element by its label
    const inputElement = screen.getByRole('textbox',{name:label});

    // Simulate typing a new value in the input element
    fireEvent.change(inputElement, { target: { value } });

    // Assert that the input element's value has changed
    expect(inputElement).toHaveValue(value);
  });
});

test('input elements have correct placeholders', () => {
  // Render the App component
  render(<App />);

  // Define an array of input data with label and placeholder
  const inputData = [
    { label: 'Email', placeholder: 'Enter your email' },
    { label: 'Country', placeholder: 'Enter your country' },
    { label: 'Phone Number', placeholder: 'Enter your phone number' },
    // Add more input data objects as needed
  ];

  // Iterate through the input data array
  inputData.forEach(({ label, placeholder }) => {
    // Find the input element by its role and name attribute
    const inputElement = screen.getByRole('textbox', { name: label });

    // Assert that the input element has the correct placeholder
    expect(inputElement).toHaveAttribute('placeholder', placeholder);
  });
});
