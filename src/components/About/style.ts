import styled from "styled-components";

export const ContainerAbout = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
    padding: 2rem;
    background: #fff;
    h1{
        font-size: 1.5rem;
    }
    .box{
        font-size: 1rem;
        margin: 1.5rem .2rem;
        text-align: left;
        background: linear-gradient(45deg, #ffff, #BEC7CF27, #ffff);

        p{
            margin: .5rem;

            span{
                color: red;
            }
        }
    }
    .skills{
        background: #BEC7CF27;
        border-radius: 9px;
        margin-top: 2rem;
        text-align: center;
        img{
            width: 60px;
            margin: 1rem;
        }
    }
    @media only screen and (min-width: 1024px){
    h1{
        font-size: 3rem;
    }
    .box{
        font-size: 1.5rem;
        margin: 3rem 2rem;
        text-align: left;

        p{
            margin: 1rem;

            span{
                color: red;
            }
        }
    }
    .skills{
        text-align: center;
        img{
            width: 100px;
            animation: flutuacao 7s ease-in-out infinite;
        }
    }
    }

    @media only screen and (min-width: 600px){
        padding: 3.3rem;
        h1{
            font-size: 3rem;
        }
        .box{
            font-size: 1.5rem;
            margin: 1.5rem .2rem;
            text-align: left;

            p{
                margin: .5rem;

                span{
                    color: red;
                }
            }
        }
        .st{
            margin: 4rem 0;
        }
        .skills{
            text-align: center;
            img{
                width: 90px;
                margin: 1.1rem;
            }
        }
    }

    @keyframes flutuacao {
        0%{
            transform: translateX(0px);
        }
        50% {
            
            transform: translateX(-12px);
        }
    }
`;