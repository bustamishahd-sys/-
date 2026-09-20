import { useState } from 'react';
import ProductsHero from '../../components/ProductsHero/ProductsHero';
import ListingProductCard from '../../components/ListingProductCard/ListingProductCard';
import './Products.css';

const categoryDefinitions = [
  { id: 'whole-chicken', name: 'دجاج كامل مبرد' },
  { id: 'chicken-breast', name: 'صدور دجاج' },
  { id: 'fresh-cuts', name: 'أفخاذ ومنتجات طازجة' },
  { id: 'liver-offal', name: 'كبدة وأحشاء' },
  { id: 'value-boxes', name: 'باقات التوفير' },
];

const products = [
  { id: 'whole-chicken-fresh', name: 'دجاج كامل مبرد', price: '19.50', weight: '1000-1100 غ', img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=85', label: 'الأكثر مبيعاً', categoryId: 'whole-chicken' },
  { id: 'chicken-breast-fresh', name: 'صدور دجاج طازجة', price: '27.00', weight: '900 غ', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85', label: 'خصم 27%', categoryId: 'chicken-breast' },
  { id: 'chicken-thighs-fresh', name: 'أفخاذ دجاج طازجة (بوس)', price: '18.00', weight: '1000 غ', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85', label: 'عرض يومي', categoryId: 'fresh-cuts' },
  { id: 'chicken-liver-fresh', name: 'كبد دجاج طازج', price: '13.50', weight: '500 غ', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=85', label: 'طازج يومياً', categoryId: 'liver-offal' },
  { id: 'chicken-wings-fresh', name: 'أجنحة دجاج طازجة', price: '14.00', weight: '900 غ', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=85', label: 'منتجات عزيزا', categoryId: 'fresh-cuts' },
  { id: 'marinated-chicken', name: 'تتبيلة طاووق دجاج طازج', price: '29.50', weight: '800 غ', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85', label: 'جاهز للشواء', categoryId: 'chicken-breast' },
  { id: 'whole-chicken-frozen', name: 'دجاج كامل مجمد عزيزا', price: '17.00', weight: '1100-1200 غ', img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=85', label: 'مجمد سريعاً', categoryId: 'whole-chicken' },
  { id: 'aziza-family-box', name: 'صندوق عزيزا العائلي الكبير', price: '79.00', weight: '3.9 كغ', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=85', label: 'وفّر 16 ₪', categoryId: 'value-boxes' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'جميع المنتجات', count: products.length },
    ...categoryDefinitions.map((category) => ({
      ...category,
      count: products.filter((product) => product.categoryId === category.id).length,
    })),
  ];
  const visibleProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.categoryId === selectedCategory);

  return <>
    <ProductsHero/>
    <section className="catalog">
      <div className="catalog__categories" aria-label="تصفية المنتجات حسب التصنيف">
        {categories.map((category) => <button type="button" className={selectedCategory === category.id ? 'active' : ''} aria-pressed={selectedCategory === category.id} key={category.id} onClick={() => setSelectedCategory(category.id)}>{category.name} ({category.count})</button>)}
      </div>
      <div className="catalog__grid">
        {visibleProducts.map((product) => <ListingProductCard key={product.id} name={product.name} price={product.price} weight={product.weight} img={product.img} label={product.label}/>)}
      </div>
    </section>
    <section className="catalog-quality">
      <div><span>نعتني بأدق التفاصيل</span><h2>عزيزا.. جودة موثوقة بمعايير عالمية</h2><p>نحرص على معايير السلامة والجودة في كل مرحلة لتصل إليك منتجاتنا بأفضل صورة.</p></div>
      <div className="catalog-quality__grid"><article><i>✿</i><b>CERTIFIED FSSC 22000</b><h3>شهادة نظام إدارة سلامة الغذاء</h3><p>أفضل ممارسات سلامة الغذاء.</p></article><article><i>♧</i><b>ISO 22000 CERTIFIED</b><h3>المعيار الدولي لسلامة الأغذية</h3><p>جودة موثوقة في كل منتج.</p></article><article><i>⌁</i><b>HACCP SYSTEM</b><h3>تحليل المخاطر ونقاط التحكم الحرجة</h3><p>رقابة مستمرة على كل مرحلة.</p></article></div>
    </section>
  </>;
}
