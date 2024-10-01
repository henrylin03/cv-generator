import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const toggleForm = () => setFormOpen(!formOpen);
  const addNewEducation = (newEntry) => setEntries([...entries, newEntry]);

  return (
    <article className="educationSection">
      {!entries.length || formOpen ? (
        <EducationForm
          toggleForm={toggleForm}
          addNewEducation={addNewEducation}
        />
      ) : (
        <PreviousEntries educationEntries={entries} toggleForm={toggleForm} />
      )}
    </article>
  );
}
