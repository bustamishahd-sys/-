import { Navigate, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import wholeChicken from '../../assets/products/whole-chicken.png';
import marinatedChicken from '../../assets/products/marinated-chicken.png';
import frozenChicken from '../../assets/products/frozen-chicken.png';
import chickenLiver from '../../assets/products/chicken-liver.png';
import chickenWings from '../../assets/products/chicken-wings.png';
import chickenBreast from '../../assets/products/chicken-breast.png';
import chickenThighs from '../../assets/products/chicken-thighs.png';
import './AdminProducts.css';

const productRows = [
  ['AZ-101', 'صدور دجاج طازجة بدون عظم', 'طبق 1000 غرام', 'صدور وفيليه', '28.50', '25.00', true, wholeChicken],
  ['AZ-102', 'دجاج كامل طازج منظف ومجهز', '1100 - 1200 غرام', 'دجاج كامل', '18.00', '', true, marinatedChicken],
  ['AZ-103', 'دبابيس دجاج طازجة (طبق عائلي)', 'طبق 900 غرام', 'قطع ودبابيس', '19.50', '17.50', true, chickenThighs],
  ['AZ-104', 'كبدة وقلوب دجاج طازجة', 'طبق 500 غرام', 'كبد وأحشاء', '12.00', '', false, chickenLiver],
  ['AZ-105', 'أفخاذ دجاج كاملة بالعظم', 'طبق 1000 غرام', 'قطع ودبابيس', '17.00', '', true, chickenThighs],
  ['AZ-106', 'شاورما دجاج متبلة جاهزة للطهي', 'طبق 800 غرام', 'صدور وفيليه', '32.00', '29.00', true, marinatedChicken],
  ['AZ-107', 'أجنحة دجاج طازجة سوبر', 'طبق 1000 غرام', 'قطع ودبابيس', '13.50', '', true, chickenWings],
  ['AZ-108', 'دجاج مفروم طازج قليل الدهن', 'طبق 500 غرام', 'صدور وفيليه', '16.50', '14.50', true, chickenBreast],
  ['AZ-109', 'قوانص دجاج طازجة', 'طبق 500 غرام', 'كبد وأحشاء', '10.00', '', true, chickenLiver],
  ['AZ-110', 'دجاج كامل مجمد ومغلف سوريًا', 'طبق 1000 غرام', 'منتجات مجمدة', '15.00', '', true, frozenChicken],
  ['AZ-111', 'ناجتس دجاج مقرمش مجمد للأطفال', 'كيس 750 غرام', 'منتجات مجمدة', '22.00', '19.90', false, frozenChicken],
  ['AZ-112', 'فيليه دجاج متبل حار (زنجر)', 'طبق 700 غرام', 'صدور وفيليه', '26.00', '', true, chickenBreast],
].map(([code, name, weight, category, price, offer, available, image]) => ({ code, name, weight, category, price, offer, available, image }));

export default function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productRows);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [availability, setAvailability] = useState('');
  if (!localStorage.getItem('aziza-admin-session')) return <Navigate to="/login" replace />;
  const shown = useMemo(() => products.filter((item) => (!query || `${item.name} ${item.code}`.toLowerCase().includes(query.toLowerCase())) && (!category || item.category === category) && (!availability || String(item.available) === availability)), [products, query, category, availability]);
  const toggle = (code) => setProducts((current) => current.map((item) => item.code === code ? { ...item, available: !item.available } : item));
  const logout = () => { localStorage.removeItem('aziza-admin-session'); navigate('/login'); };

  return <main className="admin-products" dir="rtl">
    <aside className="ap-sidebar"><div className="ap-logo"><b>ع</b><span>دواجن عزيزا<small>لوحة التشغيل الموحدة</small></span></div><nav>
      <button onClick={() => navigate('/admin')}>▦ <span>الرئيسية والإحصائيات</span></button><button onClick={() => navigate('/admin/orders')}>♧ <span>إدارة الطلبات</span></button><button className="active">▣ <span>المنتجات والأسعار</span></button><button onClick={() => navigate('/admin/branches')}>▱ <span>الفروع والتوصيل</span></button><button onClick={() => navigate('/admin/users')}>♙ <span>المستخدمين والصلاحيات</span></button><button>⚙ <span>الإعدادات العامة</span></button>
    </nav><div className="ap-version">● نظام معتمد - مسالخ عزيزا 1997<br /><small>إصدار البوابة: v2.4.0</small></div></aside>
    <section className="ap-main"><header className="ap-topbar"><div className="ap-user"><span>🐔</span><b>م. أحمد النابلسي<small>مدير العمليات المركزية</small></b><i>♧</i></div><div><span>↗ معاينة المتجر</span><b>● متصل بالنظام الميداني</b></div><button onClick={logout}>↪ خروج</button></header>
      <div className="ap-content"><section className="ap-heading"><div><p>كتالوج الإنتاج والتسعير الرسمي　▣</p><h1>إدارة المنتجات وقائمة الأسعار</h1><span>التحكم في أسعار البيع المباشر لمنتجات دواجن عزيزا، تحديث المخزون، وإدارة عروض الأسبوع.</span></div><div><button className="add">⊕ إضافة منتج جديد</button><button className="download">⇩ تصدير القائمة</button></div></section>
      <div className="ap-stats"><article><i>▵</i><span>إجمالي المنتجات المسجلة<b>12</b><small>✓ معتمدة وفق نظام HACCP</small></span></article><article><i>✓</i><span>المنتجات المتوفرة حالياً<b>10</b><small>● جاهزة للشحن والتوزيع</small></span></article><article className="warning"><i>🛒</i><span>نفد من المستودعات<b>2</b><small>يتم إشعار قسم التشغيل والتعبئة</small></span></article></div>
      <section className="ap-filters"><label><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="بحث بالاسم أو الكود (مثال: AZ-101)..."/><i>⌕</i></label><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="">كل التصنيفات (الكل)</option>{[...new Set(products.map((p) => p.category))].map((item) => <option key={item}>{item}</option>)}</select><select value={availability} onChange={(event) => setAvailability(event.target.value)}><option value="">كل الحالات</option><option value="true">متوفر</option><option value="false">نفد</option></select><button onClick={() => {setQuery('');setCategory('');setAvailability('');}}>↻</button></section>
      <section className="products-table"><table><thead><tr><th>المنتج والوزن</th><th>الكود والتصنيف</th><th>السعر الرسمي (₪)</th><th>سعر العرض الترويجي</th><th>حالة التوفر</th><th>إجراءات</th></tr></thead><tbody>{shown.map((product) => <tr key={product.code}><td><div className="product-name"><img src={product.image} alt=""/><span><b>{product.name}</b><small>{product.weight}</small></span></div></td><td><code>{product.code}</code><small className="tag">{product.category}</small></td><td className="price">₪ {product.price}</td><td>{product.offer ? <b className="offer"><small>عرض خاص</small> ₪ {product.offer}</b> : <span className="no-offer">- لا يوجد عرض -</span>}</td><td><button className={`availability ${product.available ? 'yes' : 'no'}`} onClick={() => toggle(product.code)}><i/><span>{product.available ? 'متوفر' : 'نفد'}</span></button></td><td><button className="edit">⌕</button><button className="delete">♧</button></td></tr>)}{!shown.length && <tr><td className="empty" colSpan="6">لا توجد منتجات مطابقة للبحث.</td></tr>}</tbody></table><footer><span>مرتبط برمجياً:　<code>api/products/</code>　• معايير الأوزان معتمدة رسمياً</span><span>يعرض حالياً {shown.length} من 12 منتجات</span></footer></section></div>
    </section>
  </main>;
}
