import './AboutCard.css';
export default function AboutCard({icon,title,children}){return <article className="about-card"><i>{icon}</i><h2>{title}</h2><div>{children}</div><small>✓ عزيزا.. جودة نثق بها</small></article>}
