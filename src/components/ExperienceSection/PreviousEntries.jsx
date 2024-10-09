import { Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import { dateToMonthYearSummarised } from "../../helpers/dates";
import ChangeEntryButtons from "../ChangeEntryButtons";

export default function PreviousEntries({
  experienceEntries,
  deleteExperience,
  findPreviousEntry,
  handleAddAnotherExperience,
  openForm,
}) {
  const displayEndDate = (endDate) => {
    if (!endDate) return;
    if (endDate === "Present") return "Present";
    return dateToMonthYearSummarised(endDate);
  };

  const previousEntries = experienceEntries.map((entry) => {
    return (
      <li className="previousEntry" key={entry.key}>
        <div className="summary">
          <p className="jobTitle">{entry.jobTitle}</p>
          <p className="employer">{entry.employer}</p>
          <p className="dates">
            {entry.startDate &&
              `${dateToMonthYearSummarised(entry.startDate)} - `}
            {displayEndDate(entry.endDate)}
          </p>
        </div>

        <ChangeEntryButtons
          openForm={openForm}
          deleteEntry={deleteExperience}
          entryKey={entry.key}
          findPreviousEntry={findPreviousEntry}
        />
      </li>
    );
  });

  return (
    <>
      <ul className="previousEntries">{previousEntries}</ul>

      <Button
        leftSection={<IconCirclePlus />}
        color="#00ccb8"
        variant="outline"
        size="md"
        className="addAnotherButton"
        onClick={handleAddAnotherExperience}
      >
        Add another experience
      </Button>
    </>
  );
}
