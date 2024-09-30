import { useState } from "react";
import DateSelector from "./DateSelector";
import { Paper, ActionIcon, Button, Checkbox } from "@mantine/core";
import { IconPencil, IconTrashX } from "@tabler/icons-react";

const ExperienceSection = () => {
  const [positionIsPresent, setPositionIsPresent] = useState(false);

  const handleCheckForPresentPosition = (event) =>
    setPositionIsPresent(event.currentTarget.checked);

  return (
    <article className="experienceSection">
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
            <p className="jobTitle">Associate Analyst</p>
            <p className="employer">Telstra</p>
            <p className="dates">Mar 2014 - 2017</p>
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
        <li>
          <label htmlFor="jobTitleInput">Job Title</label>
          <input type="text" id="jobTitleInput" placeholder="Sales Analyst" />
        </li>
        <li>
          <label htmlFor="employerInput">Employer</label>
          <input type="text" id="employerInput" placeholder="ANZ Plus" />
        </li>
        <li className="dateSelectors">
          <ul className="grid">
            <DateSelector
              isPresent={positionIsPresent}
              isProfessionalExperience={true}
            />
            <Checkbox
              label="I still work here"
              color="#00A9AD"
              size="xs"
              checked={positionIsPresent}
              onChange={handleCheckForPresentPosition}
              className="presentPositionCheckbox"
            />
          </ul>
        </li>
        <li>
          <label htmlFor="jobDescription">
            Description (responsibilities, achievements, etc)
          </label>
          <textarea id="jobDescription" rows="8"></textarea>
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
};

export default ExperienceSection;
