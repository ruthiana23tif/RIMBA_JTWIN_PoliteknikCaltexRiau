import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Artikel from "./Artikel"
import Qna from "./Qna"
import './custom.css';
import ListProduct from "./ListProduct";
import AboutUs from "./AboutUs";
import Testimoni from "./Testimoni";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Artikel/>
                <Qna/>
                <ListProduct/>
                <AboutUs/>
                <Testimoni/>
            </Container>
        </div>
    )