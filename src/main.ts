//Inicialização da aplicação e demonstração das funcionalidades.

import { atualizarProduto, buscarProduto, cadastrarProduto, deletarProduto, filtrarProdutos, listarProdutos } from "./produtos";
import { listarClientes, buscarCliente, cadastrarCliente } from "./clientes";

cadastrarProduto({id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});

listarProdutos();

console.log(buscarProduto(1));

console.log(filtrarProdutos("Recipientes"));

atualizarProduto(4, {id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 54.97, estoque: 95})

listarProdutos();

//listarClientes();

cadastrarCliente({id: 4, nome: "Ana", email: "ana.matos@example.com"});
console.log(buscarCliente(3));
console.log(buscarCliente("joao.silva@example.com"));

cadastrarCliente({id: 5, nome: "Ana", email: "ana.santos@example.com"})

listarClientes();