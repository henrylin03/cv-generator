import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import PreviousEntries from "./PreviousEntries";

export default function ExperienceSection() {
  const [formOpen, setFormOpen] = useState(false);
  const toggleForm = () => setFormOpen(!formOpen);

  return (
    <article className="experienceSection">
      {formOpen ? (
        <ExperienceForm toggleForm={toggleForm} />
      ) : (
        <PreviousEntries handleAddNewEntry={toggleForm} />
      )}
    </article>
  );
}
