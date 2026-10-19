//Inicialização da aplicação e demonstração das funcionalidades.

import { buscarProduto, cadastrarProduto, listarProdutos } from "./produtos";

cadastrarProduto({id: 1, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});

listarProdutos();