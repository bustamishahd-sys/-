import { Link } from 'react-router-dom';
import heroChickens from '../../assets/home/hero-chickens-reference.png';
import './Hero.css';

export default function Hero() {
  return <section className="hero" id="top"><div className="hero-inner"><div className="hero-copy"><span className="pill">الدجاج رقم 1 في فلسطين منذ 1977</span><h1>دجاج عزيزا..<br /><strong>طبيعي، أطيب، جودة فائقة</strong></h1><p>دجاج طازج يُربى بعناية ويصل إليك بمذاق أصيل وجودة تستحقها كل مائدة.</p><div className="stats"><span>✓ <b>+50 عاماً</b> من الخبرة</span><span>✓ حلال 100%</span></div><div className="hero-actions"><Link to="/products">تسوق منتجاتنا ←</Link><Link className="outline" to="/#branches">⌖ ابحث عن أقرب فرع</Link></div></div><div className="hero-photo"><img src={heroChickens} alt="دجاج عزيزا الطازج" /><div><b>دجاج عزيزا الطازج</b><br />طبيعي 100% ومربى بعناية</div></div></div></section>;
}
