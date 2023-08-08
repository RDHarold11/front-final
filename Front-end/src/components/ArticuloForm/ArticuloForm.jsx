import React, { useEffect, useState } from 'react';
import "./articuloForm.css";



const ArticuloForm = ({data}) => {

  const [titulo, setTitulo] = useState('');
  const [breveDescripcion, setBreveDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [articulo, setArticulo] = useState('');
  
  const setToupdate =()=>{
    console.log(data)
    setArticulo(data)
  }
  useEffect(()=>{
    setToupdate()
  },[data])

  const handleUpdate = () =>{

  }

  const categorias = [
    'Categoría 1',
    'Categoría 2',
    'Categoría 3',
    'Categoría 4',
    // Agrega aquí más categorías
  ];

  return (
    <form className='articuloForm'>
      <div>
        <label>Título:</label>
        <input type="text" value={articulo.titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Categoría:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">{!articulo ? 'Seleccionar categoría' : articulo.categoria}</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Breve descripción:</label>
        <input
          type="text"
          value={articulo.descripcionBreve}
          onChange={(e) => setBreveDescripcion(e.target.value)}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea value={articulo.descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </div>
      <button type="submit">{articulo =='' ? 'Enviar' : 'Actualizar'}</button>
    </form>
  );
};

export default ArticuloForm;
