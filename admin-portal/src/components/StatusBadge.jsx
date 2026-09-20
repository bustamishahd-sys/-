import { statusMeta } from '../data/mockOrders';
export default function StatusBadge({ status }) { const meta = statusMeta[status]; return <span className={`status ${meta.tone}`}>{meta.label}</span>; }
