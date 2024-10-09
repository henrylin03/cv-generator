import { useState } from "react";
import { Checkbox } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

export default function DateSelector({
  isProfessionalExperience = false,
  formValues,
  setFormValues,
  selectedStartDate,
  selectedEndDate,
}) {
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(selectedEndDate);
  const [positionIsPresent, setPositionIsPresent] = useState(false);

  const handleCheckForPresentPosition = (event) => {
    setPositionIsPresent(event.currentTarget.checked);
    setFormValues({
      ...formValues,
      endDate: "Present",
    });
  };

  const handleStartDateChange = (event) => {
    setStartDate(event);
    setFormValues({ ...formValues, startDate: event });
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
    setFormValues({ ...formValues, endDate: event });
  };

  return (
    <ul className="grid">
      <li>
        <MonthPickerInput
          label="Start Date"
          key="startDate"
          placeholder="Select month and year"
          clearable
          className="dateInput"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </li>
      <li>
        <MonthPickerInput
          label="End Date"
          key="endDate"
          placeholder={positionIsPresent ? "Present" : "Select month and year"}
          clearable
          disabled={positionIsPresent}
          className="dateInput"
          minDate={startDate}
          maxDate={isProfessionalExperience && new Date()}
          value={positionIsPresent ? null : endDate}
          onChange={handleEndDateChange}
        />
      </li>
      {isProfessionalExperience && (
        <Checkbox
          label="I still work here"
          color="#00A9AD"
          size="xs"
          checked={positionIsPresent}
          onChange={handleCheckForPresentPosition}
          className="presentPositionCheckbox"
        />
      )}
    </ul>
  );
}
