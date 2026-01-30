import Section from "../components/Section";
import { FormField, TextAreaField } from "../components/FormField";

export default function RequestSupport() {
  return (
    <div className="container">
      <Section title="Request Support" eyebrow="Tell us what you need">
        <p className="muted">
          Fill this out and we’ll follow up. If we can’t provide direct help, we’ll try to connect you with resources or referrals.
        </p>

        {/* Netlify Forms (works without backend) */}
        <form
          className="form"
          name="request-support"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="request-support" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid--2">
            <FormField label="Full name" name="name" required />
            <FormField label="Phone" name="phone" type="tel" required />
            <FormField label="Email" name="email" type="email" />
            <FormField label="City / County" name="location" required />
          </div>

          <label className="field">
            <span className="field__label">
              Who needs help? <span className="req">*</span>
            </span>
            <select className="select" name="who" required>
              <option value="">Select…</option>
              <option>Seniors / Elderly</option>
              <option>Youth</option>
              <option>People with disabilities</option>
              <option>Low-income household</option>
              <option>Other / multiple</option>
            </select>
          </label>

          <label className="field">
            <span className="field__label">
              Type of help needed <span className="req">*</span>
            </span>
            <select className="select" name="needType" required>
              <option value="">Select…</option>
              <option>Handyman / home support</option>
              <option>Companionship / visits</option>
              <option>Meals / food support</option>
              <option>Paperwork / benefits organization</option>
              <option>Furniture / essentials delivery</option>
              <option>Referrals / resource navigation</option>
              <option>Self-reliance / growth classes</option>
              <option>Other</option>
            </select>
          </label>

          <TextAreaField
            label="Describe the situation"
            name="details"
            required
            placeholder="What’s going on, what you’ve tried, any deadlines, and the best way to reach you."
            rows={7}
          />

          <label className="field">
            <span className="field__label">Best times to contact you</span>
            <input className="input" name="bestTimes" placeholder="e.g., weekdays after 5pm" />
          </label>

          <button className="btn btn--primary" type="submit">
            Submit Request
          </button>

          <p className="small muted">
            By submitting, you agree we may contact you about your request. We aim to respect privacy and only share details when needed to coordinate help.
          </p>
        </form>
      </Section>
    </div>
  );
}
