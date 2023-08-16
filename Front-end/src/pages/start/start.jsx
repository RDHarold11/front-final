import CardContainer from "../../components/CardContainer/card-container";
import Navbar from "../../components/Navbar/Navbar";
import Mision from "../../components/MisionVisionFilosofia/Mision";
import Recientes from "../../components/ArticulosRecientes/Recientes";
import ContactUs from "../../components/contact us component/contactUs";
import Footer from "../../components/footer/footer";

import { fetchEvents } from "../../components/CardContainer/card-container";

function Inicio() {
    return (
        <>
        <Navbar/>
        <Recientes/>
        <CardContainer title="Anuncios importantes" getterData={() => fetchEvents('Anuncio')}/>
        <CardContainer/>
        <ContactUs/>
        <Mision/>
        <Footer/>
        </>
    )    
}


export default Inicio;