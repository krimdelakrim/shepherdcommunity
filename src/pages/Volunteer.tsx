import Section from "../components/Section";
import { FormField, TextAreaField } from "../components/FormField";

export default function Volunteer() {
  return (
    <div className="container">
      <Section title="Volunteer Sign-Up" eyebrow="Serve with us">
        <p className="muted">
          Volunteers power our work—calls, visits, deliveries, handyman help, admin support, and more.
          We’ll contact you to coordinate next steps.
        </p>

        <form
          className="form"
          name="volunteer-signup"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="volunteer-signup" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid--2">
            <FormField label="Full name" name="name" required />
            <FormField label="Phone" name="phone" type="tel" required />
            <FormField label="Email" name="email" type="email" required />
            <FormField label="City / County" name="location" required />
          </div>

          <label className="field">
            <span className="field__label">
              How would you like to help? <span className="req">*</span>
            </span>

            <div className="checks">
              {[
                "Handyman / minor repairs",
                "Deliveries (meals, furniture, supplies)",
                "Companionship visits / phone calls",
                "Administrative help / paperwork organization",
                "Community outreach / events",
                "Referral coordination / resource navigation",
              ].map((v) => (
                <label key={v} className="check">
                  <input type="checkbox" name="helpAreas" value={v} /> {v}
                </label>
              ))}
            </div>
          </label>

          <label className="field">
            <span className="field__label">Availability</span>
            <input className="input" name="availability" placeholder="e.g., Saturdays 10am–2pm" />
          </label>

          <TextAreaField
            label="Notes"
            name="notes"
            placeholder="Any skills, languages, relevant experience, or limitations we should know."
            rows={6}
          />

          <button className="btn btn--primary" type="submit">
            Submit Volunteer Form
          </button>

          <p className="small muted">
            Safety note: Some volunteer roles may require basic screening or coordination rules depending on the activity and partner requirements.
          </p>
        </form>
      </Section>
    </div>
  );
}

