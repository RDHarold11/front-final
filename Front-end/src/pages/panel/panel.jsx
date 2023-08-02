import Navbar from "../../components/Navbar/Navbar";
import AdminArticleViewer from "../../components/admin-articles-viewer/admin-articles-viewer";
import Footer from "../../components/footer/footer";

export default function PanelAdmin() {
    return (<>
        <Navbar/>
        <AdminArticleViewer />
        <Footer/>
    </>)
}