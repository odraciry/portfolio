import styled from "styled-components";

export const ContainerPages = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
background: #FAF8F2;

    div{
        height: 100vh;
        background: #326CAA00;
        margin: auto;
        padding: 4rem 0;
        border-bottom: 2px solid #12121418;
        box-shadow: -5px 5px 10px #000000A1;
        h1{
            color: #515151;
            padding: 2rem;
            text-shadow: -5px 5px 8px #00000083;
        }
        img{
            width: 100%;
            height: 45%;
            box-shadow: -5px 5px 10px #000000A1;
        }
        div{
            width: 100%;
            height: 30%;
            text-align: left;
            font-size: 1.3rem;
            p{
                padding: 5%;
            }
        }
    }

    .ignews{
        img{
            width: 100%;
            height: 45%;
        }
        div{
            width: 100%;
            height: 30%;
            background: #121214;
            color: #A1B5BB;
            margin-top: -2%;
            p{
                padding:0 5%;
            }
        }
    }

    .rocketshoes{
        img{
            width: 100%;
            height: 45%;
        }
        div{
            width: 100%;
            height: 30%;
            background: linear-gradient(45deg, #191920, #121214F5);
            color: #A1B5BB;
            margin-top: -2%;
            p{
                padding:0 5%;
            }
        }
    }

    .dtMoney{
        img{
            width: 100%;
            height: 45%;
        }
        div{
            width: 100%;
            height: 30%;
            background: #5429cc;
            color: #FFFFFF;
            margin-top: -2%;
            p{
                padding:0 5%;
            }
        }
    }

    .filmes{
        img{
            width: 100%;
            height: 45%;
        }
        div{
            width: 100%;
            height: 25%;
            background: linear-gradient(30deg, #191920F3, #292c35, #292c35);
            color: #FFFFFF;
            margin-top: -2%;
            p{
                padding:0 5%;
            }
        }
    }
    @media only screen and (min-width: 600px){
        div{
            padding: 8% 2rem;
            border-radius: 9px;
            img{
                border-radius: 9px;
            }
            div{
                padding: 5rem;
                p{
                    padding: 6rem;
                }
            }
        }
    }
    @media only screen and (min-width: 1025px){
        div{
            padding: 1% 18%;
            
            div{
                padding: 8% 0;
            }
        }
    }

    @media only screen and (min-width: 1600px){
        div{
            padding: 1% 27%;
            div{
                padding:10%;
            }
        }
    }
`; 
