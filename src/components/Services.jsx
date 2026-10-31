import { PanelsTopLeft, Store, UserRound, Wrench } from "lucide-react";

const services = [
  { icon: UserRound, id: "01", title: "Personal portfolios", text: "A polished home for your skills, projects, certificates and contact details." },
  { icon: Store, id: "02", title: "Small business websites", text: "Clear service pages that help customers understand what you offer and how to reach you." },
  { icon: PanelsTopLeft, id: "03", title: "Landing pages", text: "Focused one-page websites for a product, event, service or student project." },
  { icon: Wrench, id: "04", title: "Website updates", text: "Content changes, responsive fixes and small improvements to an existing website." }
];

export default function Services() {
  return (
    <section id="services" className="section-wrap section-block">
      <div className="section-heading"><div><div className="eyebrow">WHAT I CAN HELP WITH / 02</div><h2>Small sites.<br /><em>Big clarity.</em></h2></div><p>Practical websites with a clear purpose. Scope and pricing are agreed before work begins.</p></div>
      <div className="service-grid">{services.map(({ icon: Icon, id, title, text }) => (
        <article className="service-card" key={id}><div className="service-top"><span>{id} / SERVICE</span><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><span className="service-arrow">↗</span></article>
      ))}</div>
    </section>
  );
}