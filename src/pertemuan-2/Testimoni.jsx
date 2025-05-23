export default function Testimoni() { // Parent Component
    return (
        <div className="p-8 text-center">
            <hr/>
            <h1 className="text-2xl font-bold text-blue-800 mb-6">What Our Client Say</h1>
            <Testimonial 
                nama="Choi Jadoo"
                testi="GlowSphere bener-bener ngebantu aku buat cari skincare yang cocok! Fitur pencariannya gampang, terus ada rekomendasi produk yang sesuai sama jenis kulit aku. Pengirimannya juga cepet banget. Bakal sering belanja di sini!"
                gambar="img/jado.jpg"
            />
            <Testimonial 
                nama="Nur Roselia"
                testi="Suka banget sama desain web GlowSphere, simpel tapi estetik! Produk-produknya lengkap dan deskripsinya jelas. Plus, ada review dari pengguna lain yang bikin makin yakin sebelum beli. Mantap pokoknya!"
                gambar="img/ros.jpg"
            />
        </div>
    );
}

function Testimonial(props) {
    return (
        
        <div style={{ border: "1px solid #ddd", padding: "20px", margin: "20px auto", borderRadius: "12px", textAlign: "center", maxWidth: "400px", background: "#fff", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            
            <div style={{ width: "100px", height: "100px", margin: "0 auto 10px", borderRadius: "50%", overflow: "hidden", border: "4px solid white", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
                <img src={props.gambar} alt={props.nama} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            
            <h3 style={{ color: "#2c3e50", fontSize: "18px", fontWeight: "bold" }}>{props.nama}</h3>
            <p style={{ color: "#555", fontStyle: "italic" }}>&quot;{props.testi}&quot;</p>
        </div>
    );
}
