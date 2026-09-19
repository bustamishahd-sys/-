import { useState } from 'react';
import './Contact.css';

const contactChannels = [
  ['☎', 'اتصل بنا', '0592905940', 'من 8:00 صباحًا حتى 7:00 مساءً', 'اتصل الآن'],
  ['▣', 'واتساب عزيزا', '+970 59 290 5940', 'نرد على رسائلكم بسرعة', 'مراسلة واتساب'],
  ['✉', 'البريد الإلكتروني', 'info@aziza.ps', 'للاستفسارات والملاحظات', 'إرسال بريد'],
  ['⌖', 'زيارة الفرع', 'رام الله والبيرة', 'زورونا في أقرب فرع إليكم', 'اعرض الفروع'],
];
const branches = [
  ['فرع رام الله والبيرة / الشارع الرئيسي', 'رام الله والبيرة', '8:00 ص - 7:00 م', '0592905940'],
  ['فرع نابلس', 'شارع فيصل', '8:00 ص - 7:00 م', '0592905939'],
  ['فرع الخليل', 'شارع عين سارة', '8:00 ص - 7:00 م', '0592905938'],
  ['فرع بيت لحم', 'شارع القدس - الخليل', '8:00 ص - 7:00 م', '0592905937'],
  ['فرع أريحا والأغوار', 'وسط المدينة', '8:00 ص - 7:00 م', '0592905936'],
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <>
    <section className="contact-hero"><div className="contact-hero__branch"><img src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=850&q=85" alt="أحد فروع عزيزا"/><div><b>فرع الضفة الغربية</b><span>5</span><span>25+</span><span>1997</span></div></div><div className="contact-hero__copy"><small>نحن دائمًا بالقرب منك، تواصل معنا</small><h1>تواصل مع عزيزا،<br/><em>نسعد بطلبك ونرحب بك</em></h1><p>فريقنا جاهز للاستماع إليك ومساعدتك في كل ما تحتاجه، تواصل معنا بالطريقة التي تناسبك.</p><div><a href="tel:0592905940">اتصل الآن أو اترك رسالة</a><a href="https://wa.me/970592905940">تواصل عبر واتساب</a></div></div></section>
    <section className="contact-page"><div className="contact-channels">{contactChannels.map(([icon, title, value, hint, action]) => <article key={title}><i>{icon}</i><small>متاح</small><h3>{title}</h3><b>{value}</b><p>{hint}</p><button type="button">{action}</button></article>)}</div><div className="contact-request"><aside><div className="request-note"><small>نرد خلال 24 ساعة</small><h2>تريد الانضمام لفريق عزيزا؟</h2><p>نرحب بانضمامك إلى عائلتنا. أرسل بياناتك وسيتواصل معك فريق الموارد البشرية.</p><ul><li>بيئة عمل داعمة ومحفزة</li><li>فرص للتطور والنمو المهني</li><li>مزايا وخصومات للموظفين</li></ul><button type="button">تصفح شواغرنا الحالية ←</button></div><div className="delivery-note"><i>♻</i><b>توصيل طازج حتى باب بيتك 100%</b><p>نحافظ على جودة منتجاتنا حتى تصل إليك.</p></div><div className="hours-note"><b>مواعيد خدمة العملاء</b><span>السبت - الخميس: 8:00 ص - 7:00 م</span><span>الجمعة: 10:00 ص - 4:00 م</span></div></aside><form className="contact-form" onSubmit={submit}><small>نحن هنا للاستماع إليك</small><h2>أرسل استفسارك أو طلبك لفريق عزيزا</h2><p>املأ النموذج أدناه وسيتواصل معك أحد ممثلي خدمة العملاء في أقرب وقت.</p><div className="contact-form__fields"><label>الاسم الكامل *<input required placeholder="اكتب اسمك"/></label><label>رقم الجوال *<input required type="tel" placeholder="059 xxxxxxxx"/></label><label>البريد الإلكتروني *<input required type="email" placeholder="name@domain.ps"/></label><label>الموضوع / الاستفسار *<select required defaultValue=""><option value="" disabled>اختر نوع الاستفسار</option><option>طلب عام</option><option>شكوى أو اقتراح</option><option>استفسار عن الفروع</option></select></label><label className="contact-form__wide">تفاصيل الرسالة *<textarea required rows="5" placeholder="اكتب رسالتك أو استفسارك هنا..."/></label></div>{sent && <p className="contact-form__success">تم إرسال رسالتك بنجاح، شكرًا لتواصلك مع عزيزا.</p>}<button type="submit">إرسال رسالتي الآن ←</button></form></div></section>
    <section className="branches-section"><header><small>شبكة توزيع تغطي مناطق عديدة</small><h2>شبكة فروع عزيزا المعتمدة</h2><p>اختر أقرب فرع إليك وتعرّف على ساعات الدوام وطرق التواصل المباشرة.</p></header><div className="branches-grid">{branches.map(([title, address, hours, phone], index) => <article className={index === 0 ? 'branch-card branch-card--featured' : 'branch-card'} key={title}><i>⌖</i><small>{index === 0 ? 'الفرع الرئيسي' : 'فرع معتمد'}</small><h3>{title}</h3><p>⌖ {address}</p><p>◷ {hours}</p><b>{phone}</b><button type="button">عرض تفاصيل الفرع</button></article>)}</div></section>
    <section className="map-section"><div className="map-placeholder"><div className="map-roads"></div><b>⌖</b><span>رام الله والبيرة</span><small>خريطة فروع عزيزا</small></div><div className="map-copy"><small>نغطي مناطق متعددة</small><h2>خدمة توصيل تشمل المحافظات القريبة</h2><p>للتأكد من إمكانية التوصيل إلى منطقتك، تواصل مع فريق خدمة العملاء وسنساعدك بكل سرور.</p><ul><li>رام الله والبيرة</li><li>نابلس</li><li>بيت لحم والخليل</li></ul><div>♻ نلتزم بسلسلة تبريد آمنة للحفاظ على طزاجة منتجاتك</div></div></section>
    <section className="contact-cta"><div><small>خدمة العملاء جاهزة لمساعدتك</small><h2>هل لديك ملاحظة حول منتجات عزيزا أو أحد الفروع؟</h2><p>تواصل معنا الآن، فريقنا هنا من أجلك طوال أيام الأسبوع.</p></div><div><a href="tel:0592905940">☎ 0592905940</a><a href="https://wa.me/970592905940">تواصل عبر واتساب</a></div></section>
  </>;
}
