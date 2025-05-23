export default function ListProduct() { // Parent Component
    return (
        <div>
            <hr/>
            <Title/>
            <Product 
                name="OIL-FREE Ultra-Moisturizing Lotion"
                brand="Cosrx "
                price="Rp200.000"
                image="img/cosrx.jpeg"
            />
            <Product 
                name="Sunscreen"
                brand="Wardah"
                price="Rp30.000"
                image="img/wardah.jpeg"
            />
            <Product 
                name="Cleansing Oil"
                brand="Skin1004"
                price="Rp110.000"
                image="img/skin1004.jpeg"
            />
            <hr/>
        </div>
    );
}

function Title() {
    return <h1>Daftar Produk Kosmetik & Skincare</h1>;
}


function Product(props){
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px", textAlign: "center" }}>
            {/* <hr/> */}
            <h2>{props.name}</h2>
            <h3>{props.brand}</h3>
            <img src={props.image} alt={props.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <p><strong> {props.price}</strong></p>
        </div>
    )
}