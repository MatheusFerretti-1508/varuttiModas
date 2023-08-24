import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const Espacador = styled.div`
    margin-bottom: 80px;
`

export const HeaderContainer = styled.div`
    background-color: rgba(26, 214, 162, 0.6);
    display: flex;
    justify-content: center;
    height: 230px;
    padding-bottom: 24px;
    padding-top: 2px;

    @media (max-width: 768px) {
        height: 190px;
    }
`

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    
    a {
        text-decoration: none;
        color: none;
        cursor: auto;
        height: 100%;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`


export const Logo = styled.img`
    height: 200px;
    width: 200px;
    cursor: pointer;
    border-radius: 50%;
    /* border: 3px solid;
    border-color: ${cores.amareloMarca}; */
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 160px;
        width: 160px;
    }
`

export const LinkHeader = styled(Link)`
    text-decoration: none;
`

// export const Circulo = styled.div`
//     background-color: #fff;
//     border-radius: 50%;
//     border: 2px solid;
//     border-color: ${cores.marromMarca};
//     height: 200px;
//     width: 200px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `