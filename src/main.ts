//Inicialização da aplicação e demonstração das funcionalidades.

import { atualizarProduto, buscarProduto, cadastrarProduto, deletarProduto, filtrarProdutos, listarProdutos } from "./produtos";
import { listarClientes, buscarCliente, cadastrarCliente } from "./clientes";
import { Carrinho } from "./carrinho";
import { listarPedidos } from "./pedidos";

//cadastrarProduto({id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});
// atualizarProduto(4, {id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 54.97, estoque: 95})
// cadastrarCliente({id: 4, nome: "Ana Matos", email: "ana.matos@example.com"});
// cadastrarCliente({id: 5, nome: "Ana dos Santos", email: "ana.santos@example.com"})

/**
 * LISTA DE FUNÇÕES À SEREM DEMONSTRADAS (COM SUCESSO):
 * 
 * 1. Cadastro de produto; OK
 * 2. Listar todos os produtos; OK
 * 3. Buscar produto via ID; OK
 * 4. Buscar produto via nome; OK
 * 5. Mostrar filtragem de produtos; OK
 * 6. Mostrar edição de um produto; OK
 * 7. Mostrar remoção de um produto OK
 * 
 * 8. Cadastro de cliente; OK
 * 9. Listar clientes cadastrados; OK
 * 10. Buscar cliente pelo ID; OK
 * 
 * 11. Criação de carrinho de compras; OK 
 * 12. Adicionar produto ao carrinho; OK
 * 13. Remover produto do carrinho; OK
 * 14. Alterar a quantidade de produtos no carrinho; OK
 * 15. Listar itens do carrinho; OK
 * 
 * 16. Transformar carrinho num pedido; OK
 * 17. Listar todos os pedidos; OK
 * 18. Listar pedidos de um cliente específico. OK
 */

console.log("++++++++++DEMO: MINI SISTEMA DE E-COMMERCE++++++++++");
console.log("* Aqui, serão demonstradas as funções em funcionamento");
console.log("e breves explicações dos acontecimentos no console.");
console.log("*Mensagens informativas da demo estarão marcadas como:");
console.log("\n+[[DEMO]]: Algo importante será dito aqui!\n");
console.log("A fim de diferenciar das mensagens internas do sistema.");
console.log("++++++++++FIM DA MENSAGEM DE INTRODUÇÃO++++++++++");

console.log("\n+[[DEMO]]: Vamos inicialmente demonstrar o cadastro de um produto:\n");

cadastrarProduto({id: 4, nome: "Garrafa de Água", categoria: "Recipientes", preco: 50.00, estoque: 100});

console.log("\n+[[DEMO]]: Veja como ele foi cadastrado:\n");
listarProdutos();

console.log("\n+[[DEMO]]: E se precisarmos encontrar um produto pelo ID?\n");
console.log(buscarProduto(2));

console.log("\n+[[DEMO]]:Sem ID, sem problemas! Encontramos também pela parcial do nome:\n");
console.log(buscarProduto("Caf"));

console.log("\n+[[DEMO]]: E se precisar somente de produtos de uma categoria:\n");
console.log(filtrarProdutos("Recipientes"));

console.log("\n+[[DEMO]]: Agora, vamos demonstrar a edição de um produto:\n");
atualizarProduto(3, {id: 3, nome: "Caneta esferográfica", categoria: "Papelaria", preco: 1.20, estoque: 200});

console.log("\n+[[DEMO]]: E a exclusão de outro:\n");
deletarProduto(4);

console.log("\n+[[DEMO]]: Veja como o primeiro teve seu estoque expandido, e o outro, foi excluído completamente:\n");
listarProdutos();

console.log("\n+[[DEMO]]: Agora, vamos cadastrar um cliente:\n");
cadastrarCliente({id: 5, nome: "Ana dos Santos", email: "ana.santos@example.com"});

console.log("\n+[[DEMO]]: Veja como ele foi cadastrado:\n");

listarClientes();

console.log("\n+[[DEMO]]: Também, podemos buscar um cliente pelo ID, assim como o produto:\n");
console.log(buscarCliente(2));

console.log("\n+[[DEMO]]: Vamos, enfim, encher o carrinho!\n");
console.log("+[[DEMO]]: Primeiro, iniciaremos o carrinho, e depois, vamos adicionar alguns itens:");

const carrinho1 = new Carrinho(3);
carrinho1.adicionarItem(2, 3);
carrinho1.adicionarItem(1, 4);
carrinho1.adicionarItem(3, 1);

console.log("\n+[[DEMO]]: Oops, adicionou um item errado? Podemos eliminá-lo!\n");
carrinho1.removerItem(3, 1);

console.log("\n+[[DEMO]]: Errou a conta? Podemos tirar unidades também:\n");
carrinho1.removerItem(2, 2);

console.log("\n+[[DEMO]]: Veja como ficou nosso carrinho:\n");
carrinho1.listarItens();

console.log("\n+[[DEMO]]: Tudo certo? Podemos fechar o carrinho agora e fazer o pedido:\n");
carrinho1.finalizar();

console.log("\n+[[DEMO]]: E pronto! Nosso pedido foi computado:\n");
listarPedidos();

console.log("\n+[[DEMO]]: E isso é tudo. Obrigado pela atenção!\n");
console.log("++++++++++FIM DA DEMO++++++++++");
