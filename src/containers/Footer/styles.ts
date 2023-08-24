import styled from "styled-components";
import { cores } from "../../styles";


export const FooterContainer = styled.div`
    background-color: rgba(26, 214, 162, 0.6);
    padding: 32px;
    margin-top: 80px;

    @media (max-width: 768px) {
        padding: 8px;
    }
`

export const FooterContent = styled.footer`
    color: ${cores.branco};
    display: flex;
    justify-content: space-between;

    div {
        display: inline-block;

        p {
            margin-top: -12px;
            margin-bottom: 8px;
            position: sticky;
        }

        h4 {
            font-weight: 700;
            margin-bottom: 8px;
            font-size: 24px;
        }

        h5 {
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;

            div {
                background-color: #1AD6A2;
                border-radius: 50%;
                padding: 4px;
                margin-right: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            img {
                    width: 24px;
                    height: 24px;
                }

            a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: ${cores.branco};

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    small {
        font-size: 16px;
        margin-right: 8px;
        font-weight: 400;
    }
    
    p {
        margin: 0 auto;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        display: block;
    }
`

export const BgInsta = styled.div`
    background-color: #d2ab67;
    border-radius: 50%;
    padding: 4px;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        img {
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin-right: 0 !important;
        }
    }
`

export const SobreAMarca = styled.button`
    background: none;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    color: ${cores.branco};
`

// export const RedesSocias = styled.div`
//     position: absolute;
//     left: 580px;

//     @media (max-width: 768px) {
//         position: relative
//     }
// `