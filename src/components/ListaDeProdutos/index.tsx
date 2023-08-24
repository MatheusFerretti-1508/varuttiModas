// import { Produtos } from "../../Store"
import { Card, ListaDeProdutosContainer, TituloDaSecao } from "./styles"

type Props = {
    titulo: string,
    tipo: 'catalogo' | 'destaques'
}


const ListaDeProdutos = ({titulo, tipo}:Props) => {

    return (
        <>
            <TituloDaSecao>{titulo}</TituloDaSecao>
            <ListaDeProdutosContainer>
            {tipo === 'destaques' ? (<>
                <Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/verao.jpg" alt="" />
                <small>Garotos(as) 6-14 anos</small>
                <h3>Conjuntos de verão</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card>
            <Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/moletom.jpg" alt="" />
                <small>Garotos(as) 6-14 anos</small>
                <h3>Conjuntos de inverno</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card>
            <Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/pijama.png" alt="" />
                <small>Garotos(as) 6-14 anos</small>
                <h3>Pijamas</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card>
            <Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/body.jpg" alt="" />
                <small>Garotos(as) 1-5 anos</small>
                <h3>Body</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card></>) : (<><Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/verao.jpg" alt="" />
                <small>Garotos(as) 6-14 anos</small>
                <h3>Conjuntos de verão</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card>
            <Card>
                <img src="https://www.kappesconfeccoes.com.br/imagens/home/categories/moletom.jpg" alt="" />
                <small>Garotos(as) 6-14 anos</small>
                <h3>Conjuntos de inverno</h3>
                {/* <p>R$ 320,00</p> */}
                <button onClick={() => alert('O catálogo será instalado')} type="button">Ver catálogo</button>
            </Card>
            </>)}
            
        </ListaDeProdutosContainer>
        </>
    )
}

export default ListaDeProdutos