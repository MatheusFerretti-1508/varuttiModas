import { Links, MenuBarContainer, MenuBarContent } from "./styles"

type Props = {
    sloganOuLinks: 'slogan' | 'links'
}


const MenuBar = ({sloganOuLinks}:Props) => {

    return (
        <MenuBarContainer>
            <MenuBarContent className="container">
                {sloganOuLinks === 'links' ? 
                (<>
                <Links to={'/'}>Menu</Links>
                <Links to={'/catalogo'}>Catálogo</Links>
                <Links to={'/sobre'}>Sobre nós</Links>
                <Links to={'https://www.instagram.com/varuttimodas/?hl=pt-br'}>Contato</Links>
                </>) : (
                <p>O melhor da moda infantil</p>
                )}

            </MenuBarContent>
        </MenuBarContainer>
    )
}

export default MenuBar