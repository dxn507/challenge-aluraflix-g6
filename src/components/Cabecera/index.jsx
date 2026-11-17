import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "../Button";

const HeaderEstilizado = styled.header`
    width:auto;
    padding: 0 2.5rem;
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:rgb(3,3,6);
    color: white;
    border-bottom:1px solid rgb(37, 123, 239);
    img{
        width: 212px;
    }

`

const Cabecera = () => {
    return <HeaderEstilizado>
        <Link to="/"><img src={Logo} alt="Logo Alura Latam" /></Link>
        <Link to="/nuevo"><Button texto="NUEVO VIDEO" /></Link>
    </HeaderEstilizado>
}

export default Cabecera;