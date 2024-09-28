import { Paper } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";

export default function CVPreview() {
  return (
    <section className="cvPreview">
      <Paper shadow="md" radius={0} className="paper">
        <div className="personalDetailsDisplayed">
          <p className="fullNameDisplayed">Jane Smith</p>
          <div className="contactDetailsDisplayed">
            <div className="container">
              <IconMail />
              <p className="emailDisplayed">jane.smith@gmail.com</p>
            </div>
            <div className="container">
              <IconPhone />
              <p className="phoneDisplayed">+61 412 345 678</p>
            </div>
          </div>
        </div>

        <div className="previewMainSection">
          <div className="educationDisplayed">
            <p className="title">Education</p>
            <div className="entriesDisplayed">
              <div className="entry">
                <p className="datesDisplayed">Sep 2020 - May 2025</p>
                <div className="right">
                  <p className="degreeDisplayed">Masters of Data Science</p>
                  <p className="schoolDisplayed">University of Adelaide</p>
                </div>
              </div>
              <div className="entry">
                <p className="datesDisplayed">Mar 2014 - Nov 2017</p>
                <div className="right">
                  <p className="degreeDisplayed">
                    Bachelor of Commerce
                    <span className="majorDisplayed"> (Finance/Accounting)</span>
                  </p>
                  <p className="schoolDisplayed">University of New South Wales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="experienceDisplayed">
            <p className="title">Professional Experience</p>
            <div className="entriesDisplayed">
              <div className="entry">
                <p className="datesDisplayed">Sep 2020 - Present</p>
                <div className="right">
                  <p className="positionDisplayed">Senior Risk Analyst</p>
                  <p className="employerDisplayed">Westpac</p>
                  <p className="descriptionDisplayed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="entry">
                <p className="datesDisplayed">Mar 2014 - Nov 2017</p>
                <div className="right">
                  <p className="positionDisplayed">Associate Analyst</p>
                  <p className="employerDisplayed">Telstra</p>
                  <p className="descriptionDisplayed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
}
