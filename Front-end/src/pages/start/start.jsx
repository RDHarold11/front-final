import CardContainer from "../../components/CardContainer/card-container";
import Navbar from "../../components/Navbar/Navbar";
import AnunciosContainer from "../../components/CardContainer/AnunciosContainer"
import Mision from "../../components/MisionVisionFilosofia/Mision";
import Recientes from "../../components/ArticulosRecientes/Recientes";

function Inicio() {
    return (
        <>
        {/* <Navbar></Navbar> */}
        {/* <Recientes></Recientes> */}
        <AnunciosContainer></AnunciosContainer> 
        <CardContainer></CardContainer>
        {/* <Mision></Mision> */}
        </>
    )    
}

export default Inicio;