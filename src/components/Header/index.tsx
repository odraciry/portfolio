import { About } from "../About";
import { ContainerAbout } from "../About/style";
import { ContainerHeader } from "./style";

export function Header () {
    return (
        <ContainerHeader>
            <h1>Odracir</h1> 
            <nav>
                <a href='#about'>Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </nav>
        </ContainerHeader>
    )
}