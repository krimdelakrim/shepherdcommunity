export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__title">Shepherd Community</div>
          <div className="muted">
            © {year} • Serving seniors, youth, people with disabilities, and low-income neighbors.
          </div>
        </div>

        <div className="footer__links">
          <a href="/volunteer">Volunteer</a>
          <a href="/request-support">Request Support</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

