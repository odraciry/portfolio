import { ContainerPages } from "./style";
import ignews from "../../assets/prints/ignews.png"
import rocketshoes from "../../assets/prints/rocketShoes.png"
import dtMoney from "../../assets/prints/dtMoney.png"
import filmesAleatorios from "../../assets/prints/filmesAleatorios.png"
export function Websites() {
    return (
        <ContainerPages id="projects">
            <div className="ignews">
                    <h1>Ig.News</h1>
                <img src={ignews} />
                <div>
                    <p>
                        Blog desenvolvido para aprender Next.js e seus fundamentos, utilizando funções back-end (serverless) para a comunicação com uma plataforma de pagamentos (Stripe), banco de dados (FaunaDB) e o CMS (Prismic CMS).
                    </p>
                </div>
            </div>
            <div className="rocketshoes">
                <h1>RocketShoes</h1>
                <img src={rocketshoes} />
                <div>
                    <p>
                        Aplicação criada em reactjs com o objetivo de aprender a criar um hook de carrinho de compras.
                    </p>
                </div>
            </div>
            <div className="dtMoney">
                <h1>dtMoney</h1>
                <img src={dtMoney} />
                <div>
                    <p>
                        O projeto dtmoney é uma plataforma que cadastra e mostra as transações, além de calcular o total de depósitos e retiradas e o saldo final do usuário.
                    </p>
                </div>
            </div>
            <div className="filmes">
                <h1>Filmes aleatórios</h1>
                <img src={filmesAleatorios} />
                <div>
                    <p>
                        Um site que gera filmes aleatorios, para quando estiver sem ideias do que assistir.
                    </p>
                </div>
            </div>
        </ContainerPages>
    )
}