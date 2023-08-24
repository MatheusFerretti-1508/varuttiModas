import { styled } from "styled-components";
import { cores } from "../../styles";


export const ContainerBeneficios = styled.div`
    padding: 16px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
        /* img {
            height: 50px;
            display: flex;
            margin: 0 auto;
        } */
        p {
            display: flex;
            justify-content: center;
            font-size: 12px;
            text-align: center;
            color: ${cores.azulMarca};

            @media (max-width: 768px) {
            font-size: 10px;
            }
        }
    }
`

export const ZapImg = styled.img`
    display: flex;
    margin: 0 auto;
    height: 40px;
    margin-bottom: 14px;
    margin-top: 2px;

    @media (max-width: 768px) {
        height: 25px;
    }
`
export const TruckImg = styled.img`
    height: 50px;
    display: flex;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 35px;
    }
`
export const CardImg = styled.img`
    height: 50px;
    display: flex;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 35px;
    }
`