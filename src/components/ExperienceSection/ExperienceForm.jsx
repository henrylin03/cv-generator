import { useState } from "react";
import DateSelector from "../DateSelector";
import { validateRequiredInput } from "../../helpers/formValidation";
import { Button } from "@mantine/core";

export default function ExperienceForm({
  closeForm,
  addNewExperience,
  handleCancel,
}) {
  const [formValues, setFormValues] = useState({
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });

  // HANDLERS
  const handleInputBlur = (event) => validateRequiredInput(event.currentTarget);

  const handleNonDateInputChange = (event) => {
    validateRequiredInput(event.currentTarget);
    setFormValues({
      ...formValues,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.currentTarget.checkValidity()) {
      const newKey = crypto.randomUUID();
      addNewExperience({ ...formValues, key: newKey });
      closeForm();
    } else {
      const requiredInputElements =
        event.currentTarget.querySelectorAll("input[required]");
      requiredInputElements.forEach((element) =>
        validateRequiredInput(element)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ul>
        <li>
          <label htmlFor="jobTitle">Job Title*</label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Sales Analyst"
            value={formValues.jobTitle}
            onChange={handleNonDateInputChange}
            onBlur={handleInputBlur}
            required
          />
          <small className="errorMessage">
            Please enter your position title
          </small>
        </li>
        <li>
          <label htmlFor="employer">Employer*</label>
          <input
            type="text"
            id="employer"
            placeholder="ANZ Plus"
            value={formValues.employer}
            onChange={handleNonDateInputChange}
            onBlur={handleInputBlur}
            required
          />
          <small className="errorMessage">
            Please enter your employer&apos;s name
          </small>
        </li>
        <li className="dateSelectors">
          <DateSelector
            isProfessionalExperience={true}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </li>
        <li>
          <label htmlFor="jobDescription">
            Description (responsibilities, achievements, etc)
          </label>
          <textarea
            id="jobDescription"
            rows="8"
            value={formValues.jobDescription}
            onChange={handleNonDateInputChange}
            onBlur={handleInputBlur}
          ></textarea>
        </li>
      </ul>

      <div className="button-group">
        <Button
          variant="outline"
          color="#00ccb8"
          className="primary-button"
          type="submit"
        >
          Save
        </Button>
        <Button
          variant="outline"
          color="#8490b3"
          className="destructive-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
