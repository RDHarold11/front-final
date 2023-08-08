import Navbar from "../../components/Navbar/Navbar";
import AdminArticleViewer from "../../components/admin-articles-viewer/admin-articles-viewer";
import Footer from "../../components/footer/footer";
import ArticuloForm from "../../components/ArticuloForm/ArticuloForm";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function PanelAdmin() {
  const [articuloU, setArticuloU] = useState ([])
  
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const setToUpdate =(data)=>{
    setArticuloU(data)
  }

  return (
    <>
      <Navbar />
      <div
        className="row mx-auto justify-content-center"
        style={{ width: "90%" }}
      >
        <h2 className="p-0">Articulos</h2>
        <div className="col-12 col-md-4 mb-2 p-0 pe-md-2">
          <ArticuloForm data={articuloU}/>
        </div>
        <AdminArticleViewer update={setToUpdate} className="col-12 col-md-8 p-0 ps-md-2" />
      </div>
      <Footer />
    </>
  );
}
