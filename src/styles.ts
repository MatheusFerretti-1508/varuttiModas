import {createGlobalStyle} from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;

        @media (max-width: 768px) {
            width: 90%;
        }
    }

    .mbotton {
        margin-bottom: 80px;
    }
`

export const cores = {
    verdeMarca: '#1AD6A2',
    azulMarca: '#2153CC',
    marromMarca: '#d2ab67',
    vermelhoMarca: '#D71920',
    amareloMarca: '#FFE500',
    branco: '#fff',
    preto: '#000'
}

export default EstiloGlobal