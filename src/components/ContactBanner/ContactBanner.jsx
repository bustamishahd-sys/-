import './ContactBanner.css';

export default function ContactBanner(){
  return <section className="contact-banner" aria-label="التواصل">
    <div className="contact-banner__card">
      <div>
        <span>✦ انضم إلى عائلة عزيزا</span>
        <h2>جاهزون لتلبية احتياجاتك وتجارتك</h2>
        <p>تواصل معنا الآن للحصول على أفضل منتجات الدجاج الطازج.</p>
      </div>
      <div className="contact-banner__actions">
        <button>اطلب الآن 0592905940</button>
        <button>تحدث مع فريق المبيعات</button>
      </div>
    </div>
  </section>
}
