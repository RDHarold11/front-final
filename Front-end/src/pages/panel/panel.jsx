import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AdminArticleViewer from "../../components/admin-articles-viewer/admin-articles-viewer";

export default function PanelAdmin() {
    return (<>
        <Navbar/>
        <AdminArticleViewer />
    </>)
}