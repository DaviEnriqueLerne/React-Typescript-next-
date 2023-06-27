import Produto from "@/model/Produto";

const produtos: Produto[] = [
        
        {
                id: 1,
                nome: "Camisa",
                preco: 99.0,
                descricao: "Camisa",
                imagem: 'https://source.unsplash.com/featured/300x200?tshirt'
        },
        {
                id: 2,
                nome: "calça jeans",
                preco: 100,
                descricao: "Calça jeans",
                imagem: 'https://source.unsplash.com/featured/300x200?jeans'
        },
        {
                id:3,
                nome: "tenis",
                preco: 140,
                descricao: "Tenis",
                imagem: 'https://source.unsplash.com/featured/300x200?sneakers'
        },
        {
                id: 4,
                nome: "T-shirt",
                preco: 100,
                descricao: "T-shirt",
                imagem: 'https://source.unsplash.com/featured/300x200?shirt'
        }
        
]

export default produtos;