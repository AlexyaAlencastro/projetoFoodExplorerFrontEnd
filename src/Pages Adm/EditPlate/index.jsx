import { Container, Page } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";


import imgButtonBack from "../../assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";



export function EditPlate(){

    const navigation = useNavigate()

    return(
        <Container>
            <Header />
            <Page>
            <div className="buttonBack">
                <img src={imgButtonBack} alt="Imagem de voltar" />
                <ButtonText
                onClick={() => navigation(-1)}
                title={"voltar"}
                 />
            </div> 
            <h1>Editar Prato</h1>

            <Form />
            <div className="save">
            <button
            onClick={() => navigation("/")}
            className="delete"
            >
                Excluir Prato
            </button>
            <Button
            onClick={() => navigation("/")}
            title={"Salvar alterações"}
             />
             </div>

            </Page>

            <Footer />
            
        </Container>
    )

}