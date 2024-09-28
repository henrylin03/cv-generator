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

// other
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div className="left">
        <Header />
        <PersonalDetailsSection />
        <EducationSection />
        <ExperienceSection />
      </div>
      <CVPreview />
    </MantineProvider>
  );
}

export default App;
