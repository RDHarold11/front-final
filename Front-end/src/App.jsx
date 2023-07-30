import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/notFound";
import Inicio from "./pages/start/start";
import Articulo from "./pages/UnicoArticulo/Articulo";
import PanelAdmin from "./pages/panel/panel";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} exact />
          <Route path="*" element={<NotFound/>} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/detalles/:id" element={<Articulo/>} exact />
          <Route path="/panel" element={<PanelAdmin/>} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
