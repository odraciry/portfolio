import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, #515151 ,#1d2834, var(--vermelho));
    background-size: 300% 300%;
    box-shadow: -5px 5px 10px #000000A1;

    transition: background-image 2s;
    /* animation: colorir 20s ease-in-out forwards; */
    animation: colorir 14s ease-in infinite;

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
            background-position: 0% 25%;
        }
    }

        .box {
            padding:20% 3%;
            display: block;
            
            .sobre{
                background: linear-gradient(120deg, #1D283450,#E0E4E700);
                border-radius: 8px;
                padding: 2rem;
                text-align: center;
                box-shadow: -5px 5px 10px #000000A1;
                backdrop-filter: invert(0%);
                border: 4px solid #00000000;
                transition: 4s ease-in-out;


                :hover{
                    transition: 4.5s ease-in-out;
                    backdrop-filter: invert(10%);
                    -webkit-box-shadow: 0px 0px 32px 20px rgba(54,128,201,6);
                    -moz-box-shadow: 0px 0px 32px 20px rgba(54,128,201,6);
                    box-shadow: 0px 0px 25px -10px rgba(54,128,201,6);
                    background: linear-gradient(120deg, #071E3511, #020D1823);
                    border: 4px solid #367FC994;
                    h1{
                        span{
                            transition: 4s ease-in-out;
                            color: #061D36;
                            text-shadow: -5px 5px 20px #3680C9;
                        }
                    }

                }   
            }
            h1 {
                animation: flutuacao 30s ease-in-out infinite;
                /* margin-top: 20%; */
                font-size: 2rem;
                border-bottom: 1px solid #1d2834;
                text-shadow: -5px 5px 10px #000000C2;
                span {
                    transition: 4s ease-in-out;
                    font-size: 3rem;
                    color: #CE6A85DC;
                    text-shadow: -5px 5px 10px #000000C2;
                }
            }
            p {  
                text-shadow: -5px 5px 10px #000000BD;
                animation: flutuacao 9s ease-in-out infinite;
                font-size: 1.2rem;
                margin-top: 1rem;
            }
            
            
        }
            
        }

    @media only screen and (min-width: 600px){
        background: linear-gradient(100deg, #515151 ,#203449, #1d2834, #1d2834,#0E1E33EA, #0E1E33C4, #0E1E338C);
        background-size: 300% 300%;
        transition: background-image 2s;
        animation: colorir 14s ease-in infinite;
        .box{
            padding-top: 20%;
            display: flex;
            justify-content: space-around;
            margin: auto;

            .sobre{
                display: block;
                margin-top: 10%;
                text-align: left;
                transition: 4.5s;
                animation: 5s ease-in-out 0s infinite normal none running flutuacao;
                h1{
                    margin-top: 20%;
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

    @media only screen and (min-width: 1025px)  {
        .box{
            padding-top: 4%;
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

    @media only screen and (min-width: 1600px){
        .box{
            padding-top:0;
            .sobre{
                
                padding-top: 5%;
                padding-bottom:6%;
            }
        }
        .lottie {
            width: 45%;
        }
    }
`;
