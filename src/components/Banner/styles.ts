import styled from "styled-components";


export const BannerContainer = styled.div`
    max-width: 100%;
    height: 480px;

    @media (max-width: 768px) {
        height: 224px;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (max-width: 768px) {
        object-fit: cover;
        }
    }
`