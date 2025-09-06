// Layout.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Map, Bell, FileText, User, BarChart3 } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <style>{`
        :root{--primary:#1B4332;--secondary:#2D6A4F;--accent:#E07A5F;--card:#fff;--muted:rgba(34,34,34,.65);--beige:#F5F5DC;}
        body,html,#root{margin:0;height:100%}
        .layout-root{display:flex;min-height:100vh;background:var(--beige);font-family:Inter,system-ui,Arial}
        .sidebar{width:240px;background:var(--card);padding:20px;display:flex;flex-direction:column;position:fixed;top:0;bottom:0;left:0;box-shadow:2px 0 12px rgba(0,0,0,.05);border-right:1px solid #eee}
        .brand{display:flex;align-items:center;gap:10px;margin-bottom:24px}
        .logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#f7b38a);display:flex;align-items:center;justify-content:center;font-weight:700;color:white}
        .nav{display:flex;flex-direction:column;gap:6px}
        .nav a{display:flex;align-items:center;gap:10px;padding:10px;border-radius:8px;text-decoration:none;color:var(--primary);font-weight:600}
        .nav a.active{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white}
        .content{margin-left:260px;flex:1;display:flex;flex-direction:column;padding:20px;gap:18px}
      `}</style>

      <aside className="sidebar">
        <div className="brand">
          <div className="logo">MH</div>
          <div>
            <div style={{ fontWeight: 800 }}>Monitoring Harimau</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Panel Admin</div>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end><BarChart3 size={16}/> Dashboard</NavLink>
          <NavLink to="/map"><Map size={16}/> Peta</NavLink>
          <NavLink to="/reports"><FileText size={16}/> Laporan</NavLink>
          <NavLink to="/notifications"><Bell size={16}/> Notifikasi</NavLink>
          <NavLink to="/profile"><User size={16}/> Profil</NavLink>
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}
