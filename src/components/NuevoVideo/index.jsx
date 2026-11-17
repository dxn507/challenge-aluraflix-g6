import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Label from "./Label"
import Button from "../Button"
import { createVideo, updateVideo } from "../Services/videoService";


const FormularioContainer =styled.div`
    width: auto;
    height: auto;
    background-color:rgb(26,26,26);
    padding:3rem 120px;
`
const Titulo =styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
`
const Texto =styled.p`
  color: #fff;
    text-align: center;
    margin: 1rem auto;letter-spacing: 1px;
`
const Formulario =styled.form`
 width:100%;
  padding:1rem 0;
  color: #fff;
` 
const Subtitulo=styled.h3`
  font-size: 1.5rem;
    color: #fff;
    letter-spacing: 1px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 1.5rem 0;
`
const InputContainer =styled.div`
   width:100%;
    display: flex;
    flex-wrap:wrap;
    gap: 1.5rem;
    padding:1rem 0;
    justify-content: space-between;
`
const CajaDeInput=styled.div`
    flex: 0 1 470px;
    margin:0.5rem 0;
`
const Input =styled.input`
    margin-top: .5rem;
    border: 1px solid #fff;
    border-radius: 8px;
    color: white;
    background-color: #262626;
    font-size: 18px;
    padding: 1rem;
    width:100%;
   display:block;
   &:focus{
    background-color: #001233;
    border: 2px solid #6BD1FF;
    outline: none;
  }
`
const Select=styled.select`
    margin-top: .5rem;
    border: 1px solid #fff;
    border-radius: 8px;
    color: white;
    background-color: #262626;
    font-size: 18px;
    padding: 1rem;
    width:100%;
   display:block;
`
const Mensaje=styled.textarea`
    display: block;
    margin: 1rem 0;
    width: 100%;
    max-width: 580px;
    min-height: 200px;
    padding: 1rem 10px;
    color: white;
    font-size: 18px;
    background-color: #262626;
    border: 1px solid #fff;
    border-radius: 8px;
  `
 const BtnContenedor=styled.div`
    display: flex;
    justify-content:space-between;
    >div{
      display: flex;
      gap:25px;
      margin-bottom: .5rem;
    }
    @media (max-width: 768px){
      flex-direction: column;

  }
  `
const NuevoVideo=({categorias})=>{
  const [titulo, setTitulo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [urlImagenVideo, setUrlImagenVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [codigo, setCodigo]=useState("");

  const location = useLocation();

  const videoEditando = location.state?.video;

  useEffect(() => {

  if(videoEditando){

     setTitulo(videoEditando.titulo || "");

    setUrlVideo(videoEditando.urlVideo || "");

    setUrlImagenVideo(videoEditando.urlImagenVideo || "");

    setCategoria(videoEditando.categoria || "");

    setDescripcion(videoEditando.descripcion || "");

    setCodigo(videoEditando.codigo || "");
    }
  }, [videoEditando]);

  const tituloDeFormulario="NUEVO VIDEO";

  async function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !urlVideo) {
      alert("Campos obligatorios");
       return;
      }
    if(videoEditando){
    await updateVideo(videoEditando.id,{
    titulo,
    urlVideo,
    urlImagenVideo, 
    categoria,
    descripcion,
    codigo
    });
    alert("Video actualizado");
   }else {await  createVideo({ titulo, 
      urlVideo, 
      urlImagenVideo, 
      categoria, 
      descripcion, 
      codigo}); 

     alert("Video creado"); 
     
    }    
    limpiarFormulario();   
  }
  
  function limpiarFormulario() {
  setTitulo("");
  setUrlVideo("");
  setUrlImagenVideo("");
  setDescripcion("");
  setCategoria("");
  setCodigo("");
}

  return(<FormularioContainer>
     <Titulo>{tituloDeFormulario}</Titulo>
     <Texto>COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARGETA DE VIDEO</Texto>
     <Formulario onSubmit={handleSubmit} >
      <Subtitulo>Crear Tarjeta</Subtitulo>
      <InputContainer>
        <CajaDeInput>
          <Label >Titulo</Label>
            <Input type="text" placeholder="Ingrese el Titulo" namme="titulo"
               value={titulo} onChange={e => setTitulo(e.target.value)}       
             />
        </CajaDeInput>
    <CajaDeInput>
        <Label >Categoria</Label>
                
          <Select value={categoria} onChange={e => setCategoria(e.target.value)} >
            <option value="">Seleccione</option>
              {
                categorias.map(
                    c => (
                  <option key={c.id} value={c.nombre}>
                  {c.nombre}
                 </option>)
                 )
                }
          </Select>             
    </CajaDeInput>
      
      </InputContainer> 
      <InputContainer>
        <CajaDeInput>
          <Label >Imagen</Label> 
              <Input type="url" placeholder="url de la Imagen" name="urlImagenVideo" 
              value={urlImagenVideo} onChange={e => setUrlImagenVideo(e.target.value)} 
              />
        </CajaDeInput>
        <CajaDeInput>
          <Label>Video</Label>  
            <Input type="url" placeholder="Ingrese el enlace del video" name="urlVideo"   
            value={urlVideo} onChange={e => setUrlVideo(e.target.value)}                     
            />
         </CajaDeInput>
      </InputContainer>
       <InputContainer>
       <Label>Codigo</Label>  
       <Input type="text" placeholder="Codigo de seguridad" name="codigo"   
            value={codigo} onChange={e => setCodigo(e.target.value)}                     
            />
       </InputContainer>

      <div>
               <Label >Descripción</Label>
               <Mensaje value={descripcion} onChange={e =>setDescripcion(e.target.value)} />
       </div>
       <BtnContenedor>
          <div>
              <Button  type="submit" texto="Guardar" />
              <Button  type="button" texto="Limpiar" onClick={limpiarFormulario} />
           </div>            
          <Link to="/categoria"><Button  type="button" texto="Nueva Categoria"/></Link>
        </BtnContenedor>
     </Formulario>

  </FormularioContainer>)
}

export default  NuevoVideo;
