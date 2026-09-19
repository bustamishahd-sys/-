import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const paymentMethods = [
  { id: 'cash', title: 'الدفع عند الاستلام', text: 'ادفع نقدًا عند وصول طلبك إلى باب المنزل.', icon: '◉' },
  { id: 'card', title: 'البطاقة البنكية', text: 'واجهة اختيار فقط؛ لا توجد عملية دفع إلكتروني مفعّلة حاليًا.', icon: '▣' },
  { id: 'wallet', title: 'المحفظة الإلكترونية', text: 'واجهة اختيار فقط؛ ستتوفر قريبًا.', icon: '◈' },
];
const initialForm = { name: '', phone: '', email: '', city: '', address: '', notes: '', payment: 'cash' };

export default function Checkout() {
  const { items, subtotal, updateQuantity, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const delivery = subtotal >= 150 || subtotal === 0 ? 0 : 12;
  const total = subtotal + delivery;
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'يرجى إدخال الاسم الكامل.';
    if (!form.phone.trim()) next.phone = 'يرجى إدخال رقم الهاتف.';
    else if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) next.phone = 'يرجى إدخال رقم هاتف صحيح.';
    if (!form.city) next.city = 'يرجى اختيار المدينة أو المنطقة.';
    if (!form.address.trim()) next.address = 'يرجى إدخال عنوان التوصيل بالتفصيل.';
    if (!items.length) next.cart = 'السلة فارغة. أضف منتجات قبل إتمام الطلب.';
    setErrors(next);
    if (!Object.keys(next).length) { setSuccess(true); clearCart(); }
  };
  if (success) return <section className="checkout checkout--success"><div className="checkout-success"><i>✓</i><span>تم استلام طلبك بنجاح</span><h1>شكرًا لاختيارك عزيزا</h1><p>سيتواصل فريقنا معك قريبًا لتأكيد الطلب وموعد التوصيل.</p><Link to="/products">العودة إلى المنتجات</Link></div></section>;
  return <section className="checkout"><div className="checkout__heading"><div><span>إتمام الطلب</span><h1>بيانات التوصيل والسداد</h1><p>أكمل بياناتك لنصل بطلبك طازجًا إلى بابك.</p></div><Link to="/products">← متابعة التسوق</Link></div><form className="checkout__layout" onSubmit={submit} noValidate><div className="checkout__forms"><fieldset className="checkout-card"><legend><i>♙</i> بيانات المستلم والتواصل</legend><p className="checkout-card__intro">الحقول المعلّمة بـ <b>*</b> مطلوبة لإتمام الطلب.</p><div className="checkout-fields checkout-fields--two"><Field label="الاسم الكامل" name="name" value={form.name} onChange={update} error={errors.name} required/><Field label="رقم الهاتف" name="phone" value={form.phone} onChange={update} error={errors.phone} required type="tel" placeholder="059 XXX XXXX"/><Field label="البريد الإلكتروني" name="email" value={form.email} onChange={update} type="email" placeholder="example@email.com"/></div></fieldset><fieldset className="checkout-card"><legend><i>⌖</i> عنوان التوصيل وتفضيلاته</legend><div className="checkout-fields checkout-fields--two"><label className={errors.city ? 'has-error' : ''}>المدينة / المنطقة <b>*</b><select name="city" value={form.city} onChange={update}><option value="">اختر المدينة أو المنطقة</option><option>رام الله والبيرة</option><option>نابلس</option><option>الخليل</option><option>القدس</option><option>بيت لحم</option><option>أخرى</option></select>{errors.city && <small>{errors.city}</small>}</label><Field label="العنوان بالتفصيل" name="address" value={form.address} onChange={update} error={errors.address} required placeholder="الحي، الشارع، رقم البناية"/><label className="checkout-fields__full">ملاحظات التوصيل<textarea name="notes" value={form.notes} onChange={update} placeholder="مثال: الاتصال قبل الوصول، أو وصف إضافي للموقع." rows="3"/></label></div></fieldset><fieldset className="checkout-card"><legend><i>▣</i> طريقة الدفع</legend><div className="payment-options">{paymentMethods.map((method) => <label className={form.payment === method.id ? 'payment-option active' : 'payment-option'} key={method.id}><input type="radio" name="payment" value={method.id} checked={form.payment === method.id} onChange={update}/><i>{method.icon}</i><span><b>{method.title}</b><small>{method.text}</small></span></label>)}</div></fieldset></div><aside className="order-summary"><div className="order-summary__head"><h2>ملخص السلة</h2><span>{items.length} منتجات</span></div>{items.length ? <div className="order-items">{items.map((item) => <article className="order-item" key={item.id}><img src={item.img} alt={item.name}/><div><h3>{item.name}</h3><b>{Number(item.price).toFixed(2)} <small>₪</small></b><div className="quantity"><button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="تقليل الكمية">−</button><span>{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="زيادة الكمية">+</button></div></div></article>)}</div> : <div className="order-empty"><i>🛒</i><p>سلتك فارغة حاليًا.</p><Link to="/products">تصفح المنتجات</Link></div>}<div className="summary-lines"><p><span>المجموع الفرعي</span><b>{subtotal.toFixed(2)} ₪</b></p><p><span>رسوم التوصيل</span><b className={delivery === 0 ? 'free' : ''}>{delivery === 0 ? 'مجاني' : `${delivery.toFixed(2)} ₪`}</b></p><p className="summary-total"><span>المجموع النهائي</span><b>{total.toFixed(2)} <small>₪</small></b></p></div>{errors.cart && <p className="cart-error">{errors.cart}</p>}<button className="place-order" type="submit">تأكيد الطلب وإرساله <span>←</span></button><small className="order-summary__note">بالضغط على الزر، سيتم إرسال طلبك للمراجعة والتأكيد عبر فريق عزيزا.</small></aside></form></section>;
}

function Field({ label, name, value, onChange, error, required, type = 'text', placeholder }) {
  return <label className={error ? 'has-error' : ''}>{label} {required && <b>*</b>}<input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>{error && <small>{error}</small>}</label>;
}
