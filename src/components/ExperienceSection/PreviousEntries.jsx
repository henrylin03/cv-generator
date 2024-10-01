import { ActionIcon, Button } from "@mantine/core";
import { IconPencil, IconTrashX, IconCirclePlus } from "@tabler/icons-react";

export default function PreviousEntries({ handleAddNewEntry }) {
  return (
    <>
      <ul className="previousEntries">
        <li className="previousEntry">
          <div className="summary">
            <p className="jobTitle">Senior Risk Analyst</p>
            <p className="employer">Westpac</p>
            <p className="dates">Sep 2020 - Present</p>
          </div>
          <div className="icons">
            <ActionIcon
              variant="transparent"
              color="gray"
              size="lg"
              aria-label="Edit"
            >
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
        </li>
        <li className="previousEntry">
          <div className="summary">
            <p className="jobTitle">Associate Analyst</p>
            <p className="employer">Telstra</p>
            <p className="dates">Mar 2014 - 2017</p>
          </div>
          <div className="icons">
            <ActionIcon
              variant="transparent"
              color="gray"
              size="lg"
              aria-label="Edit"
            >
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
        </li>
      </ul>

      <Button
        leftSection={<IconCirclePlus />}
        color="#00ccb8"
        variant="outline"
        size="md"
        className="addAnotherButton"
        onClick={handleAddNewEntry}
      >
        Add another experience
      </Button>
    </>
  );
}
