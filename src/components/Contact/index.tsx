import { ContainerContact } from "./style";
import github from "../../assets/github1.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"
import email from "../../assets/o-email.png"

export function Conatact () {
    return(
        <ContainerContact>
            <h1>Contact</h1>
            <div className="box">
                <div className="form">
                    <h3>Get in touch</h3>
                    <input type="text" className="nome" placeholder="Nome"/>
                    <input type="email" className="email" placeholder="Email"/>
                    <input type="text" className="mensagem" maxLength={400} placeholder="Mensagem"/>
                    <button>Submit</button>
                </div>
                <div className="links">
                    <img src={instagram} />
                    <img src={whatsapp} />
                    <img src={email} />
                    <img src={github} />
                </div>
            </div>
        </ContainerContact>
    )
}