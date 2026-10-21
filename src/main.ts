//Inicialização da aplicação e demonstração das funcionalidades.

import { atualizarProduto, buscarProduto, cadastrarProduto, deletarProduto, filtrarProdutos, listarProdutos } from "./produtos";

cadastrarProduto({id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});

listarProdutos();

console.log(buscarProduto(1));

console.log(filtrarProdutos("Recipientes"));

atualizarProduto(4, {id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 54.97, estoque: 95})

listarProdutos();