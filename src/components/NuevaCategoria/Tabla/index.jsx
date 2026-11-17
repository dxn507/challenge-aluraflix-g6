import styled from "styled-components";
import {getCategorias, deleteCategoria } from "../../Services/categoriaService";
import { useState, useEffect } from "react";

//import {getCategorias} from "../../Services/categoriaService"

const TablaContenedor =styled.div`
   width: 100%;
   margin: auto;
   padding: 1rem;
`
const TablaEstilizada = styled.table`
  width:inherit;
  height:auto;
  border: 1px solid rgb(42,122,248);
  color: #fff;
`
const Thead = styled.thead`

`
const Tr = styled.tr`
  
`
const Th = styled.th`
border: 1px solid rgb(42,122,248);
margin:0;
font-weight: bold;
font-size: 32px;
  padding: 10px;
 @media (max-width: 768px){ 
  font-size: 1.1rem;

 }
`
const Td = styled.td`
  font-size:18px;
  border:1px solid #000;
  padding: 10px;
`
const Btn = styled.button`
  padding:0;
  margin:auto;
  height:inherit;
  width: inherit;
  background:none;
  color: #fff;
  text-align:center;
  cursor:pointer;
`
const Tabla = ({ onEditar })=>{
  const [categorias, setCategorias] = useState([]);

   // CARGAR DATOS 
   async function cargarCategorias() {
   const data = await getCategorias();
   setCategorias(data);
   }
  
   // 👉 useEffect SOLO para carga inicial (sin depender de la función)
    useEffect(() => {
    getCategorias().then(data => setCategorias(data));
  }, []);

  // ❌ ELIMINAR
  async function handleDelete(cat) {
     const codigoIngresado = prompt("Ingrese código de seguridad");
     if (String(codigoIngresado).trim() !== String(cat.codigo).trim()) {
      alert("Código incorrecto");
    return;
     }
    const confirmar = window.confirm("¿Eliminar categoría?");
    if (!confirmar) return;

    await deleteCategoria(cat.id);
    alert("Categoria Eliminada");
    cargarCategorias(); // recargar tabla
  }

  return (
    <TablaContenedor>
      <TablaEstilizada>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
                
            <Th>Descripcion</Th>
               
            <Th>Editar</Th>
              
               <Th>Remover</Th>
              </Tr>
            </Thead>
            <tbody>
              {categorias.map(cat => (
            <Tr key={cat.id}>
              <Td>{cat.nombre}</Td>

              <Td>
                  {cat.descripcion}
              </Td>

              <Td>
                <Btn onClick={() => onEditar(cat)}>
                  Editar
                </Btn>
                
              </Td>

              <Td>
                <Btn onClick={() => handleDelete(cat)} >
                  Eliminar
                </Btn>
              </Td>
            </Tr>
          ))}
           
            </tbody>

          </TablaEstilizada> 
    </TablaContenedor>
  )
}

export default Tabla