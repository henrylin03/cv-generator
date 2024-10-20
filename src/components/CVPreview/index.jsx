import { Paper } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

const addSpaces = (phoneNumber) => {
  if (phoneNumber.length < 5) return phoneNumber;

  const indexesOfDigitsWithSpaceAfter = [3, 3 + 3];
  let res = "";

  for (let i = 0; i < phoneNumber.length; i++) {
    if (!indexesOfDigitsWithSpaceAfter.includes(i)) res += phoneNumber[i];
    else res += phoneNumber[i] + " ";
  }

  return res;
};

export default function CVPreview({
  personalDetails,
  educationEntries,
  experienceEntries,
}) {
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
                <p className="phoneDisplayed">
                  {addSpaces(personalDetails.phone)}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="previewMainSection">
          {educationEntries.length > 0 && (
            <div className="educationDisplayed">
              <p className="title">Education</p>
              <EducationPreview educationEntries={educationEntries} />
            </div>
          )}

          {experienceEntries.length > 0 && (
            <div className="experienceDisplayed">
              <p className="title">Professional Experience</p>
              <ExperiencePreview experienceEntries={experienceEntries} />
            </div>
          )}
        </div>
      </Paper>
    </section>
  );
}
