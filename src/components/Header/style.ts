import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    padding-top: 1rem;
    h1{
            color: black;
            font-family: 'Silkscreen', cursive;
            display: none;
    }
        nav{
            text-align: center;
            a{
                margin: 1rem;
                font-size: 1.3rem;
                transition: 1s;
                color: black;
                text-decoration: none;
            }
            a:hover{
                transition: 1s;
                cursor: pointer;
                border-bottom: 1px solid var(--vinho);
                font-weight: 600;
            }
        }
    
    @media only screen and (min-width: 600px){
        display: flex;
        justify-content: space-around;
        
        h1{
            display: block;
        }
        nav{
             margin: .5rem;
            a{
                margin: 1rem;
                font-size: 1.3rem;
            }
        }
    }
`;