import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Quality from './pages/Quality/Quality';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<MainLayout><Home/></MainLayout>}/><Route path="/products" element={<MainLayout showContact={false}><Products/></MainLayout>}/><Route path="/checkout" element={<MainLayout showContact={false}><Checkout/></MainLayout>}/><Route path="/contact" element={<MainLayout showContact={false}><Contact/></MainLayout>}/><Route path="/about" element={<MainLayout showContact={false}><About/></MainLayout>}/><Route path="/quality" element={<MainLayout showContact={false}><Quality/></MainLayout>}/><Route path="/login" element={<AdminLogin/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/></Routes></BrowserRouter>}
