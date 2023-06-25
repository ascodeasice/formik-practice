import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";


test("測試 App.tsx 頁面是否正常運作", async () => {
  render(<App />);

  expect(true).toBeTruthy();
});

test('renders TextField component', () => {
  // Render the TextField component
  const { getByRole } = render(<App />);

  // Use the getByRole method to select the TextField component
  const textFieldElement = getByRole('textbox');

  // Assert that the TextField component is present
  expect(textFieldElement).toBeInTheDocument();
});

test('renders heading with text: Sign up now', () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Use getByText to select the heading element
  const headingElement = getByText('Sign up now');

  // Assert that the heading element is present
  expect(headingElement).toBeInTheDocument();
});

test('typing into input with name "Email" updates its value', () => {
  // Render the App component
  const { getByLabelText } = render(<App />);

  // Select the input element by its associated label text
  const emailInput = getByLabelText('Email');

  // Simulate typing into the input field
  const typedText = 'test@example.com';
  fireEvent.change(emailInput, { target: { value: typedText } });

  // Assert that the input value has been updated correctly
  expect(emailInput).toHaveValue(typedText);
});