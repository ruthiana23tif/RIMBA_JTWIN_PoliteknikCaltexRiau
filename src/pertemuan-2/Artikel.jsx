export default function Artikel(){ //artikel adalah parent
    return (
        <div>
            <hr/>
            <Judul/>
            {/* <h1>Artikel</h1> */}
            {/* <p>Selamat Belajar ReactJs</p> */}
            <Penulis/>
            <Gambar/>
            <Teks/>
            {/* <QuoteText/> */}
            
            
        </div>
    )
}

function Judul(){ //child dari helloworld
    return (
        <h1>PENTINGNYA PENDIDIKAN BAGI MASA DEPAN</h1>
    )
}

function Penulis(){ //child dari helloworld
    return (
        <div> 
            <small> Dinas Pendidikan Kabupaten Mojokerto</small>
            <br /><br />
        </div>
    )
}

function Gambar() { // Child dari HelloWorld
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="img/didik.jpg" alt="PCR" />
        </div>
    );
}


function Teks() { //child dari helloworld
    
    return (
        <div>
        <p>Sebenarnya pendidikan itu dapat kita perolah dimana saja dan kapan saja. Oleh karenaitu, kita sebagai manusia hendaknya mau menyadari hal tersebut. Pendidikan sangat berdampak besar bagi pengaruh perkembangan masa depan. Tidak hanya untuk diri sendiri, bahkan dapat pula berpengaruh bagi bangsa dan Negara Repubik Indonesia.Pendidikan itu ada bersifat formal , non formal dan informal. adapun contohnya bersifat formal yaitu : SD, SMP, SMA, Perguruan Tinggi . dan pendidikan non formal Yaitu dengan cara mengikuti kursus atau bimbingan belajar dan lain sebaginya. bagaimanapun cara kita menempuh pendidikan tersebut, asal kita mau serius dalam menjalaninya maka, sangat berdampak besar bagi masa depan diri sendiri maupun orang lain. Sehingga dengan pendidikan orang akan mampu untuk menata masa depanya dengan bijaksana, dan dapat berfikir lebih kritis dalam memecahkan suatu masalah yang terjadi didalam kehidupannya. dengan kita mengerti tentang pendidikan, maka kita akan mampu untuk membantu pemerintah untuk menciptakan suatu lapangan pekerjaan sehingga tidak banyak pengangguran yang ada di Indonesia. begitu banyak hal penting yang didapat dari kita mengetahui makna pentingnya pendidikan tersebut. Oleh karena itu, hendaknya kita mulai menyadari betapa pentingnya pendidikan tersebut bagi kelangsungan masa depan kita. dan kita sebagai manusia terpelajar hendaknya mau memahami betul hal tersebut. adapun pengertian , fungsi,dan macam – macam pendidikan itu sendiri.</p>        </div>
    )
}
