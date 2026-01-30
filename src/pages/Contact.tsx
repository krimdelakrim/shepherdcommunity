import Section from "../components/Section";
import { FormField, TextAreaField } from "../components/FormField";

export default function Contact() {
  return (
    <div className="container">
      <Section title="Contact" eyebrow="Reach us">
        <p className="muted">
          Use this form for general questions, partnerships, donations, or media inquiries.
        </p>

        <form
          className="form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid--2">
            <FormField label="Name" name="name" required />
            <FormField label="Email" name="email" type="email" required />
          </div>

          <TextAreaField
            label="Message"
            name="message"
            required
            rows={7}
            placeholder="How can we help or partner?"
          />

          <button className="btn btn--primary" type="submit">
            Send message
          </button>
        </form>
      </Section>
    </div>
  );
}

