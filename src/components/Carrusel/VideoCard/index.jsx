import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {deleteVideo, getVideos} from "../../Services/videoService";

const Descripcion =styled.p`
  color:#f2f2f2;
  font-size:1.2rem;
`
const Titulo = styled.h3`
  text-align:center;
  color:#f2f2f2; 
`
const Card=styled.li`
    padding:0;
    margin-left:16px;
    position:relative;
    width: 330px;
    flex: 0 0 300px;
    min-height: 300px;
    border: 4px solid ${props => props.color};
    box-shadow: 0 0 15px ${props => props.color};
    height: auto;
    cursor:pointer;
    overflow: hidden;
    background: #000;
    &>img{
      display:block;
      width: 100%;
      height:auto;
    }
`
const TextoCard = styled.div`
    width: 100%;
    height: 55px;
    color: #fff;
    background-color: black;
    display: flex;
    align-items: center;
    position:absolute;
    bottom:0;
    &>button{
    width: 100%;
    height: 55px;
    text-align: center;    
    line-height:1;
    color: #fff;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
   font-size: 1.5rem;
   border: 1px solid #fff;
   cursor: pointer;
}
`
const VideoCard = ({video,categoria, setVideos}) =>{

  const navigate = useNavigate();
  function editarVideo(){
    navigate("/nuevo", {
      state: {
        video
      }
    })

  };

  // CARGAR DATOS 
    async function cargarVideos() {
    const data = await getVideos();
    setVideos(data);}

  //Eliminar
  async function eliminarVideo(video){
   const codigoIngresado = prompt( "Ingrese el código de seguridad" );
    if(String(codigoIngresado).trim() !== String(video.codigo).trim()){
         alert("Código incorrecto");
       return;}
    // confirmar
   const confirmar = window.confirm(
    "¿Eliminar video?"
    );
    if(!confirmar) return;
    // eliminar
      await deleteVideo(video.id);
      alert("video eliminado")

    // recargar
       cargarVideos();
  }

  return(<Card  key={video.id} color={categoria.categoriaColor} >
    <Titulo>{video.titulo}</Titulo>
    <a href={video.urlVideo} target="_blank" rel="noopener noreferrer">
          <img  src={video.urlImagenVideo} alt={video.titulo}/>
        </a>
    <Descripcion>{video.descripcion}</Descripcion>
     <TextoCard>
            <button  onClick={()=>eliminarVideo(video)} 
              >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>Eliminar
            </button>
            <button onClick={editarVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
               <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
             </svg>
             Editar      
            </button>             
          
          </TextoCard> 
  </Card>);
}

export default VideoCard;