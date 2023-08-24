import wppImg from '../../assets/images/whatsapp-svgrepo-com (1).svg'
import truckImg from '../../assets/images/truck-speed-svgrepo-com (1).svg'
import cardImg from '../../assets/images/credit-card-svgrepo-com (1).svg'
import { CardImg, ContainerBeneficios, TruckImg, ZapImg } from './styles'


const Beneficios = () => {

    return (
        <div style={{backgroundColor: '#ebebeb'}}>
            <ContainerBeneficios className='container'>
                <div>
                    <CardImg src={cardImg}></CardImg>
                    <p>Pagamentos parcelados em até 4 vezes</p>
                </div>
                <div>
                    <TruckImg src={truckImg}></TruckImg>
                    <p>Frete grátis</p>
                </div>
                <div>
                    <ZapImg src={wppImg}></ZapImg>
                    <p>Compras diretamente pelo Whatsapp</p>
                </div>
            </ContainerBeneficios>
        </div>
    )
}

export default Beneficios