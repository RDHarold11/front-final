import CardContainer from "../../components/CardContainer/card-container";
import Navbar from "../../components/Navbar/Navbar";
import AnunciosContainer from "../../components/CardContainer/AnunciosContainer"
import Mision from "../../components/MisionVisionFilosofia/Mision";
import Recientes from "../../components/ArticulosRecientes/Recientes";
import ContactUs from "../../components/contact us component/contactUs";


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