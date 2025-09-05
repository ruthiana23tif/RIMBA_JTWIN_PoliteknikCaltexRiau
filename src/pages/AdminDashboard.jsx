// AdminDashboard.jsx
import React from "react";

/**
 * Admin dashboard (viewer-only) mockup.
 * - Single-file JSX with embedded CSS for easy drop-in.
 * - Palette: #1B4332, #2D6A4F, #95D5B2, #F5F5DC, #222222, #E07A5F
 *
 * Usage:
 * 1. Save as src/components/AdminDashboard.jsx
 * 2. import AdminDashboard from './components/AdminDashboard'
 * 3. <AdminDashboard />
 */

export default function AdminDashboard() {
  // dummy data (replace with props / fetch)
  const stats = {
    totalThisMonth: 25,
    nearSettlements: 7,
    safeZone: 15,
    resolved: 18,
  };

  const reports = [
    {
      id: 1,
      datetime: "2025-09-05 14:32",
      location: "Desa A (-0.123, 101.456)",
      type: "Dekat Pemukiman",
      status: "Belum Ditindaklanjuti",
      note: "Terlihat ~200 m dari ladang",
    },
    {
      id: 2,
      datetime: "2025-09-03 09:15",
      location: "Desa B (-0.333, 101.678)",
      type: "Zona Aman",
      status: "Selesai",
      note: "Lewat jalur biasa",
    },
    {
      id: 3,
      datetime: "2025-09-01 18:40",
      location: "Desa C (-0.222, 101.123)",
      type: "Dekat Pemukiman",
      status: "Proses",
      note: "Butuh investigasi",
    },
  ];

  const notifications = [
    { id: 1, time: "2025-09-05 14:35", message: "Peringatan dikirim ke Desa A (WA)" },
    { id: 2, time: "2025-09-03 09:17", message: "Notifikasi: Deteksi zona aman Desa B" },
  ];

  return (
    <div className="admin-root">
      <style>{`
        :root{
          --primary: #1B4332;
          --secondary: #2D6A4F;
          --grad: #95D5B2;
          --beige: #F5F5DC;
          --text: #222222;
          --accent: #E07A5F;
          --card: #ffffff;
          --muted: rgba(34,34,34,0.6);
          --radius: 12px;
        }

        *{box-sizing:border-box}
        body,html,#root{height:100%;margin:0}
        .admin-root{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial; background:var(--beige); color:var(--text); min-height:100vh;}

        /* Layout */
        .layout{display:grid; grid-template-columns:260px 1fr; gap:20px; max-width:1200px; margin:28px auto; padding:0 20px;}
        @media (max-width:900px){ .layout{grid-template-columns:1fr; padding:12px} .sidebar{order:2} .main{order:1} }

        /* Sidebar */
        .sidebar{background:var(--card); border-radius:var(--radius); padding:18px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 6px 20px rgba(0,0,0,0.04)}
        .brand{display:flex; gap:12px; align-items:center; margin-bottom:12px}
        .logo{width:46px; height:46px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,var(--accent), #f7b38a); color:white; font-weight:700}
        .sidebar h3{margin:0 0 6px}
        .nav{margin-top:8px}
        .nav a{display:block; padding:8px 10px; border-radius:8px; color:var(--primary); text-decoration:none; font-weight:600; margin-bottom:6px}
        .nav a.active{background:linear-gradient(90deg,var(--primary),var(--secondary)); color:white}

        /* Main */
        .main{display:flex; flex-direction:column; gap:18px}
        .header-row{display:flex; justify-content:space-between; align-items:center; gap:12px}
        .page-title{font-size:20px; font-weight:700}
        .sub{color:var(--muted); font-size:13px}

        /* Cards */
        .cards{display:grid; grid-template-columns:repeat(4,1fr); gap:12px}
        @media (max-width:900px){ .cards{grid-template-columns:repeat(2,1fr)} }
        .card{background:var(--card); padding:14px; border-radius:10px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 6px 18px rgba(0,0,0,0.03)}
        .card .label{color:var(--muted); font-size:13px}
        .card .value{font-size:22px; font-weight:800; margin-top:6px}

        /* content grid */
        .content-grid{display:grid; grid-template-columns: 1fr 380px; gap:12px; margin-top:8px}
        @media (max-width:900px){ .content-grid{grid-template-columns:1fr} }

        /* map */
        .map{height:360px; background: linear-gradient(180deg,var(--grad), #cfeee2); border-radius:10px; border:1px solid rgba(0,0,0,0.06); display:flex; flex-direction:column; justify-content:center; align-items:center;padding:12px}
        .map .hint{color:var(--text); opacity:0.9; font-weight:700}

        /* table */
        .table-card{background:var(--card); border-radius:10px; padding:12px; border:1px solid rgba(0,0,0,0.06); max-height:360px; overflow:auto}
        table{width:100%; border-collapse:collapse; font-size:14px}
        thead th{position:sticky; top:0; background:linear-gradient(90deg,var(--primary),var(--secondary)); color:white; padding:8px; text-align:left}
        tbody tr{border-bottom:1px solid #f1f1f1}
        td, th{padding:8px 10px; color:var(--text)}
        .status{padding:6px 8px; border-radius:999px; color:white; font-weight:700; font-size:12px; display:inline-block}
        .status.safe{background:var(--secondary)}
        .status.warn{background:var(--accent)}
        .status.danger{background:#ef4444}

        /* right column */
        .panel{background:var(--card); border-radius:10px; padding:12px; border:1px solid rgba(0,0,0,0.06)}
        .panel h4{margin:0 0 8px}
        .notif-list{max-height:180px; overflow:auto}
        .notif-item{padding:8px;border-radius:8px;margin-bottom:8px;background:linear-gradient(180deg,rgba(27,67,50,0.03),transparent)}
        .profile-mini{display:flex; gap:10px; align-items:center}
        .avatar{width:56px;height:56px;border-radius:10px;background:linear-gradient(135deg,var(--accent), #f7b38a);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}

        /* footer */
        .footer{margin-top:18px; text-align:center; color:var(--muted); font-size:13px}
      `}</style>

      <div className="layout" role="main">
        {/* Sidebar */}
        <aside className="sidebar" aria-label="Sidebar">
          <div className="brand">
            <div className="logo">MH</div>
            <div>
              <div style={{fontWeight:800}}>Monitoring Harimau</div>
              <div style={{fontSize:12, color:"var(--muted)"}}>Panel Pemerintah</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#dashboard" className="active">Dashboard</a>
            <a href="#map">Peta Monitoring</a>
            <a href="#reports">Laporan</a>
            <a href="#notifications">Log Notifikasi</a>
            <a href="#profile">Profil</a>
          </nav>
        </aside>

        {/* Main */}
        <section className="main">
          <div className="header-row">
            <div>
              <div className="page-title">Dashboard Monitoring Harimau</div>
              <div className="sub">Pantau pergerakan harimau & kirim peringatan ke masyarakat</div>
            </div>
            <div style={{display:"flex", gap:10, alignItems:"center"}}>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:12, color:"var(--muted)"}}>Akun</div>
                <div style={{fontWeight:700}}>Pemerintah Kab. X</div>
              </div>
            </div>
          </div>

          {/* summary cards */}
          <div className="cards" aria-hidden>
            <div className="card">
              <div className="label">Total Laporan (Bulan Ini)</div>
              <div className="value">{stats.totalThisMonth}</div>
            </div>
            <div className="card">
              <div className="label">Dekat Pemukiman</div>
              <div className="value">{stats.nearSettlements}</div>
            </div>
            <div className="card">
              <div className="label">Zona Aman</div>
              <div className="value">{stats.safeZone}</div>
            </div>
            <div className="card">
              <div className="label">Sudah Ditindaklanjuti</div>
              <div className="value">{stats.resolved}</div>
            </div>
          </div>

          {/* content grid */}
          <div className="content-grid">
            {/* left: map + table */}
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              <div id="map" className="map" aria-label="Peta Monitoring Placeholder">
                <div style={{textAlign:"center"}}>
                  <div className="hint">Peta Interaktif (placeholder)</div>
                  <div style={{color:"var(--muted)", marginTop:8}}>Integrasikan Leaflet / Google Maps di sini</div>
                </div>
              </div>

              <div id="reports" className="table-card" aria-label="Tabel laporan">
                <h4 style={{margin:"0 0 8px 0"}}>Riwayat Deteksi (terbaru)</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Tanggal & Waktu</th>
                      <th>Lokasi</th>
                      <th>Jenis</th>
                      <th>Status</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map(r => (
                      <tr key={r.id}>
                        <td>{r.datetime}</td>
                        <td>{r.location}</td>
                        <td>{r.type}</td>
                        <td>
                          <span className={
                            `status ` +
                            (r.status === "Selesai" ? "safe" : r.status === "Proses" ? "warn" : "danger")
                          }>{r.status}</span>
                        </td>
                        <td>{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* right: notifications + profile */}
            <aside style={{display:"flex", flexDirection:"column", gap:12}}>
              <div className="panel" id="notifications">
                <h4>Log Notifikasi</h4>
                <div className="notif-list" role="log" aria-live="polite">
                  {notifications.map(n => (
                    <div key={n.id} className="notif-item">
                      <div style={{fontSize:13, color:"var(--muted)"}}>{n.time}</div>
                      <div style={{fontWeight:700}}>{n.message}</div>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:8, fontSize:13, color:"var(--muted)"}}>
                  Catatan: sistem mengirim notifikasi otomatis saat deteksi berada dalam radius aman/risk.
                </div>
              </div>

              <div className="panel" id="profile">
                <h4>Profil Ringkas</h4>
                <div className="profile-mini" style={{marginTop:8}}>
                  <div className="avatar">PK</div>
                  <div>
                    <div style={{fontWeight:800}}>Pemerintah Kab. X</div>
                    <div style={{fontSize:13, color:"var(--muted)"}}>Akun viewer (read-only)</div>
                    <div style={{marginTop:8, fontSize:13}}><strong>Kontak:</strong> 0800-123-456</div>
                  </div>
                </div>
                <div style={{marginTop:12}}>
                  <button style={{
                    background:"var(--primary)", color:"white",
                    border:0,padding:"8px 12px", borderRadius:8, cursor:"pointer"
                  }}>Eksport Data (CSV)</button>
                </div>
              </div>

              <div className="panel" style={{textAlign:"center", fontSize:13}}>
                <div style={{fontWeight:700}}>Status Sistem</div>
                <div style={{color:"var(--muted)", marginTop:6}}>Semua sensor online • Tidak ada ancaman aktif</div>
              </div>
            </aside>
          </div>

          <div className="footer">© 2025 Sistem Monitoring Harimau — Panel Pemerintah</div>
        </section>
      </div>
    </div>
  );
}
