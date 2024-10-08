import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import PreviousEntries from "./PreviousEntries";

export default function ExperienceSection({ setOpenedAccordionValue }) {
  const [formOpen, setFormOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const addNewExperience = (newEntry) => setEntries([...entries, newEntry]);
  const handleCancel = () =>
    entries.length > 0 ? closeForm() : setOpenedAccordionValue("Education");

  return (
    <article className="experienceSection">
      {!entries.length || formOpen ? (
        <ExperienceForm
          closeForm={closeForm}
          addNewExperience={addNewExperience}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries experienceEntries={entries} openForm={openForm} />
      )}
    </article>
  );
}
