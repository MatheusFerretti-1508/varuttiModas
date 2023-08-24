import { styled } from "styled-components";
import { cores } from "../../styles";


export const ListaDeProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;

    @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 90%;
    }
`

export const Card = styled.div`
    height: 400px;
    width: 450px;
    margin: 0 auto;
    color: ${cores.azulMarca};

    img {
        width: 100%;
        height: 260px;
        /* border: 2px solid ${cores.verdeMarca}; */
        border-radius: 16px;
    }

    small {
        font-size: 12px;
        margin-bottom: 4px;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 4px;
    }

    p {
        margin-bottom: 4px;
    }

    button {
        cursor: pointer;
        width: 100%;
        padding: 4px;
        border: none;
        color: ${cores.branco};
        background-color: ${cores.azulMarca};

        &:hover {
            background-color: rgb(33, 83, 204, .8);
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 48px;
        width: 300px;
        
        img {
            height: 200px;
        }
    }
`

export const TituloDaSecao = styled.h2`
    margin: 0 auto;
    width: 90%;
    font-size: 28px;
    margin-bottom: 36px;
    color: ${cores.azulMarca};
`

