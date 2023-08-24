import { Espacador, HeaderContainer, HeaderContent, Logo } from "./styles"
import LogoImg from '../../assets/images/logovaruti.jpeg'
import MenuBar from "../../components/MenuBar"
import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import banner from '../../assets/images/bannerMabryofc.png'
import Beneficios from "../../components/ListaBeneficios"


const Header = () => {

    return (
        <Espacador>
            <HeaderContainer>
                <HeaderContent className="container">
                    <Link to={'/'}><Logo src={LogoImg}/></Link>
                </HeaderContent>
            </HeaderContainer>
            <MenuBar sloganOuLinks="links" />
            <Banner imgBanner={banner}/>
            <MenuBar sloganOuLinks="slogan"/>
            <Beneficios />
        </Espacador>
    )
}

export default Header