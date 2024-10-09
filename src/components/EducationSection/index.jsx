import { useState } from "react";
import EducationForm from "./EducationForm";
import PreviousEntries from "./PreviousEntries";

const blankEducationEntry = {
  key: "",
  degree: "",
  major: "",
  school: "",
  startDate: "",
  endDate: "",
};

export default function EducationSection({
  setOpenedAccordionValue,
  educationEntries,
  setEducationEntries,
}) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(blankEducationEntry);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  // BUTTON EVENT HANDLERS
  const handleAddAnotherEducation = () => {
    setSelectedEntry(blankEducationEntry);
    openForm();
  };

  const handleCancel = () =>
    educationEntries.length > 0
      ? closeForm()
      : setOpenedAccordionValue("Experience");

  // OTHER FUNCTIONS
  const addNewEducation = (newEntry) => {
    setEducationEntries([...educationEntries, newEntry]);
    closeForm();
  };

  const deleteEducation = (selectedEntryKey) => {
    setEducationEntries(
      educationEntries.filter((entry) => entry.key !== selectedEntryKey)
    );
    setSelectedEntry(blankEducationEntry);
    closeForm();
  };

  const editEducation = (editedEntry) => {
    const entriesWithoutEditedEntry = educationEntries.filter(
      (entry) => entry.key !== editedEntry.key
    );
    setEducationEntries([...entriesWithoutEditedEntry, editedEntry]);
    closeForm();
  };

  const findPreviousEntry = (entryKey) => {
    const educationEntry =
      educationEntries.find((entry) => entry.key === entryKey) ||
      blankEducationEntry;
    setSelectedEntry(educationEntry);
  };

  return (
    <article className="educationSection">
      {!educationEntries.length || formOpen ? (
        <EducationForm
          addNewEducation={addNewEducation}
          editEducation={editEducation}
          selectedEntry={selectedEntry}
          handleCancel={handleCancel}
        />
      ) : (
        <PreviousEntries
          educationEntries={educationEntries}
          deleteEducation={deleteEducation}
          findPreviousEntry={findPreviousEntry}
          handleAddAnotherEducation={handleAddAnotherEducation}
          openForm={openForm}
        />
      )}
    </article>
  );
}
