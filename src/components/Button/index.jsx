import styled from "styled-components";

const Btn = styled.button`
  padding: 20px 30px;
    background-color: rgb(0,0,0);
    color: #fff;
    font-size:1rem;
    font-weight: bold;
    letter-spacing: 1px;
    border: 1px solid #fff;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
     color: #000;
     background-color: #fff;
     } 
     @media (max-width: 768px){
      padding: 12px 16px;

    width: 100%;
  }
`

const Button = (props) => {
  return (<Btn>
     {props.texto}
    </Btn>)
}
export default Button