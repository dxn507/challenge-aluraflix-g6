import styled from "styled-components";
import { Routes,Route} from "react-router-dom";
import { useState,useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import DefaultPage from "./components/DefaultPage";
import NuevoVideo from "./components/NuevoVideo";
import NuevaCategoria from "./components/NuevaCategoria";
import Carrusel from "./components/Carrusel";

const Container = styled.div`
  width:100%;
  min-height:100vh;
`

function App() {
  const [categoriasState, setCategoriasState]=useState([]);
  const [videosState, setVideosState]=useState([]);
  useEffect(()=>{
    const getCategorias = async ()=>{
    const res = await fetch('http://localhost:3000/categorias');
    const dataCategoria = await res.json();
    setCategoriasState([...dataCategoria]);
  }
  setTimeout(()=>getCategorias(),3000);
  },[]);
   useEffect(()=>{
    const getVideos = async ()=>{
    const res = await fetch('http://localhost:3000/videos');
    const dataVideo = await res.json();
    setVideosState([...dataVideo]);
  }
  setTimeout(()=>getVideos(),3000);
  },[]);

  return (
    <>
    <Container>
        <GlobalStyles/> 
        <DefaultPage>
          <Routes>
            <Route path="/" element={<Carrusel categorias={categoriasState} 
             videos={videosState} 
             setVideos={setVideosState}
            />} />
            <Route path="/nuevo" element={<NuevoVideo 
              categorias={categoriasState} 
              setCategorias = {setCategoriasState}
            />} 
            />
            <Route path="/categoria" element={<NuevaCategoria  />} />   
        </Routes>
         </DefaultPage>
      </Container>
    </>
  )
}

export default App;