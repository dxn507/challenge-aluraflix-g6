import styled from "styled-components";
import { useState } from "react";


const CarruselContainer = styled.div`
 width: 100%;
 overflow: hidden;
 position: relative;
 padding: 20px 0;
 background:none;
`;
const Lista = styled.ul`
    min-width: 100%;
    height:auto;
    display: flex;
    gap: 1rem;
    margin:0;
    padding:0;
    transition: transform 0.5s ease;
    transform: translateX(${props => props.translate}px);
`;
const Boton = styled.button`
 position: absolute;
 top: 40%;
 z-index: 10;
 background: rgba(0,0,0,0.7);
 border: none;
 color: white;
 font-size: 30px;
 padding: 10px 15px;
 cursor: pointer;
`;

const BotonIzquierda = styled(Boton)`
left: 0;
`;

const BotonDerecha = styled(Boton)`
right: 0;
`;
const Slider =({children,videosFiltrados})=>{
  const [index, setIndex] = useState(0);
  const cardWidth = 330;
  // cantidad de cards visibles
    const visibles = window.innerWidth < 768 ? 1 : 4;
  // límite máximo REAL
  const maxIndex = videosFiltrados.length - visibles;

  // 👉 avanzar
    const siguiente = () => {
  if(index < maxIndex){
    setIndex(index + 1);
   }
};

  // 👉 retroceder
   const anterior = () => {
    if(index > 0){
      setIndex(index - 1); }
    };
  return(<CarruselContainer>
    <BotonIzquierda onClick={anterior}>
        ❮
      </BotonIzquierda>
      <BotonDerecha onClick={siguiente}>
        ❯
      </BotonDerecha>
   
    <Lista translate={-index * cardWidth}>
     {children}
    </Lista>
  </CarruselContainer>
  )
}

export default Slider;