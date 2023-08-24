import { BannerContainer } from "./styles"


type Props = {
    imgBanner: string
}

const Banner = ({imgBanner}: Props) => {

    return (
        <BannerContainer>
            <img src={imgBanner} alt="banner" />
        </BannerContainer>
    )
}

export default Banner