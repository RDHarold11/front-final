import React, { useEffect, useState } from 'react';
import "./articuloForm.css";

const ArticuloForm = ({ data }) => {
  const [categoria, setCategoria] = useState('');
  
  const initialStateValue ={
    titulo:'',
    categoria:'',
    descripcionBreve:'',
    imagen:'',
    descripcion:''
  }

  const [articuloU, setArticuloU] = useState(initialStateValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticuloU({ ...articuloU, [name]: value });
  }

  const setToupdate = () => {
    setArticuloU(data);
  }

  useEffect(() => {
    setToupdate();
  }, [data]);

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(articuloU);
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
        <input type="text" name='titulo' value={articuloU.titulo} onChange={handleInputChange} />
      </div>
      <div>
      <label>Categoría:</label>
  <select value={articuloU.categoria} onChange={(e) => setArticuloU({ ...articuloU, categoria: e.target.value })}>
    <option value=''>Seleccionar categoría</option>
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
          name='descripcionBreve'
          type="text"
          value={articuloU.descripcionBreve}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input name='imagen' type="file" value={articuloU.imagen} onChange={handleInputChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea name='descripcion' value={articuloU.descripcion} onChange={handleInputChange} />
      </div>
      <button onClick={handleUpdate} type="submit">{Object.values(articuloU).some(value => value !== '') ? 'Actualizar' : 'Enviar'}</button>
    </form>
  );
};

export default ArticuloForm;
