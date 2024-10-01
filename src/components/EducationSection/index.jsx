import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection() {
  const [formOpen, setFormOpen] = useState(false);
  const toggleForm = () => setFormOpen(!formOpen);

  return (
    <article className="educationSection">
      {formOpen ? (
        <EducationForm toggleForm={toggleForm} />
      ) : (
        <PreviousEntries handleAddNewEntry={toggleForm} />
      )}
    </article>
  );
}
