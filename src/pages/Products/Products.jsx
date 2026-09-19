import ProductsHero from '../../components/ProductsHero/ProductsHero';
import ListingProductCard from '../../components/ListingProductCard/ListingProductCard';
import './Products.css';

const products=[
 ['دجاج كامل مبرد','19.50','1000-1100 غ','https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=85','الأكثر مبيعاً'],
 ['صدور دجاج طازجة','27.00','900 غ','https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85','خصم 27%'],
 ['أفخاذ دجاج طازجة (بوس)','18.00','1000 غ','https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85','عرض يومي'],
 ['كبد دجاج طازج','13.50','500 غ','https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=85','طازج يومياً'],
 ['أجنحة دجاج طازجة','14.00','900 غ','https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85','منتجات عزيزا'],
 ['تتبيلة طاووق دجاج طازج','29.50','800 غ','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85','جاهز للشواء'],
 ['دجاج كامل مجمد عزيزا','17.00','1100-1200 غ','https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=85','مجمد سريعاً'],
 ['صندوق عزيزا العائلي الكبير','79.00','3.9 كغ','https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=85','وفر 16 ₪']
];
const categories=['جميع المنتجات (8)','دجاج كامل مبرد (2)','صدور دجاج (2)','أفخاذ ومنتجات طازجة (2)','كبدة وأحشاء (1)','باقات التوفير (1)'];
export default function Products(){return <><ProductsHero/><section className="catalog"><div className="catalog__categories">{categories.map((item,index)=><button className={index===0?'active':''} key={item}>{item}</button>)}</div><div className="catalog__grid">{products.map(([name,price,weight,img,label])=><ListingProductCard key={name} name={name} price={price} weight={weight} img={img} label={label}/>)}</div></section><section className="catalog-quality"><div><span>نعتني بأدق التفاصيل</span><h2>عزيزا.. جودة موثوقة بمعايير عالمية</h2><p>نحرص على معايير السلامة والجودة في كل مرحلة لتصل إليك منتجاتنا بأفضل صورة.</p></div><div className="catalog-quality__grid"><article><i>✿</i><b>CERTIFIED FSSC 22000</b><h3>شهادة نظام إدارة سلامة الغذاء</h3><p>أفضل ممارسات سلامة الغذاء.</p></article><article><i>♧</i><b>ISO 22000 CERTIFIED</b><h3>المعيار الدولي لسلامة الأغذية</h3><p>جودة موثوقة في كل منتج.</p></article><article><i>⌁</i><b>HACCP SYSTEM</b><h3>تحليل المخاطر ونقاط التحكم الحرجة</h3><p>رقابة مستمرة على كل مرحلة.</p></article></div></section></>}
