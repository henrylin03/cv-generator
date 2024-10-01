import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const toggleForm = () => setFormOpen(!formOpen);
  const addNewEducation = (newEntry) => {
    setEntries([...entries, newEntry]);
    console.log(entries);
  };

  return (
    <article className="educationSection">
      {formOpen ? (
        <EducationForm
          toggleForm={toggleForm}
          addNewEducation={addNewEducation}
        />
      ) : (
        <PreviousEntries toggleForm={toggleForm} />
      )}
    </article>
  );
}
