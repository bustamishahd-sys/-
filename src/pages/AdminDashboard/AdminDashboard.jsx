import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const statuses = ['جديد', 'قيد التجهيز', 'قيد التوصيل', 'مكتمل'];
const statusClass = { 'جديد': 'new', 'قيد التجهيز': 'prep', 'قيد التوصيل': 'ship', 'مكتمل': 'done' };

/* بيانات تجريبية. */
const orders = [
  { id: 'AZ-1048', name: 'سارة خليل كنعان', note: 'قبل 5 دقائق', phone: '0599-245108', branch: 'رام الله - الماصيون', total: '185.00', status: 'جديد' },
  { id: 'AZ-1047', name: 'مطعم القدس للمشويات', note: 'طلب تجاري / فنادق', phone: '0598-112340', branch: 'طولكرم - شارع يافا', total: '1,420.00', status: 'قيد التجهيز' },
  { id: 'AZ-1046', name: 'طارق عبد الفتاح عودة', note: 'قبل 22 دقيقة', phone: '0569-897120', branch: 'نابلس - رفيديا', total: '94.50', status: 'قيد التوصيل' },
  { id: 'AZ-1045', name: 'رنا مصطفى المصري', note: 'قبل 45 دقيقة', phone: '0595-334189', branch: 'جنين - الدوار الرئيسي', total: '210.00', status: 'مكتمل' },
  { id: 'AZ-1044', name: 'محمود جمال البيطار', note: 'قبل ساعة', phone: '0568-712903', branch: 'قلقيلية - حي نزال', total: '132.00', status: 'مكتمل' },
];
const pages = [1, 2, 3, '…', 10];

/* مبيعات الأسبوع: أول عنصر يظهر على اليمين (RTL) وآخر عنصر هو "اليوم". */
const weekSales = [
  { day: 'السبت', value: 11600 },
  { day: 'الأحد', value: 8400 },
  { day: 'الاثنين', value: 13500 },
  { day: 'الثلاثاء', value: 9700 },
  { day: 'الأربعاء', value: 13800 },
  { day: 'الخميس', value: 17200, note: 'عطلة نهاية الأسبوع' },
  { day: 'اليوم', value: 14450 },
];

/* توزيع الطلبات حسب الفروع: [الاسم، عدد الطلبات، اللون]. */
const branchShare = [
  ['طولكرم (المركز الرئيسي)', 47, '#003d22'],
  ['نابلس', 38, '#175a3c'],
  ['رام الله والبيرة', 30, '#00703c'],
  ['جنين', 21, '#7dd89e'],
  ['قلقيلية', 12, '#f4b426'],
];

const money = (n) => n.toLocaleString('en-US');

const maxSale = Math.max(...weekSales.map((d) => d.value));
const weekTotal = weekSales.reduce((sum, d) => sum + d.value, 0);
const peakDay = weekSales.find((d) => d.value === maxSale);

const totalOrders = branchShare.reduce((sum, b) => sum + b[1], 0);
let offset = 0;
const donutStops = branchShare
  .map(([, count, color]) => {
    const start = offset;
    offset += (count / totalOrders) * 100;
    return `${color} ${start}% ${offset}%`;
  })
  .join(', ');

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  if (!localStorage.getItem('aziza-admin-session')) return <Navigate to="/login" replace />;

  const term = query.trim().replace(/^#/, '').toLowerCase();
  const visibleOrders = orders.filter((o) =>
    (statusFilter === 'all' || o.status === statusFilter) &&
    (!term || o.id.toLowerCase().includes(term) || o.name.toLowerCase().includes(term)));
  const isFiltered = statusFilter !== 'all' || term !== '';
  const logout = () => { localStorage.removeItem('aziza-admin-session'); navigate('/login'); };

  return <main className="admin">
    <aside>
      <div className="admin-brand">ع <span>دواجن عزيزا<small>لوحة التشغيل الموحدة</small></span></div>
      <b className="active">▦ الرئيسية والإحصائيات</b>
      <button type="button" className="admin-nav-link" onClick={() => navigate('/admin/orders')}>▣ إدارة الطلبات</button>
      <button type="button" className="admin-nav-link" onClick={() => navigate('/admin/products')}>▤ المنتجات والأسعار</button>
      <button type="button" className="admin-nav-link" onClick={() => navigate('/admin/branches')}>▱ الفروع والتوصيل</button>
      <button type="button" className="admin-nav-link" onClick={() => navigate('/admin/users')}>♙ المستخدمين والصلاحيات</button>
      <span>⚙ الإعدادات العامة</span>
      <small className="admin-demo">بيانات Demo فقط<br />غير متصلة بمتجر العميل</small>
    </aside>

    <section>
      <header>
        <button onClick={logout}>⎋ خروج</button>
        <div>🔔 <b>مدير تجريبي<small>وضع معاينة</small></b></div>
      </header>

      <div className="admin-content">
        <div className="admin-title">
          <h1>نظرة عامة على العمليات</h1>
          <p>بيانات تشغيلية تجريبية للعرض فقط</p>
        </div>

        <div className="metrics">
          {[
            ['طلبات اليوم', '148', '↗ 12.4%'],
            ['إجمالي مبيعات اليوم', '12,450 ₪', '↗ 8.1%'],
            ['طلبات قيد التجهيز', '18', 'المسخ والتجهيز'],
            ['الشحنات النشطة', '12', 'متوفرة بالكامل'],
          ].map((x) => <article key={x[0]}><i>▣</i><small>{x[0]}</small><b>{x[1]}</b><em>{x[2]}</em></article>)}
        </div>

        <div className="admin-grid">
          {/* ===== مبيعات الأسبوع ===== */}
          <article className="chart">
            <div className="card-head">
              <div>
                <h2>مبيعات الأسبوع المنصرم</h2>
                <p>إجمالي المبيعات اليومية بالشيكل (₪)</p>
              </div>
              <span className="chart-badge"><i aria-hidden="true" />آخر 7 أيام</span>
            </div>

            <div className="bar-chart" role="img" aria-label={`مبيعات آخر 7 أيام، المجموع ${money(weekTotal)} شيكل`}>
              <div className="bar-grid" aria-hidden="true"><i /><i /><i /></div>
              <div className="bar-cols">
                {weekSales.map((d, index) => {
                  const isToday = index === weekSales.length - 1;
                  const isPeak = d === peakDay;
                  const barClass = ['bar', isPeak && 'bar--peak', isToday && 'bar--today'].filter(Boolean).join(' ');
                  return <div className="bar-col" key={d.day}>
                    <div className="bar-track">
                      <span className={barClass} style={{ height: `${(d.value / maxSale) * 80}%` }} title={`${money(d.value)} ₪`} />
                    </div>
                    <span className={isPeak || isToday ? 'bar-label bar-label--strong' : 'bar-label'}>{d.day}</span>
                  </div>;
                })}
              </div>
            </div>

            <div className="chart-summary">
              <span>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m7.5 12.5 3 3 6-6.5" /></svg>
                أعلى مبيعات: يوم {peakDay.day}{peakDay.note ? ` (${peakDay.note})` : ''} بمعدل {money(peakDay.value)} ₪
              </span>
              <b>المجموع: {money(weekTotal)} ₪</b>
            </div>
          </article>

          {/* ===== توزيع الطلبات حسب الفروع ===== */}
          <article className="donut">
            <div className="card-head">
              <div>
                <h2>توزيع الطلبات حسب الفروع</h2>
                <p>النسبة المئوية عبر الفروع الخمسة</p>
              </div>
            </div>

            <div className="donut-ring" style={{ background: `conic-gradient(${donutStops})` }} role="img" aria-label="توزيع الطلبات على الفروع الخمسة">
              <div className="donut-hole">
                <strong>{totalOrders}</strong>
                <small>إجمالي الطلبات</small>
              </div>
            </div>

            <ul className="donut-legend">
              {branchShare.map(([name, count, color]) => <li key={name}>
                <span><i style={{ background: color }} />{name}</span>
                <bdi dir="ltr">({count}) {Math.round((count / totalOrders) * 100)}%</bdi>
              </li>)}
            </ul>
          </article>
        </div>

        <article className="orders">
          <div className="orders-head">
            <div>
              <h2>أحدث الطلبات الواردة</h2>
              <p>تحديث حي ومباشر لطلبات الزبائن والمطاعم</p>
            </div>
            <div className="orders-tools">
              <label className="orders-search">
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="بحث برقم الطلب أو اسم العميل..." aria-label="بحث في الطلبات" />
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
              </label>
              <select className="orders-filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} aria-label="تصفية حسب الحالة">
                <option value="all">جميع الحالات</option>
                {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="orders-scroll">
            <table>
              <thead>
                <tr><th>رقم الطلب</th><th>العميل</th><th>رقم الهاتف</th><th>الفرع المخصص</th><th>المجموع</th><th>حالة الطلب</th><th>الإجراء</th></tr>
              </thead>
              <tbody>
                {visibleOrders.length ? visibleOrders.map((o) => <tr key={o.id}>
                  <td className="order-id"><bdi dir="ltr">#{o.id}</bdi></td>
                  <td>
                    <div className="order-customer">
                      <span className="order-avatar" aria-hidden="true">{o.name.charAt(0)}</span>
                      <span><b>{o.name}</b><small>{o.note}</small></span>
                    </div>
                  </td>
                  <td><bdi dir="ltr">{o.phone}</bdi></td>
                  <td>{o.branch}</td>
                  <td className="order-total">{o.total} ₪</td>
                  <td><span className={`order-status order-status--${statusClass[o.status]}`}><i aria-hidden="true" />{o.status}</span></td>
                  <td><button type="button" className="order-view">عرض التفاصيل</button></td>
                </tr>) : <tr><td className="orders-empty" colSpan={7}>لا توجد طلبات مطابقة للبحث أو التصفية.</td></tr>}
              </tbody>
            </table>
          </div>

          <div className="orders-foot">
            <span>{isFiltered ? `عرض ${visibleOrders.length} من ${orders.length} طلبات` : `عرض 1 - ${orders.length} من إجمالي 148 طلباً اليوم`}</span>
            <div className="orders-pages" role="navigation" aria-label="التنقل بين صفحات الطلبات">
              <button type="button" className="orders-pages__text" disabled>السابق</button>
              {pages.map((p, i) => p === '…'
                ? <span key={`gap-${i}`} aria-hidden="true">…</span>
                : <button type="button" key={p} className={p === 1 ? 'active' : ''} aria-current={p === 1 ? 'page' : undefined}>{p}</button>)}
              <button type="button" className="orders-pages__text">التالي</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>;
}
