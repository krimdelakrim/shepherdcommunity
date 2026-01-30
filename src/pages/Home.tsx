import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import { DEFAULT_CONTENT } from "../content";

export default function Home() {
  const c = DEFAULT_CONTENT;

  return (
    <div className="container">
      <div className="hero">
        <div className="hero__content">
          <div className="kicker">Nonprofit • Community Support • Volunteers</div>
          <h1 className="h1">{c.tagline}</h1>
          <p className="lead">{c.mission}</p>

          <div className="hero__cta">
            <Link className="btn btn--primary" to="/request-support">
              Request Support
            </Link>
            <Link className="btn btn--ghost" to="/volunteer">
              Volunteer Sign-Up
            </Link>
          </div>
        </div>

        <div className="hero__panel">
          <div className="panel">
            <div className="panel__title">How we help</div>
            <ul className="bullets">
              <li>Handyman & home support</li>
              <li>Companionship visits</li>
              <li>Benefits & paperwork help</li>
              <li>Meals & referrals</li>
            </ul>
          </div>
        </div>
      </div>

      <Section title="Services at a glance">
        <div className="grid">
          {c.serviceHighlights.slice(0, 6).map((s) => (
            <Card key={s.title} title={s.title}>
              <p className="muted">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

