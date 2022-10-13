import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, white ,#1d2834, var(--vinho));
    background-size: 300% 300%;
    
    scroll-snap-align: start;

    transition: background-image 2s;
    animation: colorir 20s ease-in-out forwards;

    @keyframes flutuacao {
        0%, 100% {
            transform: translateY(0px);
            transform: translateX(0px);
        }
        50% {
            transform: translateY(-12px);
            transform: translateX(-12px);
        }
    }

    @keyframes colorir {
        0% {
            background-position: 0% 25%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }


        .box {
            padding: 5% 3%;
            display: block;
            h1 {
                animation: flutuacao 12s ease-in-out infinite;
                margin-top: 20%;
                font-size: 2rem;
                border-bottom: 1px solid #1d2834;
                span {
                    font-size: 3rem;
                    color: var(--vinho);
                }
            }
            p {  
                animation: flutuacao 9s ease-in-out infinite;
                font-size: 1.2rem;
                margin-top: 1rem 
            }
            
            .lottie{
                /* display: none; */
                
            }
        }

    @media only screen and (min-width: 600px){
        .box{
            display: flex;
            justify-content: space-around;
            margin: auto;

            .sobre{
                display: block;
                margin-top: 10%;
                p{  
                    font-size: 1.2rem;
                    margin-top: 1rem 
                }
            }
        }
        .lottie{
            width: 50%;
        }
    }

    @media only screen and (min-width: 1025px)  {
        .box{
            display: flex;
            justify-content: space-around;
            
            .sobre{
                display: block;

                h1{
                    font-size: 3rem;
                    span{
                        font-size: 4rem;
                    }
                }
                p{  
                    font-size: 1.2rem;
                    margin-top: 1rem 
                }
            }
        }  
        .lottie{
            width: 50%;
        }
    }
`;