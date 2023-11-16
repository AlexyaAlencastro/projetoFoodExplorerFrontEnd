import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../assets/logofood.svg"
import { useNavigate } from "react-router-dom";


export function SignUp(){


    const navigation = useNavigate()

    return(
        <Container>
            
            <div className="logo">
                <img src={logoFood} alt="Imagem da logo" />
                <h1>food explorer</h1>
            </div>

            <form>
                <h1>Crie sua conta</h1>
                <div className="input-wrapper">
                    <p>Seu nome</p>
                    <input type="text" placeholder="Ex: Alexya Alencastro"/>
                </div>
                <div className="input-wrapper">
                    <p>Email</p>
                    <input type="text" placeholder="teste@gmail.com"/>
                </div>
                <div className="input-wrapper">
                    <p>Senha</p>
                    <input type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button 
                title={"Entrar"}/>
             <button
             onClick={() => navigation("/")}
             className="signUp"
             >
                 Já tenho uma conta
             </button>
            </form>


        </Container>
    )
}