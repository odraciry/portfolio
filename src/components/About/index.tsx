import { ContainerAbout } from "./style";
import { useEffect } from "react"
import Aos from "aos";
import javascript from "../../assets/javascript.png"
import typescript from "../../assets/typescript.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"
import next from "../../assets/next.png"
import java from "../../assets/java.png"
import node from "../../assets/node.png"
import sass from "../../assets/sass.png"
import react from "../../assets/react.png"
import mysql from "../../assets/mysql.png"

export function About() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <ContainerAbout>
            <h1 className="about">About me</h1>
            <div className="box"
            data-aos-easing="ease-in-sine"
            data-aos-delay="850"
            data-aos-duration="3000"
            >

                <p>I'm 19 years old, I'm studying <span>systems development</span>.</p>
                <p>
                    I am focused on improving my knowledge in development.
                    In my study journey, I've been working with <span>ReactJs</span> and <span>TypeScript</span> on the frontend, for the backend I use <span>Java</span> with <span>SpringBoot</span>.
                </p>
            </div>
            <h1 className="st">My technologies</h1>
            <div className="skills">
                <img src={javascript} />
                <img src={typescript} />
                <img src={html} />
                <img src={css} />
                <img src={react} />
                <img src={node} />
                <br/>
                <img src={java} />
                <img src={sass} />
                <img src={mysql} />
                <img src={next} />
                <img src={git} />
                <img src={github} />
            </div>
        </ContainerAbout>
    )
}