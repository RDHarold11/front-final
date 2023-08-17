import './footer.css'

const Footer =()=>{
    return(
        <footer className="footer">
            <div className="footerOptions flex-wrap">
                <p>INICIO</p>
                <p>|</p>
                <p>EVENTOS</p>
                <p>|</p>
                <p>ANUNCIOS</p>
                <p>|</p>
                <p>CONTACTO</p>
                <p>|</p>
                <p>PANEL ADMINISTRATIVO</p>
            </div>
            <div className="directionsCopyright">
                <p>Enterate de las últimas novedades de nuestro centro escolar</p>
                <p>© 2023 Fe y Alegria. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
export default Footer;