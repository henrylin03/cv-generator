import { ActionIcon, Button } from "@mantine/core";
import { IconPencil, IconTrashX, IconCirclePlus } from "@tabler/icons-react";
import { dateToMonthYearSummarised } from "../../helpers/dates";

const ChangeEntryButtons = () => (
  <div className="icons">
    <ActionIcon variant="transparent" color="gray" size="lg" aria-label="Edit">
      <IconPencil style={{ width: "70%", height: "70%" }} />
    </ActionIcon>
    <ActionIcon
      variant="transparent"
      color="gray"
      size="lg"
      aria-label="Delete"
    >
      <IconTrashX style={{ width: "70%", height: "70%" }} />
    </ActionIcon>
  </div>
);

export default function PreviousEntries({ educationEntries, toggleForm }) {
  const previousEntries = educationEntries.map((entry) => {
    return (
      <li className="previousEntry" key={entry.key}>
        <div className="summary">
          <p className="degree">
            {entry.degree}
            <span className="major">{entry.major && ` (${entry.major})`}</span>
          </p>
          <p className="school">{entry.school}</p>
          <p className="dates">
            {entry.startDate && dateToMonthYearSummarised(entry.startDate)}
            {entry.endDate && ` - ${dateToMonthYearSummarised(entry.endDate)}`}
          </p>
        </div>
        <ChangeEntryButtons />
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
        onClick={toggleForm}
      >
        Add another education
      </Button>
    </>
  );
}
