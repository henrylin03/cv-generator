import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import PreviousEntries from "./PreviousEntries";

export default function ExperienceSection({
  setOpenedAccordionValue,
  experienceEntries,
  setExperienceEntries,
}) {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const addNewExperience = (newEntry) =>
    setExperienceEntries([...experienceEntries, newEntry]);
  const handleCancel = () =>
    experienceEntries.length > 0
      ? closeForm()
      : setOpenedAccordionValue("Education");

  return (
    <article className="experienceSection">
      {!experienceEntries.length || formOpen ? (
        <ExperienceForm
          closeForm={closeForm}
          addNewExperience={addNewExperience}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries
          experienceEntries={experienceEntries}
          openForm={openForm}
        />
      )}
    </article>
  );
}
