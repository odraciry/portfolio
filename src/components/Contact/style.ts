import styled from "styled-components";

export const ContainerContact = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
    padding: 2rem;
    background: #222D3634;
    color: #3F4850;
    h1{
        margin-bottom: -5%;
        margin-top: 5%;
    }
    .box{
        display: flex;
        background: #3F4850;
        width: 100%;
        height: 500px;
        margin-top: 20%;
        .form{
            width: 90%;
            height: 100%;
            padding: 2rem;
            padding-top: 4.5rem;
            background:#ADB2B8;
            text-align: left;
            h3{
                color: #222D36DE;
                font-size: 1.5rem;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                margin-left: 5%;
            }
            input{
                padding: 1rem;
                display: block;
                width: 100%;
                border: none;
                background: #222D36DE;
                height: 3rem;
                margin: 1rem auto;
                font-size: 1rem;
                color: #ADB2B8;
            }
            .mensagem{
                height: 5rem;
            }
            button{
                width: 50%;
                border: none;
                height: 2rem;
                margin: 1rem;
                margin-left: 50%;
                font-size: 1rem;
                font-weight: 500;
                :hover{
                    transition: 1s;
                    background: #1d2834;
                    color: #ADB2B8;
                }
            }
        }
        .links{
            margin: auto;
        img{
            display: block;
            width: 2rem;
            height: 2rem;
            margin: 1rem;
            animation: flutuacao 7s ease-in-out infinite;
                :hover{
                    cursor: pointer;
                }
        }
    }
}
@media only screen and (min-width: 600px){
    .box{
        margin-top: 10%;
        .form{
            h3{
                margin-left: 10%;
            }
            input{
                width: 80%;
            }
            button{
                margin-left: 40%;
            }
        }
    }        
}
@media only screen and (min-width: 1024px){
    .box{
        .form{
            width: 50%;
        }
        .links{
            display: flex;
            width: 50%;
            justify-content: space-around;
            margin: auto;
            img{
                width: 4rem;
                height: 4rem;
                
            }
        }
    }
}

@keyframes flutuacao {
        0%, 100%{
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-12px);
        }
    }
`;