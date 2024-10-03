import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection({ setOpenedAccordionValue }) {
  const [formOpen, setFormOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const addNewEducation = (newEntry) => setEntries([...entries, newEntry]);
  const handleCancel = () =>
    entries.length > 0 ? closeForm() : setOpenedAccordionValue("Experience");

  return (
    <article className="educationSection">
      {!entries.length || formOpen ? (
        <EducationForm
          closeForm={closeForm}
          addNewEducation={addNewEducation}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries educationEntries={entries} openForm={openForm} />
      )}
    </article>
  );
}
