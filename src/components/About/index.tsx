import { ContainerAbout } from "./style";
import { useEffect } from "react"
import Aos from "aos";
import javascript from "../../assets/script-java.png"
import typescript from "../../assets/typescript.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"
import spring from "../../assets/boot_spring.png"
import java from "../../assets/java.png"
import node from "../../assets/node-js.png"
import sass from "../../assets/sass.png"
import react from "../../assets/react.png"
import mysql from "../../assets/mysql.png"

export function About() {
    return (
        <ContainerAbout id="about">
            <h1 className="about">Sobre mim</h1>
            <div className="box"
            data-aos-easing="ease-in-sine"
            data-aos-delay="850"
            data-aos-duration="3000"
            >

                <p>Tenho 19 anos, estou estudando <span>desenvolvimento de sistemas</span>.</p>
                <p>
                Na minha jornada de estudos, tenho trabalhado com <span>ReactJs</span> e <span>TypeScript</span> no frontend, já para o backend uso <span>Java</span> com <span>SpringBoot</span>.
                </p>
                <p>
                Estou em busca de meu primeiro emprego, para poder aprender e aprofundar muito mais os meus conhecimentos nas tecnologias.
                </p>
            </div>
            <h1 className="st">Minhas tecnologias</h1>
            <div className="skills">
                <img src={javascript} />
                <img src={typescript} />
                <img src={html} />
                <img src={css} />
                <img src={react} />
                <img src={github} />
                <br/>
                <img src={java} />
                <img src={sass} />
                <img src={mysql} />
                <img src={node} />
                <img src={spring} />
                <img src={git} />
            </div>
        </ContainerAbout>
    )
}
