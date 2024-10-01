import DateSelector from "../DateSelector";
import { Button } from "@mantine/core";

export default function EducationForm({ toggleForm }) {
  const handleSaveNewEntry = () => toggleForm();
  
  return (
    <>
      <ul>
        <div className="grid">
          <li>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" placeholder="Bachelor of Commerce" />
          </li>
          <li>
            <label htmlFor="major">Major</label>
            <input type="text" id="major" placeholder="Finance/Accounting" />
          </li>
        </div>
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            placeholder="University of New South Wales"
          />
        </li>
        <li className="dateSelectors">
          <ul className="grid">
            <DateSelector />
          </ul>
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
