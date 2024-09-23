import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./styles/global.css";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

// TODO: use state hook to determine which form will show. use an object as variable, with heading and the component to show. the state will merely be a reference (key in that object)??

function App() {
  return (
    <MantineProvider>
      <header>
        <a href="/">
          <h1>CV Generator</h1>
        </a>
      </header>
      <main>
        <PersonalDetailsForm />
      </main>
    </MantineProvider>
  );
}

export default App;
