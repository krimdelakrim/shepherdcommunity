export default function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className="h2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
