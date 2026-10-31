import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../siteConfig";

const projects = [
  { number: "01", type: "LIVE PROJECT · AI LEARNING", title: "cH Code Helper", description: "A beginner-focused coding assistant that guides learners through concepts, logic, hints and implementation instead of jumping straight to answers.", tags: ["JavaScript", "Node.js", "AI API", "GitHub Pages"], link: siteConfig.codeHelper, linkLabel: "Visit live project", className: "project-lime", visual: "CH" },
  { number: "02", type: "CONCEPT / PROTOTYPE · CIVIC TECH", title: "Godavari Guide", description: "A multilingual pilgrim-assistance concept for verified information about routes, ghats, facilities and public announcements for Godavari Pushkaralu 2027.", tags: ["Civic Tech", "Multilingual UX", "AI-assisted search"], link: "https://github.com/theaj-ship-it", linkLabel: "View GitHub profile", className: "project-violet", visual: "GG" },
  { number: "03", type: "LEARNING PROJECT · MODEL FINE-TUNING", title: "Beginner AI Tutor", description: "An experimental LoRA fine-tuning project exploring how a language model can explain programming concepts in a beginner-friendly way.", tags: ["Python", "LoRA", "Llama", "Model deployment"], link: "https://github.com/theaj-ship-it", linkLabel: "View GitHub profile", className: "project-blue", visual: "AI" }
];

export default function Projects() {
  return (
    <section id="work" className="section-wrap section-block">
      <div className="section-heading"><div><div className="eyebrow">SELECTED WORK / 01</div><h2>Ideas in <em>motion.</em></h2></div><p>A few things I've built, explored and learned from. Each project starts with a real problem.</p></div>
      <div className="project-list">{projects.map(project => (
        <article className={`project-card ${project.className}`} key={project.number}>
          <div className="project-visual"><div className="visual-grid" /><div className="visual-orbit" /><span className="visual-code">{project.visual}</span><span className="visual-index">PROJECT / {project.number}</span></div>
          <div className="project-info"><div className="eyebrow">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a></div>
        </article>
      ))}</div>
    </section>
  );
}