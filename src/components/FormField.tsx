export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="field">
      <span className="field__label">
        {label} {required ? <span className="req">*</span> : null}
      </span>
      <input
        className="input"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete="on"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  placeholder,
  rows = 5,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="field">
      <span className="field__label">
        {label} {required ? <span className="req">*</span> : null}
      </span>
      <textarea
        className="textarea"
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
      />
    </label>
  );
}

