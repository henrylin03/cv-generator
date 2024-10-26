import { useState } from "react";
import { validateRequiredInput } from "../helpers";

export default function PersonalDetailsSection({
  personalDetails,
  setPersonalDetails,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  // HANDLERS
  const validateEmail = (event) => {
    const emailInput = event.currentTarget;
    const containerElement = emailInput.parentElement;

    validateRequiredInput(emailInput);
    if (emailInput.checkValidity()) containerElement.classList.remove("error");
    else containerElement.classList.add("error");
  };

  const validatePhoneNumber = (event) => {
    const phoneNumberElement = event.currentTarget;
    const phoneInput = phoneNumberElement.value;
    const lastInput = phoneInput.slice(-1);

    if (lastInput === " " || lastInput === "." || isNaN(phoneInput)) return;
    setPhoneNumber(phoneInput);
    validateRequiredInput(phoneNumberElement);
  };

  const handleChange = (event) => {
    const inputElement = event.currentTarget;

    if (inputElement.type === "email") validateEmail(event);
    else if (inputElement.type === "tel") validatePhoneNumber(event);
    else validateRequiredInput(inputElement);

    setPersonalDetails({
      ...personalDetails,
      [inputElement.id]: inputElement.value,
    });
  };

  return (
    <form className="personalDetails">
      <ul>
        <li>
          <label htmlFor="name">Full name*</label>
          <input
            type="text"
            id="name"
            placeholder="Jane Smith"
            required
            onBlur={(event) => validateRequiredInput(event.currentTarget)}
            onChange={handleChange}
          />
          <small className="errorMessage">Please enter your full name</small>
        </li>
        <div className="grid">
          <li>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="jane.smith@gmail.com"
              required
              onBlur={validateEmail}
              onChange={handleChange}
            />
            <small className="errorMessage">
              Please enter a valid email address
            </small>
          </li>
          <li>
            <label htmlFor="phone">Phone number*</label>
            <input
              type="tel"
              inputMode="numeric"
              id="phone"
              placeholder="0412345678"
              required
              value={phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={handleChange}
            />
            <small className="errorMessage">
              Please enter a valid contact number
            </small>
          </li>
        </div>
      </ul>
    </form>
  );
}
