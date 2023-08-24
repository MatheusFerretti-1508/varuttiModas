import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const MenuBarContainer = styled.div`
    background-color: ${cores.verdeMarca};
    color: ${cores.branco};
`

export const MenuBarContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;

    p {
        margin: 0 auto;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        color: ${cores.branco};

        @media (max-width: 768px) {
        font-size: 16px;
        }
    }
`

export const Links = styled(Link)`
    font-size: 24px;
    transition: transform 1s ease;
    text-decoration: none;
    color: ${cores.branco};

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`