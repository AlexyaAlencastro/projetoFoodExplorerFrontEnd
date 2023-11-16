import { Container } from "./style";
import logofooter from "../../assets/logofooter.svg"


export function Footer(){

    return(

        <Container>
            <div className="footer">
                <img src={logofooter} alt="Logo footer food explorer " />
                <h1>food explorer</h1>
            </div>

            <p>© 2023 - Todos os direitos reservados.</p>

        </Container> 

    )

}