import imagemTeste from '../assets/images/LOGOTESTEv2-removebg-preview.png'


type Produto = {
    classificacao: string,
    nome: string,
    preco: string,
    foto: string
    id: number
}

export const Produtos:Produto[] = [
    {
        classificacao: 'Garotos 6-14 anos',
        nome: 'Camisa social',
        preco: 'R$ 320,00',
        foto: `${imagemTeste}`,
        id: 1,
    }
]