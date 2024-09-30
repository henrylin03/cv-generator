import { Paper, Button } from "@mantine/core";

export default function Header() {
  return (
    <header>
      <Paper className="card">
        <h1 className="branding">CV Gen</h1>
        <div className="button-group">
          <Button variant="filled" color="#00ccb8" className="primary-button">
            Download
          </Button>
          <Button variant="outline" color="#8490b3" className="destructive-button">
            Clear all
          </Button>
        </div>
      </Paper>
    </header>
  );
}
