import { LayoutDashboard, ClipboardList, LogOut, Menu, Bell, ExternalLink } from 'lucide-react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const links = [{ to: '/dashboard', label: 'الرئيسية والإحصائيات', icon: LayoutDashboard }, { to: '/orders', label: 'إدارة الطلبات', icon: ClipboardList }];
export default function AdminLayout() {
  const { admin, logout } = useAuth(); const navigate = useNavigate();
  return <div className="admin-shell"><aside className="sidebar"><div className="brand"><b>ع</b><span>عزيزا<small>بوابة الإدارة التجريبية</small></span></div><nav>{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to}><Icon size={19}/>{label}</NavLink>)}</nav><p className="demo-note">بيانات Demo فقط — غير متصلة بمتجر العميل أو Backend.</p></aside><main className="admin-main"><header className="topbar"><button className="mobile-menu" type="button" aria-label="القائمة"><Menu/></button><div className="topbar-actions"><a href="http://localhost:5173" target="_blank" rel="noreferrer">معاينة المتجر <ExternalLink size={15}/></a><button type="button" aria-label="التنبيهات"><Bell size={18}/></button><span className="admin-user">{admin?.username ?? 'مدير تجريبي'}<small>وضع المعاينة</small></span><button className="logout" type="button" onClick={() => { logout(); navigate('/login'); }}><LogOut size={17}/> خروج</button></div></header><div className="admin-content"><Outlet/></div></main></div>;
}
