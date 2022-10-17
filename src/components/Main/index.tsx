import { useEffect, useState, useRef } from "react";
import { Container } from "./style";
import Lottie from 'react-lottie';
import Aos from "aos";
import developer from "../../assets/developer.json"
import notebook from "../../assets/notebook.json"
import { Header } from "../Header";


export function Main() {
    const [lottie] = useState({ isStopped: false, isPaused: false }); // removendo a variável setLottie pois não estava sendo utilzado
    const animation = useRef(null)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: developer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const responsive = () => {

    }

    useEffect(() => {
        Aos.init();
    }, [])

    return (

        <>
            <Container>
            <Header />
                <div className="box">
                    <div className="sobre"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <h1 >Hello, I'm <br /><span>Ricardo Silva</span></h1>
                        <p className="descricao">I'm a full-stack developer</p>
                    </div>
                    <div className="lottie">
                        <Lottie
                            options={defaultOptions}
                            height="100%"
                            width="100%"
                            isStopped={lottie.isStopped}
                            isPaused={lottie.isPaused}
                            speed={1}
                            ref={animation}
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}