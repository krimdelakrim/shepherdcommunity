import Section from "../components/Section";
import Card from "../components/Card";
import { DEFAULT_CONTENT } from "../content";
import { Link } from "react-router-dom";

export default function Services() {
  const c = DEFAULT_CONTENT;

  return (
    <div className="container">
      <Section title="Services" eyebrow="Support that fills the gaps">
        <p className="lead">
          We focus on practical help, connection, and navigating resources—
          especially for seniors, youth, people with disabilities, and low-income neighbors.
        </p>

        <div className="grid">
          {c.serviceHighlights.map((s) => (
            <Card key={s.title} title={s.title}>
              <p className="muted">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="section__actions">
          <Link className="btn btn--primary" to="/request-support">
            Request Support
          </Link>
          <Link className="btn btn--ghost" to="/volunteer">
            Volunteer
          </Link>
        </div>
      </Section>
    </div>
  );
}

