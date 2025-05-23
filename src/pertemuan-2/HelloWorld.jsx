export default function HelloWorld(){
    const propsUserCard = {
        nama: "Ruthiana",
        nim: "2355301186",
        tanggal: "2025-03-12"
    }
    return (
        <div >
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <Greeting/>
            <img src="img/abc.png"/>
            <UserCard {...propsUserCard}/>
            <QuoteText/>
            <UserCard
            nama="Ruthiana" 
            nim="2355301186"
            tanggal={new Date().toLocaleDateString()}
            />
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

function Greeting(){
    return(
        <small> Selamat Pagi</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";  // Variabel dengan teks biasa
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}