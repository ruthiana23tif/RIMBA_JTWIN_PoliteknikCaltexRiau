// AdminDashboard.jsx
import React from "react";
import { Map, Bell, FileText, User, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  const stats = {
    totalThisMonth: 25,
    nearSettlements: 7,
    safeZone: 15,
    resolved: 18,
  };

  const reports = [
    { id: 1, datetime: "2025-09-05 14:32", location: "Desa A (-0.123, 101.456)", type: "Dekat Pemukiman", status: "Belum Ditindaklanjuti", note: "Terlihat ~200 m dari ladang" },
    { id: 2, datetime: "2025-09-03 09:15", location: "Desa B (-0.333, 101.678)", type: "Zona Aman", status: "Selesai", note: "Lewat jalur biasa" },
    { id: 3, datetime: "2025-09-01 18:40", location: "Desa C (-0.222, 101.123)", type: "Dekat Pemukiman", status: "Proses", note: "Butuh investigasi" },
  ];

  const notifications = [
    { id: 1, time: "2025-09-05 14:35", message: "Peringatan dikirim ke Desa A (WA)" },
    { id: 2, time: "2025-09-03 09:17", message: "Notifikasi: Deteksi zona aman Desa B" },
  ];

  return (
    <div className="admin-root">
      <style>{`
        :root{
          --primary:#1B4332;--secondary:#2D6A4F;--grad:#95D5B2;
          --beige:#F5F5DC;--text:#222;--accent:#E07A5F;
          --card:#fff;--muted:rgba(34,34,34,.65);--radius:12px;
        }
        *{box-sizing:border-box} body,html,#root{margin:0;height:100%}
        .admin-root{font-family:Inter,system-ui,Arial;background:var(--beige);min-height:100vh;color:var(--text);display:flex}
        
        /* sidebar */
        .sidebar{width:240px;background:var(--card);padding:20px;display:flex;flex-direction:column;position:fixed;top:0;bottom:0;left:0;box-shadow:2px 0 12px rgba(0,0,0,0.05);border-right:1px solid #eee}
        .brand{display:flex;align-items:center;gap:10px;margin-bottom:24px}
        .logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#f7b38a);display:flex;align-items:center;justify-content:center;font-weight:700;color:white}
        .nav{display:flex;flex-direction:column;gap:6px}
        .nav a{display:flex;align-items:center;gap:10px;padding:10px;border-radius:8px;text-decoration:none;color:var(--primary);font-weight:600}
        .nav a.active{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white}
        
        /* main area */
        .main{margin-left:260px;flex:1;display:flex;flex-direction:column;padding:20px;gap:18px}
        
        /* header */
        .header-row{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:var(--card);border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
        .page-title{font-size:20px;font-weight:700}
        .sub{color:var(--muted);font-size:13px;margin-top:2px}
        
        /* cards */
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}
        .card{background:var(--card);padding:14px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,.05);display:flex;flex-direction:column}
        .card .label{font-size:13px;color:var(--muted)}
        .card .value{font-size:22px;font-weight:800;margin-top:4px}
        
        /* grid */
        .content-grid{display:grid;grid-template-columns:1fr 340px;gap:14px}
        @media(max-width:1000px){.content-grid{grid-template-columns:1fr}}
        
        /* map */
        .map{height:280px;background:linear-gradient(180deg,var(--grad),#cfeee2);border-radius:10px;display:flex;justify-content:center;align-items:center;flex-direction:column}
        .map .hint{font-weight:700}
        
        /* table */
        .table-card{background:var(--card);border-radius:10px;padding:12px;overflow:auto;max-height:320px}
        table{width:100%;border-collapse:collapse;font-size:14px}
        thead th{position:sticky;top:0;background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;padding:8px;text-align:left}
        td,th{padding:8px 10px}
        tbody tr{border-bottom:1px solid #f1f1f1}
        .status{padding:4px 8px;border-radius:999px;font-size:12px;font-weight:700;color:white}
        .status.safe{background:var(--secondary)} .status.warn{background:var(--accent)} .status.danger{background:#ef4444}
        
        /* panels */
        .panel{background:var(--card);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:10px;box-shadow:0 4px 10px rgba(0,0,0,.04)}
        .notif-list{max-height:160px;overflow:auto;display:flex;flex-direction:column;gap:8px}
        .notif-item{background:rgba(27,67,50,0.05);padding:8px;border-radius:8px}
        .profile-mini{display:flex;gap:10px;align-items:center}
        .avatar{width:50px;height:50px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#f7b38a);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
        
        .footer{text-align:center;font-size:13px;color:var(--muted);margin-top:20px}
      `}</style>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">MH</div>
          <div>
            <div style={{fontWeight:800}}>Monitoring Harimau</div>
            <div style={{fontSize:12,color:"var(--muted)"}}>Panel Admin</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#dashboard" className="active"><BarChart3 size={16}/> Dashboard</a>
          <a href="#map"><Map size={16}/> Peta</a>
          <a href="#reports"><FileText size={16}/> Laporan</a>
          <a href="#notifications"><Bell size={16}/> Notifikasi</a>
          <a href="#profile"><User size={16}/> Profil</a>
        </nav>
      </aside>

      {/* Main content */}
      <section className="main">
        <div className="header-row">
          <div>
            <div className="page-title">Dashboard Monitoring Harimau</div>
            <div className="sub">Pantau pergerakan & tindak lanjut laporan</div>
          </div>
          <div>
            <div style={{fontSize:12,color:"var(--muted)"}}>Login sebagai</div>
            <div style={{fontWeight:700}}>Admin Kab. X</div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="cards">
          <div className="card"><div className="label">Total Laporan</div><div className="value">{stats.totalThisMonth}</div></div>
          <div className="card"><div className="label">Dekat Pemukiman</div><div className="value">{stats.nearSettlements}</div></div>
          <div className="card"><div className="label">Zona Aman</div><div className="value">{stats.safeZone}</div></div>
          <div className="card"><div className="label">Sudah Ditindaklanjuti</div><div className="value">{stats.resolved}</div></div>
        </div>

        <div className="content-grid">
          {/* Map + Reports */}
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div id="map" className="map">
              <div className="hint">[ Peta Interaktif Placeholder ]</div>
              <div style={{fontSize:13,color:"var(--muted)",marginTop:6}}>Integrasi Leaflet / Google Maps</div>
            </div>

            <div id="reports" className="table-card">
              <h4>Riwayat Deteksi</h4>
              <table>
                <thead>
                  <tr><th>Tanggal & Waktu</th><th>Lokasi</th><th>Jenis</th><th>Status</th><th>Keterangan</th></tr>
                </thead>
                <tbody>
                  {reports.map(r=>(
                    <tr key={r.id}>
                      <td>{r.datetime}</td>
                      <td>{r.location}</td>
                      <td>{r.type}</td>
                      <td><span className={`status ${r.status==="Selesai"?"safe":r.status==="Proses"?"warn":"danger"}`}>{r.status}</span></td>
                      <td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications + Profile */}
          <aside style={{display:"flex",flexDirection:"column",gap:14}}>
            <div className="panel" id="notifications">
              <h4>Log Notifikasi</h4>
              <div className="notif-list">
                {notifications.map(n=>(
                  <div key={n.id} className="notif-item">
                    <div style={{fontSize:12,color:"var(--muted)"}}>{n.time}</div>
                    <div style={{fontWeight:700}}>{n.message}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" id="profile">
              <h4>Profil Admin</h4>
              <div className="profile-mini">
                <div className="avatar">AX</div>
                <div>
                  <div style={{fontWeight:800}}>Admin Kab. X</div>
                  <div style={{fontSize:13,color:"var(--muted)"}}>Hak akses penuh</div>
                  <div style={{marginTop:6,fontSize:13}}><strong>Kontak:</strong> 0800-123-456</div>
                </div>
              </div>
              <button style={{background:"var(--primary)",color:"white",border:0,padding:"8px 12px",borderRadius:8,cursor:"pointer",marginTop:10}}>
                Eksport Data (CSV)
              </button>
            </div>
          </aside>
        </div>

        <div className="footer">© 2025 Sistem Monitoring Harimau</div>
      </section>
    </div>
  );
}
