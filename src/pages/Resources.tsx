import Section from "../components/Section";
import Card from "../components/Card";

export default function Resources() {
  return (
    <div className="container">
      <Section title="Resources & Self-Reliance" eyebrow="Growth and support">
        <p className="lead">
          We offer community-based classes and encouragement around self-help, self-reliance,
          emotional growth, and emotional intelligence.
        </p>

        <div className="grid grid--2">
          <Card title="Classes we’re building">
            <ul className="bullets">
              <li>Self-reliance basics: budgeting, organization, routines</li>
              <li>Emotional growth & communication skills</li>
              <li>Goal setting and consistent follow-through</li>
              <li>Community support: accountability and encouragement</li>
            </ul>
          </Card>

          <Card title="Not therapy — but we can refer">
            <p className="muted">
              We’re not therapists. If you need licensed counseling or clinical support, we can
              help connect you with providers and resources.
            </p>
            <p className="muted small">
              If you’re in immediate danger or a mental health emergency, call 911 (US) or your local emergency number.
            </p>
          </Card>
        </div>

        <div className="notice">
          <strong>Motto:</strong> Duty to this realm — blessed is he who regards the weak and the meek.
        </div>
      </Section>
    </div>
  );
}

