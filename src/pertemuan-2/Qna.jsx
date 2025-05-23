export default function Qna(){ 
    const propsQuestion = {   
        question: "Apa saja keuntungan saya sebagai member Tokopedia?",
        answer: "Kuota Gratis Ongkir khusus Silver",
       
    }
    return (
        <div>
            <hr/>   
            <h1>Pertanyaan Umum Seputar Tokopedia</h1>  
            <Question {...propsQuestion}/>
            
        </div>
    )
}

function Question(props){   
    return (
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", backgroundColor: "#f9f9f9", maxWidth: "500px", margin: "10px auto" }}>
            <p><strong>Q:</strong> {props.question}</p>
            <p><strong>A:</strong> {props.answer}</p>
        </div>
    );
}
