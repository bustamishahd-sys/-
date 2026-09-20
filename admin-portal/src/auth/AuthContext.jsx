import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => JSON.parse(localStorage.getItem('aziza-demo-admin') || 'null'));
  const value = useMemo(() => ({ admin, login: (username, remember) => { const next = { username, role: 'demo_admin' }; setAdmin(next); if (remember) localStorage.setItem('aziza-demo-admin', JSON.stringify(next)); }, logout: () => { localStorage.removeItem('aziza-demo-admin'); setAdmin(null); } }), [admin]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
