import { About } from "../About";
import { ContainerAbout } from "../About/style";
import { ContainerHeader } from "./style";

export function Header () {
    return (
        <ContainerHeader>
            <h1>Odracir</h1> 
            <nav>
                <a href='#about'>About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </ContainerHeader>
    )
}