import Section from "../components/Section";
import Card from "../components/Card";
import { DEFAULT_CONTENT } from "../content";

export default function About() {
  const c = DEFAULT_CONTENT;

  return (
    <div className="container">
      <Section title="About Shepherd Community" eyebrow="Who we are">
        <p className="lead">{c.mission}</p>

        <div className="grid grid--2">
          <Card title="Our principles">
            <ul className="bullets">
              {c.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </Card>

          <Card title="Community & outreach">
            <p className="muted">
              We collaborate across diverse religious and community perspectives.
              We also do outreach through members and friends of
              The Church of Jesus Christ of Latter-day Saints, while welcoming
              everyone who believes in the Golden Rule.
            </p>
            <p className="muted">
              We operate with a director and a board of directors. (You can add bios and photos later.)
            </p>
          </Card>
        </div>

        <div className="notice">
          <strong>Transparency:</strong> We’re not therapists, doctors, or attorneys. We can help you organize information, locate resources,
          and connect to qualified professionals when needed.
        </div>
      </Section>
    </div>
  );
}

