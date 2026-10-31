import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "../siteConfig";

export default function Hero() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> INDEPENDENT WEB DEVELOPMENT STUDIO</div>
          <h1>Digital ideas.<br /><span>Built to</span> <em>stand out.</em></h1>
          <p className="hero-lead">I design and build clean, responsive websites for students, creators and small businesses. Thoughtful design, useful features, no unnecessary complexity.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#work">Explore my work <ArrowDown size={15} /></a>
          </div>
          <div className="hero-meta"><span><i /> AVAILABLE FOR SELECT PROJECTS</span><span>{siteConfig.location}</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract digital orbit artwork">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="core"><span>SW</span><small>WEB / 01</small></div>
          <div className="orbit-label label-top">DESIGN SYSTEMS</div><div className="orbit-label label-bottom">DEVELOPMENT // DEPLOYMENT</div>
          <div className="floating-chip chip-one"><Sparkles size={14} /> Built with intent</div><div className="floating-chip chip-two">REACT <b>+</b> TAILWIND</div>
        </div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-line" /><span>01 — 04</span></div>
    </section>
  );
}