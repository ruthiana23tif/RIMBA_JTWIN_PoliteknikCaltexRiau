export default function AboutUs() {
    return (
        <div className="about-container">
            <Gambar />
            <Deskripsi />
            <hr/>
        </div>
    );
}

function Gambar() {
    return (
        <div className="image-container">
            <img src="img/Glow.jpg" alt="Kak Ros" />
        </div>
    );
}

function Deskripsi() {
    return (
        <div className="text-container">
            <h2>About Us</h2>
            <p>
            GlowSphere adalah platform penjualan kosmetik dan skincare yang menghadirkan produk berkualitas untuk berbagai jenis kulit. Dengan tampilan modern dan pengalaman belanja yang mudah, GlowSphere membantu pelanggan menemukan produk yang tepat sesuai kebutuhan mereka. Kami berkomitmen untuk menghadirkan brand terpercaya dengan harga terbaik, serta memberikan informasi yang edukatif seputar perawatan kulit. GlowSphere bukan sekadar toko online, tetapi juga ruang bagi pecinta kecantikan untuk berbagi dan menemukan inspirasi.
            </p>
        </div>
    );
}