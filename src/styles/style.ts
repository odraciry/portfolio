import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --vermelho: #970d1a;
        --vinho: #4e204d;
        --azul-100: #6cd0ff;
        --azul-500: #1c2e4c;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
        //para ajustar o tamanho da fonte de acordo com o tamanho da tela 
        @media(max-width: 1080px){
            font-size: 93.75%;
        }   

        @media(max-width: 720px){
            font-size: 87.5%;
        }

        @media(max-width: 512px){
            font-size: 83.75%;
        }
    }
    @media only screen and (min-width: 600px){
        ::-webkit-scrollbar{
            width: 12px;
        }
    
        ::-webkit-scrollbar-thumb{
            width: 10px;
            background: var(--vinho);
        }
    }

    body{
        background: var(--background);
        //para ter fontes mais detalhadas
        -webkit-font-smoothing: antialiased;
    }

    body, textarea, button, input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
`
export const ScrollEfect = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`;