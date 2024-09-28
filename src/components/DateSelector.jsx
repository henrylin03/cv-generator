import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

export default function DateSelector({
  isPresent = false,
  isProfessionalExperience = false,
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <li>
        <MonthPickerInput
          label="Start Date"
          key="startDate"
          placeholder="Select month and year"
          clearable
          className="dateInput"
          value={startDate}
          onChange={setStartDate}
        />
      </li>
      <li>
        <MonthPickerInput
          label="End Date"
          key="endDate"
          placeholder={isPresent ? "Present" : "Select month and year"}
          clearable
          disabled={isPresent}
          className="dateInput"
          minDate={startDate}
          maxDate={isProfessionalExperience && new Date()}
          value={isPresent ? null : endDate}
          onChange={setEndDate}
        />
      </li>
    </>
  );
}
