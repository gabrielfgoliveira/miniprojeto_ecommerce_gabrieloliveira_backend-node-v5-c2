//Cadastro, consulta, atualização e remoção de produtos.
import type { Produto } from "./types.js";

let produtos: Produto[] = [{id: 1, nome: "Garrafa de Café", categoria: "Recipientes", preco: 80.00, estoque: 51}, {id: 2, nome: "Cafeteira", categoria: "Eletrodomésticos", preco: 150.00, estoque: 60}, {id: 3, nome: "Caneta esferográfica", categoria: "Papelaria", preco: 1.20, estoque: 115}];

export function cadastrarProduto(produto: Produto): boolean {

    let IDExistente = buscarProduto(produto.id);

    if(IDExistente != undefined){
        console.log("O ID do produto precisa ser único.")
        return false;
    }

    if(produto.nome.trim() == ''){ //trim() para caso o usuário tenha inserido somente uma cadeia de espaços. 
        console.log("O nome do produto não pode estar vazio.");
        return false;
    } else if (produto.preco <= 0){
        console.log("O preço do produto não pode ser menor ou igual a zero.");
        return false;
    } else if (produto.estoque < 0){
        console.log("O estoque do produto não pode ser menor que zero.");
        return false;
    } else{
        produtos.push(produto);
        return true;
    }
}


//Sobrecarga de métodos
export function buscarProduto(parametro: number): Produto | undefined; //via ID
export function buscarProduto(parametro: string): Produto | undefined; //via nome

//Esta função trabalha tanto com string quanto com number.
//Caso o paramentro for um number, assume-se que é um ID e pesquisa por ele. Caso for string, assume que é um nome (ou parte dele), e faz a busca por ele.
export function buscarProduto(parametro: number | string): Produto | undefined {
    if(typeof parametro == 'number'){
        return produtos.find(produto => produto.id === parametro);
    } else if(typeof parametro == 'string'){
        return produtos.find(produto => produto.nome.includes(parametro)); //Se incluir ao menos parte do texto em parâmetro, retorna o objeto desejado.
    }
}

export function listarProdutos(): void{
    console.log("=====|LISTA DE PRODUTOS|=====")
    console.log("|ID|NOME|CATEGORIA|PRECO|EM ESTOQUE|")
    for(let produto of produtos){
        console.log(`|${produto.id}|${produto.nome}|${produto.categoria}|${produto.preco}|${produto.estoque}|`)
    }
    console.log("=============================");
}
