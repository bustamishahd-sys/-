import { Navigate, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import './AdminOrders.css';

const orders = [
  { id: 'AZ-9041', name: 'خالد رضوان المصري', phone: '970 59 934 1120+', place: 'رام الله (الماصيون)', time: '10:45 ص', amount: '134.50', payment: 'دفع عند الاستلام', status: 'جديد' },
  { id: 'AZ-9040', name: 'سنـاء عبد الله التميمي', phone: '970 56 812 4490+', place: 'نابلس (شارع رفيديا)', time: '10:12 ص', amount: '210.00', payment: 'بطاقة ائتمانية', status: 'قيد التجهيز' },
  { id: 'AZ-9039', name: 'مطعم القدس العربي', phone: '970 59 900 8821+', place: 'طولكرم (الوسط التجاري)', time: '09:30 ص', amount: '680.00', payment: 'حساب تاجر آجل', status: 'مكتمل ومستلم' },
  { id: 'AZ-9038', name: 'إياد يوسف الجعبري', phone: '970 59 773 2199+', place: 'جنين (حي البساتين)', time: '08:50 ص', amount: '85.00', payment: 'دفع عند الاستلام', status: 'قيد التوصيل' },
  { id: 'AZ-9037', name: 'نديم بشير عودة', phone: '970 56 940 3318+', place: 'قلقيلية (شارع السبع)', time: '08:15 ص', amount: '92.00', payment: 'محفظة Jawwal Pay', status: 'مكتمل ومستلم' },
];

const statusStyle = { 'جديد': 'new', 'قيد التجهيز': 'preparing', 'مكتمل ومستلم': 'complete', 'قيد التوصيل': 'delivery' };

function Icon({ children }) { return <span className="ao-icon" aria-hidden="true">{children}</span>; }

export default function AdminOrders() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [selected, setSelected] = useState(orders[0]);
  if (!localStorage.getItem('aziza-admin-session')) return <Navigate to="/login" replace />;

  const filtered = useMemo(() => orders.filter((order) => {
    const haystack = `${order.id} ${order.name} ${order.phone}`.toLowerCase();
    return (!query || haystack.includes(query.toLowerCase())) && (!status || order.status === status);
  }), [query, status]);
  const logout = () => { localStorage.removeItem('aziza-admin-session'); navigate('/login'); };

  return <main className="admin-orders" dir="rtl">
    <aside className="ao-sidebar">
      <div className="ao-logo"><b>ع</b><span>دواجن عزيزا<small>لوحة التشغيل الموحدة</small></span></div>
      <nav>
        <button onClick={() => navigate('/admin')}><Icon>▦</Icon>الرئيسية والإحصائيات</button>
        <button className="is-active"><Icon>♧</Icon>إدارة الطلبات</button>
        <button onClick={() => navigate('/admin/products')}><Icon>▣</Icon>المنتجات والأسعار</button>
        <button onClick={() => navigate('/admin/branches')}><Icon>▱</Icon>الفروع والتوصيل</button>
        <button onClick={() => navigate('/admin/users')}><Icon>♙</Icon>المستخدمين والصلاحيات</button>
        <button><Icon>⚙</Icon>الإعدادات العامة</button>
      </nav>
      <div className="ao-version"><b>● نظام معتمد - مساح عزيزا 1997</b><br />إصدار البوابة: v2.4.0</div>
    </aside>

    <section className="ao-main">
      <header className="ao-topbar">
        <div className="ao-user"><span className="user-img">img</span><b>م. أحمد النابلسي<small>مدير العمليات المركزية</small></b><span className="bell">♟</span></div>
        <div className="ao-top-actions"><span>↗ معاينة المتجر</span><b className="live">● متصل بالنظام الميداني</b></div>
        <button onClick={logout} className="ao-logout">↪ خروج</button>
      </header>

      <div className="ao-content">
        <div className="ao-heading">
          <div><p>بوابة التشغيل　/　إدارة ومتابعة الطلبات الميدانية</p><h1>طلبات المبيعات والتوزيع <small>مباشر - خوادم المسلخ المركزية</small></h1></div>
          <div className="heading-actions"><button className="refresh">↻ تحديث فوري</button><button className="export">↥ تصدير Excel / CSV</button></div>
        </div>

        <div className="ao-stats">
          <article><Icon>▣</Icon><span>إجمالي طلبات اليوم<b>142</b></span></article>
          <article><Icon>▤</Icon><span>طلبات جديدة<b>24</b></span></article>
          <article><Icon>⚒</Icon><span>قيد التجهيز والوزن<b>18</b></span></article>
          <article><Icon>▱</Icon><span>قيد التوصيل الميداني<b>12</b></span></article>
          <article><Icon>✓</Icon><span>تم التسليم بنجاح<b>88</b></span></article>
        </div>

        <div className="ao-filters">
          <label className="search"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث برقم الطلب (مثال: #AZ-9041)، اسم العميل، أو رقم الجوال..." /><span>⌕</span></label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}><option value="">جميع الحالات</option>{Object.keys(statusStyle).map((item) => <option key={item}>{item}</option>)}</select>
          <select><option>جميع الفروع (المنطقة الغربية)</option><option>رام الله</option><option>نابلس</option></select>
          <button className="apply">⌕ تطبيق</button><button className="clear" onClick={() => { setQuery(''); setStatus(''); }}>↻ تفريغ</button>
        </div>

        <div className="ao-workspace">
          <section className="orders-list">
            <div className="list-caption"><b>▦ سجل طلبات المستودع والتوزيع المباشر</b><span>عرض 1 - 5 من إجمالي 142 طلباً</span></div>
            <div className="orders-table-wrap"><table><thead><tr><th>رقم الطلب</th><th>العميل ورقم الاتصال</th><th>المدينة / الفرع</th><th>وقت الطلب</th><th>طريقة الدفع</th><th>الإجمالي</th><th>الحالة</th><th>إجراء</th></tr></thead><tbody>
              {filtered.map((order) => <tr key={order.id} className={selected.id === order.id ? 'selected' : ''} onClick={() => setSelected(order)}>
                <td className="order-number">#{order.id}</td><td><b>{order.name}</b><small dir="ltr">{order.phone}</small></td><td>{order.place}<small className="dot">●</small></td><td>اليوم<br />{order.time}</td><td><span className="payment">{order.payment}</span></td><td className="total">₪ {order.amount}</td><td><span className={`status ${statusStyle[order.status]}`}>● {order.status}</span></td><td><button className="eye" onClick={(event) => { event.stopPropagation(); setSelected(order); }}>◉</button></td>
              </tr>)}
              {!filtered.length && <tr><td className="no-orders" colSpan="8">لا توجد طلبات مطابقة.</td></tr>}
            </tbody></table></div>
            <footer className="pagination"><span>السجلات بكل صفحة: <b>10⌄</b>　 صفحة 1 من 15</span><div><button>‹</button><button className="current">1</button><button>2</button><button>3</button><i>…</i><button>15</button><button>›</button></div></footer>
          </section>

          <aside className="order-detail">
            <header><button aria-label="طباعة">▣</button><div><b>#{selected.id}</b><small>تاريخ الطلب: 24 تشرين أول 2024 - {selected.time}</small></div></header>
            <div className="detail-contact"><b>♧ {selected.name}</b><b dir="ltr">⌕ {selected.phone}</b><span>⌖ {selected.place} - قرب قصر الثقافة، عمارة الأمل، ط 3</span></div>
            <div className="detail-note"><b>⚒ ملاحظات التقطيع والتجهيز (سماح عربي):</b><p>يرجى تقطيع الدجاجة إلى 8 قطع متوسطة الحجم مع عدم الصدور وتغليفها حرارياً بمبردة.</p></div>
            <div className="items"><b>قائمة الأصناف المطلوبة (3 أصناف):</b><div><Icon>◉</Icon><span><b>دجاج طازج كامل (مبرد)</b><small>الصنف: 1.1 كغم | الكمية: 2 حبة</small></span><strong>₪ 42.00<small>₪ 21.00/حبة</small></strong></div><div><Icon>▤</Icon><span><b>صدور دجاج مسحبة طازجة</b><small>صنف مختلف | الكمية: 2 صحن</small></span><strong>₪ 64.00<small>₪ 32.00/صحن</small></strong></div><div><Icon>♜</Icon><span><b>أجنحة دجاج متبلة جاهزة للشواء</b><small>عبوة فاخر 900 غرام | الكمية: 1</small></span><strong>₪ 18.50<small>₪ 18.50/صحن</small></strong></div></div>
            <div className="summary"><span>المجموع الفرعي للأصناف: <b>₪ 124.50</b></span><span>رسوم التوصيل المبرد: <b>₪ 10.00</b></span><strong>الإجمالي الصافي النهائي: <b>₪ {selected.amount}</b></strong></div>
            <div className="detail-actions"><small>تغيير حالة الطلب في قاعدة البيانات:</small><div><button>⌁ تحويل للتجهيز</button><button>♧ تسليم للسائق</button><button>تم الإنجاز ✓</button></div><b>إلغاء الطلب أو إرجاعه</b></div>
          </aside>
        </div>
      </div>
    </section>
  </main>;
}
