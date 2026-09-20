import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminLayout from './layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';

export default function App() { return <AuthProvider><Routes><Route path="/login" element={<Login/>}/><Route element={<ProtectedRoute/>}><Route element={<AdminLayout/>}><Route path="/dashboard" element={<Dashboard/>}/><Route path="/orders" element={<Orders/>}/><Route path="/orders/:id" element={<OrderDetails/>}/></Route></Route><Route path="*" element={<Navigate to="/dashboard" replace/>}/></Routes></AuthProvider>; }
