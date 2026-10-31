import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../siteConfig";

const links = [["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand" href="#home" aria-label={`${siteConfig.brand} home`}>
          <span className="brand-mark">SW<span>.</span></span>
          <span className="brand-name">STAR WAR <b>WEB STUDIO</b></span>
        </a>
        <div className="nav-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mobile-menu">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a project ↗</a></div>}
    </header>
  );
}