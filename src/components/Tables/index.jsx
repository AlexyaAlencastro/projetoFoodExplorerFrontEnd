import { Container } from "./style";
import { Button } from "../Button";
import { FiTrash } from "react-icons/fi";

import imgDish from "../../Assets/imagem_prato_camarao.png"
import { useNavigate } from "react-router-dom";

export function Tables({title, table, ...rest}){

    const navigation = useNavigate();
       
    return(
        <Container
        {...rest}
        >  
            <h1>{"Alexya Alencastro"}</h1>
            <h2>{"25"}</h2>
            <img src={imgDish} alt="Imagem de do prato de comida" />
            <Button
            onClick={() => navigation("/carrinho")}
            title={"Visualizar"}
             />
             <div className="buttonDelete">
            <FiTrash />
            </div>
        </Container>
    )
}