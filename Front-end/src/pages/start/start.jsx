import CardContainer from "../../components/CardContainer/card-container";
import Navbar from "../../components/Navbar/Navbar";
import AnunciosContainer from "../../components/CardContainer/AnunciosContainer"
import Mision from "../../components/MisionVisionFilosofia/Mision";
import Recientes from "../../components/ArticulosRecientes/Recientes";
import ContactUs from "../../components/contact us component/contactUs";
import AdminArticleViewer from "../../components/admin-articles-viewer/admin-articles-viewer";

function Inicio() {
    return (
        <>
        <Navbar/>
        <Recientes/>
        <AnunciosContainer/>
        <CardContainer/>
        <ContactUs/>
        <Mision/>
        </>
    )    
}

export default Inicio;