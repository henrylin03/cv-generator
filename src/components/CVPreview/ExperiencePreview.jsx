import { dateToMonthYearSummarised } from "../../helpers/dates";

const displayExperienceEndDate = (endDate) => {
  if (!endDate) return;
  if (endDate === "Present") return "Present";
  return dateToMonthYearSummarised(endDate);
};

export default function ExperiencePreview({ experienceEntries }) {
  const experiencePreviewed = experienceEntries.map((entry) => (
    <div className="entry" key={entry.key}>
      <p className="datesDisplayed">
        {entry.startDate && `${dateToMonthYearSummarised(entry.startDate)} - `}
        {displayExperienceEndDate(entry.endDate)}
      </p>
      <div className="right">
        <p className="jobTitleDisplayed">{entry.jobTitle}</p>
        <p className="employerDisplayed">{entry.employer}</p>
        <p className="descriptionDisplayed">{entry.jobDescription}</p>
      </div>
    </div>
  ));

  return <div className="entriesDisplayed">{experiencePreviewed}</div>;
}
