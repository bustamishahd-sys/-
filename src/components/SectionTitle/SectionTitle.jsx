import './SectionTitle.css';
export default function SectionTitle({eyebrow,title,children}){return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{children&&<p>{children}</p>}</div>}
