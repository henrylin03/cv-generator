import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection({ setOpenedAccordionValue }) {
  const [formOpen, setFormOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const toggleForm = () => setFormOpen(!formOpen);
  const addNewEducation = (newEntry) => setEntries([...entries, newEntry]);
  const handleCancel = () => entries.length > 0 ? toggleForm() : setOpenedAccordionValue("Experience")

  return (
    <article className="educationSection">
      {!entries.length || formOpen ? (
        <EducationForm
          toggleForm={toggleForm}
          addNewEducation={addNewEducation}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries educationEntries={entries} toggleForm={toggleForm} />
      )}
    </article>
  );
}
