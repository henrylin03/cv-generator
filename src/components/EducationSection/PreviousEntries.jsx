import { Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import { dateToMonthYearSummarised } from "../../helpers/dates";
import ChangeEntryButtons from "../ChangeEntryButtons";

export default function PreviousEntries({
  educationEntries,
  deleteEducation,
  findPreviousEntry,
  handleAddAnotherEducation,
  openForm,
}) {
  const previousEntries = educationEntries.map((entry) => (
    <li className="previousEntry" key={entry.key}>
      <div className="summary">
        <p className="degree">
          {entry.degree}
          <span className="major">{entry.major && ` (${entry.major})`}</span>
        </p>
        <p className="school">{entry.school}</p>
        <p className="dates">
          {entry.startDate &&
            `${dateToMonthYearSummarised(entry.startDate)} - `}
          {entry.endDate && dateToMonthYearSummarised(entry.endDate)}
        </p>
      </div>

      <ChangeEntryButtons
        openForm={openForm}
        deleteEntry={deleteEducation}
        entryKey={entry.key}
        findPreviousEntry={findPreviousEntry}
      />
    </li>
  ));

  return (
    <>
      <ul className="previousEntries">{previousEntries}</ul>

      <Button
        leftSection={<IconCirclePlus />}
        color="#00ccb8"
        variant="outline"
        size="md"
        className="addAnotherButton"
        onClick={handleAddAnotherEducation}
      >
        Add another education
      </Button>
    </>
  );
}
