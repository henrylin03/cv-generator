import { useState } from "react";
import DateSelector from "../DateSelector";
import { validateRequiredInput } from "../../helpers/formValidation";
import { Button } from "@mantine/core";

export default function EducationForm({
  addNewEducation,
  editEducation,
  selectedEntry,
  handleCancel,
}) {
  const [formValues, setFormValues] = useState(selectedEntry);

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

    if (!event.currentTarget.checkValidity()) {
      const requiredInputElements =
        event.currentTarget.querySelectorAll("input[required]");
      requiredInputElements.forEach((element) =>
        validateRequiredInput(element)
      );
      return;
    }

    const isNewEntry = () => selectedEntry.key === "";
    if (isNewEntry()) {
      const newKey = crypto.randomUUID();
      addNewEducation({ ...formValues, key: newKey });
    } else editEducation(formValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ul>
        <div className="grid">
          <li>
            <label htmlFor="degree">Degree*</label>
            <input
              type="text"
              id="degree"
              placeholder="Bachelor of Commerce"
              value={formValues.degree}
              onChange={handleNonDateInputChange}
              onBlur={handleInputBlur}
              required
            />
            <small className="errorMessage">
              Please enter your degree or certification
            </small>
          </li>
          <li>
            <label htmlFor="major">Major</label>
            <input
              type="text"
              id="major"
              placeholder="Finance"
              value={formValues.major}
              onChange={handleNonDateInputChange}
            />
          </li>
        </div>
        <li>
          <label htmlFor="school">School*</label>
          <input
            type="text"
            id="school"
            placeholder="University of New South Wales"
            value={formValues.school}
            onChange={handleNonDateInputChange}
            onBlur={handleInputBlur}
            required
          />
          <small className="errorMessage">
            Please enter your school, university, college or institution
          </small>
        </li>
        <li className="dateSelectors">
          <DateSelector
            formValues={formValues}
            setFormValues={setFormValues}
            selectedStartDate={selectedEntry.startDate || null}
            selectedEndDate={selectedEntry.endDate || null}
          />
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
