import { useState, useEffect } from "react";
import styled from "styled-components"
import Titulo from "../Titulo/Index"
import Button from "../../components/Button"
import Tabla from "./Tabla"
import { createCategoria, updateCategoria } from "../Services/categoriaService";

const FormularioContainer =styled.div`
    width: auto;
    height: auto;
    background-color:rgb(26,26,26);
    padding:3rem 120px;
`
const Formulario =styled.form`
 width:100%;
  padding:1rem 0;
  color: #fff;
` 
  const BtnContenedor=styled.div`
  display: flex;
    
    justify-content:space-between;
    div{
      display: flex;
      gap:25px;

    }
  `
  const InputContainer =styled.label`
     width:100%;
      padding:0.5rem;
      justify-content: space-between;
      background-color: rgb(83,88,93);
       margin: 3rem 0;
       color: #f2f2f2;
       display: flex;
       flex-wrap: wrap;

  `
const Input =styled.input`
 width: inherit;
 height:2.5rem;
 font-size: 20px;
  padding: 0;
 border-radius: 8px;
 border: 1px solid rgb(83,88,93);
 background-color: rgb(83,88,93);
 color:#f2f2f2;
  &:focus{
    background-color: #001233;
    border: 2px solid #6BD1FF;
    outline: none;
  }
`
const Mensaje=styled.textarea`
    width: 100%;
    margin: 1rem 0;
    min-height: 100px;
    padding: 1rem 10px;
    color: white;
    font-size: 18px;
    border: 1px solid rgb(83,88,93);
    background-color: rgb(83,88,93);
    border-radius: 8px;
  `
const NuevaCategoria =()=>{
  
  const [nombre, setNombre] = useState("");
  const [categoriaColor, setCategoriaColor] = useState("");
  const [codigo, setCodigo]=useState("");
  const [descripcion, setDescripcion]=useState("");
  const [categoriaEditando, setCategoriaEditando] = useState(null);

   async function handleSubmit(e) {
   e.preventDefault();

   if (!nombre) {
    alert("Nombre requerido");
    return;
    }

  if (categoriaEditando) {
    // ✏️ EDITAR
    
    await updateCategoria(categoriaEditando.id, {
      nombre, 
      categoriaColor,
      descripcion,
      codigo: codigo || categoriaEditando.codigo
    });

    alert("Categoría actualizada");
  } else {
    // ➕ CREAR
    await createCategoria({ nombre, setCategoriaColor,descripcion, codigo });
    alert("Categoría creada");
   }

  limpiarFormulario();
  }

  useEffect(() => {
  if (!categoriaEditando) return;
  setNombre(categoriaEditando.nombre || "");
  setCategoriaColor(categoriaEditando.setCategoriaColor || "");
  setDescripcion(categoriaEditando.descripcion || "");
  }, [categoriaEditando]);

  function limpiarFormulario() {
   setNombre("");
   setCategoriaColor("");
   setCodigo("");
   setDescripcion("");
   setCategoriaEditando(null);
  }

    return (
        <FormularioContainer>
          < Titulo texto="NUEVA CATEGORIA" />
          <Formulario onSubmit={handleSubmit}
          >
            <InputContainer  name="Nombre" >Nombre
               <Input type="text" value={nombre} onChange={e => setNombre(e.target.value)} 
               />
            </InputContainer>

            <InputContainer>Descripcion
                         
              <Mensaje type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} 
              />
            </InputContainer>
            <InputContainer>Color
              
              <Input type="color" value={categoriaColor}
               onChange={e => setCategoriaColor(e.target.value)}
             />
              
            </InputContainer>

            <InputContainer name="Codigo">Codigo de seguridad
              <Input type="text" value={codigo} 
              onChange={e => setCodigo(e.target.value)}
              />       
            </InputContainer>

            <BtnContenedor>
              <div>
               <Button  type="submit"  texto={categoriaEditando ? "Actualizar" : "Guardar"}
               />
               <Button  type="button" texto="Limpiar"  onClick={limpiarFormulario} 
               />
              </div>
            </BtnContenedor>           

          </Formulario>
          <Tabla onEditar={setCategoriaEditando} 
          />
 </FormularioContainer>        
    )
}
export default NuevaCategoria;
