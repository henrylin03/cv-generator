import { dateToMonthYearSummarised } from "../../helpers/dates";

export default function EducationPreview({ educationEntries }) {
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

  return <div className="entriesDisplayed">{educationPreviewed}</div>;
}
