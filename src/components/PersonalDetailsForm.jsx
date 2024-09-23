import { Paper, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

function validateAllEntries() {
  const fieldElements = document.querySelectorAll("form input");
  fieldElements.forEach((field) => validateEntry(field));
}

function validateEntry(inputElement) {
  const containerElement = inputElement.parentNode;
  if (inputElement.checkValidity()) containerElement.classList.remove("error");
  else containerElement.classList.add("error");
}

export default function PersonalDetailsForm() {
  return (
    <>
      <h2>Personal Details</h2>

      <form>
        <Paper shadow="md" radius="lg" p={48} w={800} maw="60vw">
          <ul>
            <li className="fieldContainer">
              <label htmlFor="firstName">First name*</label>
              <input
                type="text"
                id="firstName"
                required
                placeholder="Jane"
                onBlur={(e) => validateEntry(e.target)}
                onChange={(e) => validateEntry(e.target)}
              />
              <small className="error-message">
                Please enter your first name
              </small>
            </li>
            <li className="fieldContainer">
              <label htmlFor="lastName">Last name*</label>
              <input
                type="text"
                id="lastName"
                required
                placeholder="Smith"
                onBlur={(e) => validateEntry(e.target)}
                onChange={(e) => validateEntry(e.target)}
              />
              <small className="error-message">
                Please enter your last name
              </small>
            </li>
            <li className="fieldContainer">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                required
                placeholder="jane.smith@gmail.com"
                onBlur={(e) => validateEntry(e.target)}
                onChange={(e) => validateEntry(e.target)}
              />
              <small className="error-message">
                Please enter a valid email address
              </small>
            </li>
            <li className="fieldContainer">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" placeholder="0412345678" />
            </li>
          </ul>
        </Paper>

        <Button
          variant="filled"
          color="teal"
          size="md"
          radius="md"
          rightSection={<IconArrowRight size={24} />}
          onClick={validateAllEntries}
        >
          Next step
        </Button>
      </form>
    </>
  );
}

//TODO: when "next step" button is pressed, localStorage will store it. then we delete it when the user closes (then use sessionStorage??)
