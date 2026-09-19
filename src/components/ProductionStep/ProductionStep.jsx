import './ProductionStep.css';
export default function ProductionStep({number,title,tag,icon}){return <article className="production-step"><b>{number}</b><i>{icon}</i><h3>{title}</h3><p>نحرص على أعلى المعايير في كل مرحلة من مراحل الإنتاج.</p><small>{tag}</small></article>}
