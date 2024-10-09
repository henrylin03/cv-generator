import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import PreviousEntries from "./PreviousEntries";

const blankExperienceEntry = {
  key: "",
  jobTitle: "",
  employer: "",
  startDate: "",
  endDate: "",
  isPresent: false,
  jobDescription: "",
};

export default function ExperienceSection({
  setOpenedAccordionValue,
  experienceEntries,
  setExperienceEntries,
}) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(blankExperienceEntry);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  // BUTTON EVENT HANDLERS
  const handleAddAnotherExperience = () => {
    setSelectedEntry(blankExperienceEntry);
    openForm();
  };

  const handleCancel = () =>
    experienceEntries.length > 0
      ? closeForm()
      : setOpenedAccordionValue("Education");

  // OTHER FUNCTIONS
  const addNewExperience = (newEntry) => {
    setExperienceEntries([...experienceEntries, newEntry]);
    closeForm();
  };

  const deleteExperience = (selectedEntryKey) => {
    setExperienceEntries(
      experienceEntries.filter((entry) => entry.key !== selectedEntryKey)
    );
    setSelectedEntry(blankExperienceEntry);
    closeForm();
  };

  const editExperience = (editedEntry) => {
    const entriesWithoutEditedEntry = experienceEntries.filter(
      (entry) => entry.key !== editedEntry.key
    );
    setExperienceEntries([...entriesWithoutEditedEntry, editedEntry]);
    closeForm();
  };

  const findPreviousEntry = (entryKey) => {
    const experienceEntry =
      experienceEntries.find((entry) => entry.key === entryKey) ||
      blankExperienceEntry;
    setSelectedEntry(experienceEntry);
  };

  return (
    <article className="experienceSection">
      {!experienceEntries.length || formOpen ? (
        <ExperienceForm
          addNewExperience={addNewExperience}
          editExperience={editExperience}
          selectedEntry={selectedEntry}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries
          experienceEntries={experienceEntries}
          deleteExperience={deleteExperience}
          findPreviousEntry={findPreviousEntry}
          handleAddAnotherExperience={handleAddAnotherExperience}
          openForm={openForm}
        />
      )}
    </article>
  );
}
