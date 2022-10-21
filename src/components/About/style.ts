import styled from "styled-components";

export const ContainerAbout = styled.div`
    width: 100%;
    height: 100vh;
    padding: 2rem;
    background: #fff;
    box-shadow: -5px 5px 10px #000000A1;
    h1{
        font-size: 1.5rem;
        font-weight: 500;
        color: #515151;
    }
    .box{
        font-size: 1rem;
        margin: 1.5rem .2rem;
        text-align: left;
        background: linear-gradient(45deg, #07509415, #2C598038, #07509449);
        border: 3px solid #07509433;
        padding: 2rem;
        border-radius: 5px;

        p{
            font-family: 'Barlow', sans-serif;
            font-weight: 600;
            margin: .5rem;
            color: #212427E7;
            span{
                color: #075094;
            }
        }
    }
    .skills{
        background: #F5F5F527;
        border-radius: 9px;
        padding: 1rem;
        text-align: center;
        img{
            transition: width 1s;
            width: 20%;
            margin: 1rem;
            animation: flutuacao 7s ease-in-out infinite;
            :hover{
                
                transition: width 1s;
                width: 21%;
            }
        }

    }
    @media only screen and (min-width: 600px){
        padding: 5rem 3.3rem;
        h1{
            font-size: 3rem;
        }
        .box{
            font-size: 1.5rem;
            margin: 1.5rem .2rem;
            text-align: left;

            p{
                margin: .5rem;
            }
        }
        .st{
            margin: 2.5rem 0;
        }
        .skills{
            text-align: center;
            padding: 0;
            img{
                transition: width 1s;
                width: 10%;
                margin: 1.1rem;
                :hover{
                transition: width 1s;
                width: 11%;
            }
            }
        }
    }

    @media only screen and (min-width: 1024px){
        padding: 5rem 2rem;
    h1{
        font-size: 3rem;
    }
    .box{
        font-size: 1.5rem;
        margin: 1.5rem 2rem;
        text-align: left;
        p{
            margin: 1rem;
        }
    }
    .skills{
        text-align: center;
        margin: 0;
        img{
            transition: width 1s;
            width: 7%;
            :hover{
                transition: width 1s;
                width: 9%;
            }
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