import { BgInsta, FooterContainer, FooterContent, SobreAMarca } from "./styles"
import instagramImg from '../../assets/images/instagram-svgrepo-com (2).svg'
import facebookImg from '../../assets/images/facebook-boxed-svgrepo-com (1).svg'
import emailImg from '../../assets/images/email-1-svgrepo-com (1).svg'
import telefoneImg from '../../assets/images/telephone-receiver-material-2-svgrepo-com (2).svg'
import ajudaImg from '../../assets/images/help-desk-log-svgrepo-com (1).svg'
// import { useState } from "react"


const Footer = () => {

    // const [infoMarca, setInfoMarca] = useState(false)

    return (
        <FooterContainer>
            <FooterContent className="container">
                <div>
                    <h4>Institucional</h4>
                    <SobreAMarca>Sobre a Varutti:</SobreAMarca>
                        <p>
                            A Varutti é uma loja de moda infantil <br />
                            comprometida com a entrega de produtos  <br />
                            de extrema qualidade e elegância.
                        </p>
                    {/* <h5><a href="mailto:matheus10.ferretti@gmail.com">Trabalhe conosco</a></h5> */}
                </div>
                <div>
                    <h4>Redes sociais</h4>
                    <h5><BgInsta><a href="https://www.instagram.com/varuttimodas/?hl=pt-br"><img src={instagramImg} alt="logo do instagram" /></a></BgInsta>Instagram</h5>
                    <h5><BgInsta><a href="#"><img src={facebookImg} alt="logo do facebook" /></a></BgInsta>Facebook</h5>
                </div>
                <div>
                    <h4>Contato</h4>
                    <h5><div><img src={telefoneImg} alt="telefone" /></div>47 9764-2166</h5>
                    <h5><a href="mailto:matheus10.ferretti@gmail.com"><div><img src={emailImg} alt="email" /></div>varutimodas@gmail.com</a></h5>
                    <h5><div><img src={ajudaImg} alt="ajuda" /></div>Peça ajuda</h5>
                </div>
                {/* <p><small>Telefone:</small>47 9764-2166</p>
                <p> <BgInsta><a href="https://www.instagram.com/mabrykidsloja/"><img src={instagramImg} alt="logo do instagram" /></a></BgInsta></p>
                <p>Todos os direitos reservados - MabryKids - CNPJ: 12.621.018/0001-90 Endereço: Rua dos Caçadores 3522 - Velha Central - CEP 89040-313 - Blumenau - SC © mabrykids.com.br</p> */}
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer