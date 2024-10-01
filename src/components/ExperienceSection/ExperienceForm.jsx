import DateSelector from "../DateSelector";
import { Button } from "@mantine/core";

export default function ExperienceForm({ toggleForm }) {
  const handleSaveNewEntry = () => toggleForm();

  return (
    <>
      <ul>
        <li>
          <label htmlFor="jobTitleInput">Job Title</label>
          <input type="text" id="jobTitleInput" placeholder="Sales Analyst" />
        </li>
        <li>
          <label htmlFor="employerInput">Employer</label>
          <input type="text" id="employerInput" placeholder="ANZ Plus" />
        </li>
        <li className="dateSelectors">
          <DateSelector isProfessionalExperience={true} />
        </li>
        <li>
          <label htmlFor="jobDescription">
            Description (responsibilities, achievements, etc)
          </label>
          <textarea id="jobDescription" rows="8"></textarea>
        </li>
      </ul>

      <div className="button-group">
        <Button
          variant="outline"
          color="#00ccb8"
          className="primary-button"
          onClick={handleSaveNewEntry}
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
    </>
  );
}
