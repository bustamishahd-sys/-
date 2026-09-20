import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';
import './AdminPortalLink.css';

export default function Header() {
  const { itemCount, subtotal } = useCart();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const closeOnOutside = (event) => { if (open && navRef.current && !navRef.current.contains(event.target)) setOpen(false); };
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => { document.removeEventListener('mousedown', closeOnOutside); document.removeEventListener('keydown', closeOnEscape); };
  }, [open]);
  const close = () => setOpen(false);
  return <header>
    <div className="notice">توصيل مجاني للطلبات فوق 150 شيكل <span>|</span> لخدمة العملاء: 920029940</div>
    <nav ref={navRef}>
      <Link className="logo" to="/" onClick={close}><b>عزيزا</b><small>الدجاج الطازج</small></Link>
      <button className="hamb" type="button" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
      <div className={`navlinks ${open ? 'show' : ''}`}>
        <Link to="/" onClick={close}>الرئيسية</Link><Link to="/products" onClick={close}>منتجاتنا</Link><Link to="/about" onClick={close}>عن عزيزا</Link><Link to="/quality" onClick={close}>الجودة</Link><Link to="/contact" onClick={close}>تواصل معنا | فروعنا</Link>
      </div>
      <Link className="admin-portal-link" to="/login" onClick={close}>Login</Link>
      <div className="tools"><button className="search" type="button" aria-label="ابحث عن منتج">⌕ <span>ابحث عن منتج...</span></button><Link className="cart" to="/checkout" aria-label="السلة">🛒 <em>{itemCount}</em><span>{subtotal.toFixed(2)} ₪</span></Link></div>
    </nav>
    {open && <button className="nav-backdrop" type="button" aria-label="إغلاق القائمة" onClick={close} />}
  </header>;
}
