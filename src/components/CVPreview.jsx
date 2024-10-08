import { Paper } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { dateToMonthYearSummarised } from "../helpers/dates";

export default function CVPreview({
  personalDetails,
  educationEntries,
  experienceEntries,
}) {
  const displayExperienceEndDate = (endDate) => {
    if (!endDate) return;
    if (endDate === "Present") return "Present";
    return dateToMonthYearSummarised(endDate);
  };

  const educationPreviewed = educationEntries.map((entry) => (
    <div className="entry" key={entry.key}>
      <p className="datesDisplayed">
        {entry.startDate && `${dateToMonthYearSummarised(entry.startDate)} - `}
        {entry.endDate && dateToMonthYearSummarised(entry.endDate)}
      </p>
      <div className="right">
        <p className="degreeDisplayed">
          {entry.degree}
          <span className="majorDisplayed">
            {entry.major && ` (${entry.major})`}
          </span>
        </p>
        <p className="schoolDisplayed">{entry.school}</p>
      </div>
    </div>
  ));

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

  return (
    <section className="cvPreview">
      <Paper shadow="md" radius={0} className="paper">
        <div className="personalDetailsDisplayed">
          <p className="fullNameDisplayed">{personalDetails.name}</p>
          <div className="contactDetailsDisplayed">
            {personalDetails.email && (
              <div className="container">
                <IconMail />
                <p className="emailDisplayed">{personalDetails.email}</p>
              </div>
            )}
            {personalDetails.phone && (
              <div className="container">
                <IconPhone />
                <p className="phoneDisplayed">{personalDetails.phone}</p>
              </div>
            )}
          </div>
        </div>

        <div className="previewMainSection">
          {educationEntries.length > 0 && (
            <div className="educationDisplayed">
              <p className="title">Education</p>
              <div className="entriesDisplayed">{educationPreviewed}</div>
            </div>
          )}

          {experienceEntries.length > 0 && (
            <div className="experienceDisplayed">
              <p className="title">Professional Experience</p>
              <div className="entriesDisplayed"> {experiencePreviewed}</div>
            </div>
          )}
        </div>
      </Paper>
    </section>
  );
}
