import { Code2, Compass, Lightbulb } from "lucide-react";
import { siteConfig } from "../siteConfig";

const principles = [
  { icon: Compass, title: "Start with the goal", text: "Understand what the site needs to help someone do." },
  { icon: Code2, title: "Build it carefully", text: "Use responsive layouts and maintainable frontend code." },
  { icon: Lightbulb, title: "Keep it understandable", text: "Make the experience simple for the people using it." }
];

export default function About() {
  return (
    <section id="about" className="section-wrap section-block about-section">
      <div className="about-intro">
        <div className="eyebrow">A LITTLE ABOUT ME / 03</div>
        <h2>Curious by nature.<br /><em>Builder by choice.</em></h2>
        <p>I'm {siteConfig.owner}, a Computer Science and Engineering student interested in web development, AI and building useful digital products. I enjoy taking a problem apart, understanding the user and turning the idea into something people can try.</p>
        <a className="text-link" href={siteConfig.github} target="_blank" rel="noreferrer"><GithubIcon /> Explore my GitHub <span>↗</span></a>
      </div>
      <div className="principles">{principles.map(({ icon: Icon, title, text }, i) => (
        <div className="principle" key={title}><div className="principle-icon"><Icon size={19} /></div><div><span>0{i + 1} / PRINCIPLE</span><h3>{title}</h3><p>{text}</p></div></div>
      ))}</div>
    </section>
  );
}

function GithubIcon() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3.01 0 4.27-2.6 5.21-5.08 5.49.4.34.75 1 .75 2.02v3.01c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
}