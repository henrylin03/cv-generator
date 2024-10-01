import { ActionIcon, Button } from "@mantine/core";
import { IconPencil, IconTrashX, IconCirclePlus } from "@tabler/icons-react";

export default function PreviousEntries({ handleAddNewEntry }) {
  // const previouslyAddedEntries = [
  //   {
  //     degree: "Masters of Data Science",
  //     major: "",
  //     school: "Univeristy of Adelaide",
  //     startDate: "September 2020",
  //     endDate: "Present",
  //   },
  //   {
  //     degree: "Bachelor of Commerce",
  //     major: "Finance/Accounting",
  //     school: "Univeristy of New South wales",
  //     startDate: "March 2014",
  //     endDate: "November 2017",
  //   },
  // ];

  return (
    <>
      <ul className="previousEntries">
        <li className="previousEntry">
          <div className="summary">
            <p className="degree">Masters of Data Science</p>
            <p className="school">University of Adelaide</p>
            <p className="dates">Sep 2020 - May 2025</p>
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
            <p className="degree">
              Bachelor of Commerce{" "}
              <span className="major">(Finance/Accounting)</span>
            </p>
            <p className="school">University of New South Wales</p>
            <p className="dates">Mar 2014 - Nov 2017</p>
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
        Add another education
      </Button>
    </>
  );
}
