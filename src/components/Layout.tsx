import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "navlink" + (isActive ? " navlink--active" : "")
      }
      end={to === "/"}
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <a className="skiplink" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="container header__inner">
          <div className="brand">
            {/* Replace /logo.png with your actual file in /public or import in Vite */}
            <img className="brand__logo" src="/logo.png" alt="Shepherd Community logo" />
            <div className="brand__text">
              <div className="brand__name">Shepherd Community</div>
              <div className="brand__tag">Community support • volunteers • referrals</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            <NavItem to="/" label="Home" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/request-support" label="Request Support" />
            <NavItem to="/volunteer" label="Volunteer" />
            <NavItem to="/about" label="About" />
            <NavItem to="/resources" label="Resources" />
            <NavItem to="/contact" label="Contact" />
            <NavItem to="/admin" label="Admin" />
          </nav>
        </div>
      </header>

      <main id="main" className="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
