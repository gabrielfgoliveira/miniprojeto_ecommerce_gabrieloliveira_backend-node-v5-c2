//Inicialização da aplicação e demonstração das funcionalidades.

import { atualizarProduto, buscarProduto, cadastrarProduto, deletarProduto, filtrarProdutos, listarProdutos } from "./produtos";
import { listarClientes, buscarCliente, cadastrarCliente } from "./clientes";
import { Carrinho } from "./carrinho";

cadastrarProduto({id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});

listarProdutos();

console.log(buscarProduto(1));

console.log(filtrarProdutos("Recipientes"));

atualizarProduto(4, {id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 54.97, estoque: 95})

listarProdutos();

//listarClientes();

cadastrarCliente({id: 4, nome: "Ana Matos", email: "ana.matos@example.com"});
console.log(buscarCliente(3));
console.log(buscarCliente("joao.silva@example.com"));

cadastrarCliente({id: 5, nome: "Ana dos Santos", email: "ana.santos@example.com"})

listarClientes();

const carrinho1 = new Carrinho(5);

carrinho1.adicionarItem(1, 1);
carrinho1.adicionarItem(2, 3);
carrinho1.adicionarItem(3, 4);

carrinho1.listarItens();

const carrinho2 = new Carrinho(3);

carrinho2.adicionarItem(4, 2);
carrinho2.adicionarItem(1, 3);
carrinho2.adicionarItem(1, 1); //Corrigir: O sistema está permitindo duplicatas.

carrinho2.listarItens();