import './ListingProductCard.css';
import wholeChicken from '../../assets/products/whole-chicken.png';
import chickenBreast from '../../assets/products/chicken-breast.png';
import chickenThighs from '../../assets/products/chicken-thighs.png';
import chickenLiver from '../../assets/products/chicken-liver.png';
import chickenWings from '../../assets/products/chicken-wings.png';
import marinatedChicken from '../../assets/products/marinated-chicken.png';
import frozenChicken from '../../assets/products/frozen-chicken.png';
import familyBox from '../../assets/products/family-box.png';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const referenceImages = {
  '19.50': wholeChicken,
  '27.00': chickenBreast,
  '18.00': chickenThighs,
  '13.50': chickenLiver,
  '14.00': chickenWings,
  '29.50': marinatedChicken,
  '17.00': frozenChicken,
  '79.00': familyBox,
};

export default function ListingProductCard({ name, price, weight, img }) {
  const productImage = referenceImages[price] ?? img;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => addItem({ id: `${name}-${price}`, name, price, img: productImage, weight }, quantity);

  return (
    <article className="listing-card">
      <div className="listing-card__image">
        <img src={productImage} alt={name} />
      </div>
      <small className="listing-card__temp">❄ 4°C - 0°</small>
      <div className="listing-card__body">
        <small>متوفر الآن</small>
        <h2>{name}</h2>
        <p>وزن تقريبي: {weight}</p>
        <p>منتج طازج بعناية فائقة وجودة موثوقة.</p>
        <div className="listing-card__buy">
          <b>{price} <small>₪</small></b>
          <div>
            <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="تقليل الكمية">−</button><span>{quantity}</span><button type="button" onClick={() => setQuantity((current) => current + 1)} aria-label="زيادة الكمية">+</button>
            <button type="button" className="listing-card__add" onClick={addToCart}>أضف للسلة 🛒</button>
          </div>
        </div>
      </div>
    </article>
  );
}
