import styled from "styled-components";
import Categoria from "./Categoria";
import VideoCard from "./VideoCard";
import Banner from "../Banner";
import Slider from "./Slider"

const ContenedorDeCarrucel=styled.section`
    width: 100%;
    height: auto;
    margin:0 0 16px 0;
`;

const Carrusel = ({categorias, videos, setVideos}) =>{

{/**const categorias=[
    {
        "nombre":"Frontend",
        "id":"1",
         "categoriaColor": "#6BD1FF"
     },
     {
        "nombre":"Backend",
        "id":"2",
        "categoriaColor": "#ff2700"
     },
     {
        "nombre":"Fullstack",
        "id":"3",
        "categoriaColor": "#ff00c0"
     },
      {
        "nombre":"React Js",
        "id":"4",
        "categoriaColor": "#27634a"
}];*/}
{/** 
const videos=[{
            "id":1,
            "url":"img/front1.png",
            "titulo":"Titulo 1",
            "categoria":"Frontend",
            "descripcion":"Cuando usar let, const y var"
            },
            {"id":2,
            "url":"img/front2.png",titulo:"Titulo 2",
            "categoria":"Backend",
            "descripcion":"Oracle next education"
            },
            {id:3,
             "url":"img/front3.png",
             "titulo":"Titulo 3",
             "categoria":"Fullstack",
             "descripcion":"Alura"
             },
             {"id":4,
             "url":"img/front4.jpg",
             "titulo":"Titulo 4",
             "categoria":"React Js",
             "descripcion":"Arry y listas"
             },
             {"id":5,
             "url":"img/front4.jpg",
             "titulo":"Titulo 4",
             "categoria":"Frontend",
             "descripcion":"Arry y listas"
}];
*/}
    return (
  <ContenedorDeCarrucel>
        <Banner />
       { /*Primer map para recorrer cada categoria */}
           {
            categorias.map((categoria)=>{
             const videosFiltrados = videos.filter((video)=>video.categoria === categoria.nombre);
             // límite máximo REAL
            

              return(
               <Categoria color={categoria.categoriaColor}
               descripcion={categoria.descripcion}
               nombre={categoria.nombre}>
                {/**segundo map */}
                
                <Slider videosFiltrados={videosFiltrados}>
                  {
                  videosFiltrados.map((video)=>
                  <VideoCard                
                    categoria={categoria} 
                      video={video}      
                      setVideos={setVideos}           
                  />
                  )
                  }
                  </Slider>
                
               </Categoria>)
            }
            )}    
  </ContenedorDeCarrucel>
 )
}

export default Carrusel;