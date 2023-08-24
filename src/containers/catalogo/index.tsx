import ListaDeProdutos from "../../components/ListaDeProdutos"
import Footer from "../Footer"
import Header from "../Header"


const Verao = () => {

    return (
        <>
        <Header />
        <div className="container">
        <ListaDeProdutos tipo='catalogo' titulo="Catálogo" />
        </div>
        <Footer />
        </>
    )
}

export default Verao