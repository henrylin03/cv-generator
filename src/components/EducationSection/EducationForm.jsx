import { useState } from "react";
import DateSelector from "../DateSelector";
import { Button } from "@mantine/core";

export default function EducationForm({ toggleForm, addNewEducation }) {
  const [formValues, setFormValues] = useState({
    degree: "",
    major: "",
    school: "",
    startDate: "",
    endDate: "",
  });

  const handleNonDateInputChange = (event) =>
    setFormValues({
      ...formValues,
      [event.currentTarget.id]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    addNewEducation(formValues);
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <div className="grid">
          <li>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              placeholder="Bachelor of Commerce"
              value={formValues.degree}
              onChange={handleNonDateInputChange}
            />
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
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            placeholder="University of New South Wales"
            value={formValues.school}
            onChange={handleNonDateInputChange}
          />
        </li>
        <li className="dateSelectors">
          <DateSelector formValues={formValues} setFormValues={setFormValues} />
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
          onClick={toggleForm}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
