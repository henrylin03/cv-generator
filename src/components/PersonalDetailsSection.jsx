import { Paper } from "@mantine/core";

export default function PersonalDetailsSection() {
  return (
    <section className="personalDetails">
      <Paper shadow="sm" className="card">
        <h2>Personal Details</h2>
        <ul>
          <li>
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" placeholder="Jane Smith" />
          </li>
          <div className="grid">
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="jane.smith@gmail.com" />
            </li>
            <li>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" placeholder="+61 412 345 678" />
            </li>
          </div>
        </ul>
      </Paper>
    </section>
  );
}
