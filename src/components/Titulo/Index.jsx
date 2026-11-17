import styled from "styled-components"

const TituloEstilizado=styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
`

const Titulo=(props)=>{
    return (
        <TituloEstilizado>
            {props.texto}
        
        </TituloEstilizado>
    )
}
export default Titulo