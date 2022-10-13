import { About } from "../About";
import { ContainerAbout } from "../About/style";
import { ContainerHeader } from "./style";

export function Header () {
    return (
        <ContainerHeader>
            <h1>Odracir</h1> 
            <nav>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </nav>
        </ContainerHeader>
    )
}