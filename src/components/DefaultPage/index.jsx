import Cabecera from "../Cabecera";
import Pie from "../Pie";

const DefaultPage = ({ children }) => {
return (
<>
  <Cabecera />
    {children}
    
  <Pie />
</>
);
}
export default DefaultPage;