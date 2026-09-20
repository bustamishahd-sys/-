import { Outlet } from 'react-router-dom';

// Temporary development preview: the dashboard is intentionally public until real API auth is added.
export default function ProtectedRoute() { return <Outlet/>; }
