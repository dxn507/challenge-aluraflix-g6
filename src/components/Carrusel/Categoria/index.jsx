import styled from "styled-components";

const CategoriaEstilizada = styled.div`
  min-width: 100%;
  height: auto;
  margin-bottom: 40px; /* Separación entre categorías */
  margin:1rem;
`
const TituloCategoria = styled.h3`
  margin: 15px 0;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #FFFFFF; /* Cambiado a blanco para mejor contraste con fondos de color */
  background-color: ${props => props.$categoriaColor || '#3e3e3e'}; 
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  max-width: 400px;
`
const DescripcionCategoria=styled.p`
  color:#f2f2f2;
`
const Categoria = (props)=>{

  return(<CategoriaEstilizada >
    <TituloCategoria $categoriaColor={props.color}>{ props.nombre}</TituloCategoria>
    <DescripcionCategoria>
            {props.descripcion}
     </DescripcionCategoria>
     {props.children}
     
  </CategoriaEstilizada>
  )
}

export default Categoria;
