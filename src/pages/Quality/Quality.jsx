import './Quality.css';
import './QualityLinks.css';
import { Link } from 'react-router-dom';
import heroProduct from '../../assets/quality/quality-hero-product.png';

const procedures = [
  ['1', 'استلام الدواجن', 'فحص الدواجن عند الاستلام والتأكد من مطابقتها لشروط السلامة والجودة.'],
  ['2', 'الفحص البيطري', 'إجراء الفحوصات البيطرية اللازمة قبل انتقال الدواجن إلى خط الإنتاج.'],
  ['3', 'الذبح الحلال', 'تطبيق إجراءات الذبح الحلال تحت إشراف فريق متخصص.'],
  ['4', 'التبريد السريع', 'خفض درجة الحرارة بسرعة للحفاظ على جودة المنتج وسلامته.'],
  ['5', 'التعبئة (Air Chilling)', 'تعبئة آمنة تحافظ على الطزاجة وتمنع انتقال الملوثات.'],
  ['6', 'الفحص والترقيم', 'فحص المنتج ووضع بيانات التتبع قبل خروجه من المصنع.'],
  ['7', 'الرقابة المخبرية', 'تحاليل دورية للتأكد من سلامة المنتج في كل مرحلة.'],
  ['8', 'التخزين والتوزيع', 'حفظ المنتجات ضمن سلسلة تبريد موثوقة حتى تصل إليكم.'],
];

const certificates = ['FSSC 22000', 'ISO 22000', 'HACCP SYSTEM', 'حلال 100%'];

function InfoCard({ icon, title, text }) {
  return <article className="quality-card"><i>{icon}</i><h3>{title}</h3><p>{text}</p><a href="#details">اعرف المزيد</a></article>;
}

export default function Quality() {
  return <div className="quality-page">
    <section className="quality-hero">
      <div className="quality-hero__inner">
        <aside className="quality-hero__product"><b>منتج اليوم</b><img src={heroProduct} alt="دجاج عزيزا" /><strong>دجاج عزيزا الطازج</strong><small>مختار بعناية، بجودة موثوقة</small><div><span>2011<br /><em>منذ</em></span><span>3,000<br /><em>متر مربع</em></span><span>100%<br /><em>حلال</em></span></div></aside>
        <div className="quality-hero__content"><span>من المزرعة إلى مائدتكم، بعناية</span><h1>الجودة، سلامة الغذاء، والسلاسل الحديثة</h1><p>نلتزم بأعلى معايير سلامة الغذاء لضمان منتجات طازجة وآمنة في كل مرة.</p><div className="quality-hero__badges"><b>شهادة FSSC 22000</b><b>شهادة ISO 22000</b><b>نظام HACCP</b></div></div>
      </div>
    </section>
    <nav className="quality-subnav"><a href="#company">عن الشركة</a><a href="#quality-system">نظام الجودة</a><a href="#certificates">الاعتمادات والشهادات</a><a href="#details">تقنيات التعبئة والتبريد</a></nav>

    <section className="quality-section" id="company"><header><span>جودة تُرى في كل تفصيلة</span><h2>المسلخ المركزي الحديث في طولكرم</h2><p>منذ انطلاقنا، نعمل وفق منظومة متكاملة تضع سلامة الغذاء وجودته في مقدمة أولوياتنا.</p></header><div className="quality-intro"><img src={heroProduct} alt="منشأة عزيزا" /><div><b>نظام الجودة المتكامل</b><p>نطبق إجراءات دقيقة تضمن الرقابة المستمرة من الاستلام حتى وصول المنتج إلى المستهلك.</p><div className="quality-numbers"><span><strong>2011</strong> سنة التأسيس</span><span><strong>3,000</strong> متر مربع</span><span><strong>100%</strong> حلال</span><span><strong>0–4°C</strong> سلسلة التبريد</span></div></div></div></section>

    <section className="quality-section" id="quality-system"><header><h2>نظام الجودة وسلامة الغذاء</h2><p>إجراءات موثقة ورقابة مستمرة في كل مرحلة من مراحل الإنتاج.</p></header><div className="procedure-grid">{procedures.map(([number,title,text]) => <article key={number}><b>{number}</b><i>◌</i><h3>{title}</h3><p>{text}</p><small>إجراءات تشغيل موحدة</small></article>)}</div></section>

    <section className="quality-section" id="certificates"><header><h2>اعتمادات الجودة وسلامة الأغذية</h2><p>شهادات عالمية تثبت التزامنا بأفضل ممارسات الجودة والسلامة.</p></header><div className="certificate-grid">{certificates.map((item,index)=><InfoCard key={item} icon={index === 0 ? '◈' : '✓'} title={item} text="نلتزم بمتطلبات هذا المعيار لضمان سلامة وجودة منتجاتنا." />)}</div><div className="quality-statbar"><span>✓ رقابة بيطرية مستمرة</span><span>♙ فريق جودة متخصص</span><span>▣ شفافية كاملة للتتبع</span></div></section>

    <section className="quality-section" id="details"><header><h2>تقنيات التعبئة وسلسلة التبريد الموثوقة</h2><p>نحافظ على الطزاجة من خلال تقنيات حديثة تضمن وصول المنتج بأفضل حالة.</p></header><div className="detail-grid"><InfoCard icon="❄" title="التبريد السريع والتخزين الآمن" text="نظام تبريد متطور يحافظ على درجات الحرارة المناسبة طوال الوقت." /><InfoCard icon="▣" title="التعبئة والتغليف المحكم" text="عبوات مصممة للحفاظ على جودة المنتج وسهولة تخزينه." /></div><div className="quality-strip"><b>سلسلة تبريد متكاملة</b><span>التبريد 0–4°C</span><span>التجميد -18°C</span><span>التوزيع المبرد</span></div></section>

    <section className="quality-section"><header><h2>المختبر الداخلي وبروتوكول التعقيم المستمر</h2><p>فحوصات دقيقة وإجراءات تعقيم صارمة لضمان سلامة كل منتج.</p></header><div className="detail-grid"><InfoCard icon="⌁" title="فحوصات ميكروبيولوجية يومية" text="تحاليل دورية للمنتجات والأسطح وبيئة العمل." /><InfoCard icon="⌕" title="برنامج تعقيم وتنظيف شامل" text="خطة موثقة للتنظيف والتعقيم والمتابعة المستمرة." /></div></section>

    <section className="quality-section quality-commitment"><header><h2>ثقافة مشتركة، كل فرد مسؤول عن سلامتك</h2></header><div className="commitment-grid"><InfoCard icon="✓" title="التدريب المستمر" text="تدريب فريق العمل على أحدث إجراءات الجودة." /><InfoCard icon="✓" title="المسؤولية والشفافية" text="نؤمن بأن الجودة مسؤولية مشتركة في كل يوم." /><InfoCard icon="✓" title="التحسين المستمر" text="نطور عملياتنا باستمرار لتحقيق أفضل النتائج." /></div></section>
    <section className="quality-cta"><h2>اطلب منتجات عزيزا الطازجة الآن واستمتع بجودة تلبي ذوقك</h2><p>منتجات طازجة، موثوقة، ومجهزة بعناية لتصل إليك بأفضل صورة.</p><Link className="quality-cta__link" to="/products">تصفح منتجاتنا</Link><Link className="quality-cta__link" to="/contact">تواصل معنا</Link></section>
  </div>;
}
