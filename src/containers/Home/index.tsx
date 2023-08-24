import ListaDeProdutos from "../../components/ListaDeProdutos"
import Footer from "../Footer"
import Header from "../Header"
import { ContainerHome } from "./styles"


const Home = () => {

    return (
        <>
        <Header />
        <ContainerHome className="container">
            <ListaDeProdutos tipo="destaques" titulo="Em destaque" />
        </ContainerHome>
        <Footer />
        </>
    )
}

export default Home 