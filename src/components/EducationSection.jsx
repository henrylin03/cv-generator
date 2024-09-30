import { ActionIcon, Button } from "@mantine/core";
import { IconPencil, IconTrashX } from "@tabler/icons-react";
import DateSelector from "./DateSelector";

export default function EducationSection() {
  const previouslyAddedEntries = [
    {
      degree: "Masters of Data Science",
      major: "",
      school: "Univeristy of Adelaide",
      startDate: "September 2020",
      endDate: "Present",
    },
    {
      degree: "Bachelor of Commerce",
      major: "Finance/Accounting",
      school: "Univeristy of New South wales",
      startDate: "March 2014",
      endDate: "November 2017",
    },
  ];

  return (
    <article className="educationSection">
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
              size="xl"
              aria-label="Edit"
            >
              <IconPencil style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              color="gray"
              size="xl"
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
              size="xl"
              aria-label="Edit"
            >
              <IconPencil style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              color="gray"
              size="xl"
              aria-label="Delete"
            >
              <IconTrashX style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
          </div>
        </li>
      </ul>
      <ul>
        <div className="grid">
          <li>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" placeholder="Bachelor of Commerce" />
          </li>
          <li>
            <label htmlFor="major">Major</label>
            <input type="text" id="major" placeholder="Finance/Accounting" />
          </li>
        </div>
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            placeholder="University of New South Wales"
          />
        </li>
        <li className="dateSelectors">
          <ul className="grid">
            <DateSelector />
          </ul>
        </li>
      </ul>

      <div className="button-group">
        <Button variant="outline" color="#00ccb8" className="primary-button">
          Save
        </Button>
        <Button
          variant="outline"
          color="#8490b3"
          className="destructive-button"
        >
          Cancel
        </Button>
      </div>
    </article>
  );
}
