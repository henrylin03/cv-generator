import { useState } from "react";
import { MantineProvider, Accordion } from "@mantine/core";

// components
import Header from "./components/Header";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import CVPreview from "./components/CVPreview";

// css
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./styles/index.css";

function App() {
  const [openedAccordionValue, setOpenedAccordionValue] =
    useState("Personal Details");

  const sectionComponents = [
    {
      name: "Personal Details",
      component: <PersonalDetailsSection />,
    },
    {
      name: "Education",
      component: (
        <EducationSection setOpenedAccordionValue={setOpenedAccordionValue} />
      ),
    },
    {
      name: "Experience",
      component: (
        <ExperienceSection setOpenedAccordionValue={setOpenedAccordionValue} />
      ),
    },
  ];

  const sections = sectionComponents.map((section) => (
    <Accordion.Item key={section.name} value={section.name}>
      <Accordion.Control className="collapsedSection">
        <h2>{section.name}</h2>
      </Accordion.Control>
      <Accordion.Panel className="panel">{section.component}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <MantineProvider>
      <div className="left">
        <Header />
        <Accordion
          variant="separated"
          className="main"
          value={openedAccordionValue}
          onChange={setOpenedAccordionValue}
        >
          {sections}
        </Accordion>
      </div>
      <CVPreview />
    </MantineProvider>
  );
}

export default App;
