import styled from "styled-components";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const FooterEstilizado = styled.footer`
    width: 100%;
    min-width: 100%;
    min-height: 8.5rem;
    padding: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgb(37,123, 229);
    background-color: #262626;
    color: #fff;
    text-align: center;
    div{
    margin-top: 2rem;
    margin-bottom:2rem;
     }
`
const Pie = ()=>{
    return(
        <FooterEstilizado>
            <div>
              <Link to="/"><img src={Logo} alt="Logo Alura Latam" /></Link>
              <p>Todos los derechos reservados</p>
              <p>Alura Challenge - AluraFlix</p>
            </div>
        </FooterEstilizado>
    )
}

export default Pie; 