import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../siteConfig";

export default function Contact() {
  const emailHref = siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Website project enquiry")}` : siteConfig.github;
  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="contact-panel">
        <div className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</div>
        <h2>Let's make<br /><em>something useful.</em></h2>
        <p>Tell me what you're building, who it's for and what you need the website to do. I'll get back to you with a clear next step.</p>
        <div className="contact-actions">
          <a className="button button-primary" href={emailHref} target={siteConfig.contactEmail ? undefined : "_blank"} rel="noreferrer"><Mail size={17} /> {siteConfig.contactEmail ? "Email about a project" : "Contact via GitHub"} <ArrowUpRight size={16} /></a>
          <a className="button button-ghost" href={siteConfig.github} target="_blank" rel="noreferrer"><MessageCircle size={17} /> GitHub profile</a>
        </div>
        {!siteConfig.contactEmail && <small className="setup-note">Setup note: add your public contact email in src/siteConfig.js to enable direct email enquiries.</small>}
      </div>
      <div className="contact-footer"><span>STAR WAR WEB STUDIO © 2026</span><span>BUILT WITH REACT + TAILWIND</span><a href="#home">BACK TO TOP ↑</a></div>
    </section>
  );
}