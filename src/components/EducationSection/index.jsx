import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

export default function EducationSection({
  setOpenedAccordionValue,
  educationEntries,
  setEducationEntries,
}) {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const addNewEducation = (newEntry) =>
    setEducationEntries([...educationEntries, newEntry]);
  const handleCancel = () =>
    educationEntries.length > 0
      ? closeForm()
      : setOpenedAccordionValue("Experience");

  return (
    <article className="educationSection">
      {!educationEntries.length || formOpen ? (
        <EducationForm
          closeForm={closeForm}
          addNewEducation={addNewEducation}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries
          educationEntries={educationEntries}
          openForm={openForm}
        />
      )}
    </article>
  );
}
