//Finalização e consulta de pedidos

import { buscarCliente } from "./clientes";
import { atualizarEstoqueProduto, buscarProduto } from "./produtos";
import { ItemCarrinho, Pedido } from "./types";


let controleId = 0;
const pedidos: Pedido[] = [];
const hoje = new Date();

export function registrarPedido(clienteId: number, itens: ItemCarrinho[], total: number): boolean{

    const clienteExistente = buscarCliente(clienteId);
    const listaConforme = itens.length > 0;

    if(clienteExistente){
        if(listaConforme){

                for(let item of itens){
                    let produtoExistente = buscarProduto(item.produtoId);
                    
                    if(produtoExistente != undefined){
                        if(item.quantidade > produtoExistente?.estoque){
                            console.log("(X) [REGPE]: A quantidade de itens pedidos não pode ser maior que a de disponíveis em estoque.");
                            return false;
                        }
                    } else{
                        console.log("(X) [REGPE]: O produto não existe ou não foi encontrado.")
                    }
                }

                for(let item of itens){
                    atualizarEstoqueProduto(item.produtoId, item.quantidade);
                }

                const pedidoId = controleId + 1;
                controleId += 1;

                pedidos.push({id: pedidoId, clienteId: clienteId, itens: itens, total: total, data: hoje});
                console.log("(i) [REGPE] O pedido foi publicado.");
                console.log(pedidos); //---------------------------------------------------------APAGAR DEPOIS!!!!-------------------------------------------------------------
                return true;
        } else{
            console.log("(X) [REGPE] A lista de itens não pode estar vazia.");
            return false;
        }
    } else{
        console.log("(X) [REGPE] O cliente não existe ou não foi encontrado.");
        return false;

    }
}

//Sobrecarga de métodos:
export function listarPedidos(clienteId: number): void;
export function listarPedidos(): void;

export function listarPedidos(parametro?: number): void{

    if(typeof parametro == "number"){
        const clienteExistente = buscarCliente(parametro);

        if(clienteExistente != undefined){

            for(let pedido of pedidos){
    
                if(pedido.clienteId === parametro){
                    console.log(`=====|PEDIDO (ID: ${pedido.id})|=====`);
                    console.log(`Cliente: (ID: ${pedido.clienteId}) ${clienteExistente.nome.toUpperCase()}`);
                    console.log("|ID|NOME|QUANTIDADE|");

                    for(let item of pedido.itens){
                        console.log(`|${item.produtoId}|${buscarProduto(item.produtoId)?.nome}|${item.quantidade}|`);
                    }
                    
                    console.log("==============================");

                    console.log("\n[TOTAL]: " + pedido.total);
                }
            }

            
        } else{
            console.log("(X) [LISPE]: O cliente não existe ou não foi encontrado.")
        }
    } else{
        
        for(let pedido of pedidos){
            let clienteExistente = buscarCliente(pedido.clienteId);
            console.log(`=====|PEDIDO (ID: ${pedido.id})=====`);
            console.log(`Cliente: (ID: ${pedido.clienteId}) ${clienteExistente?.nome.toUpperCase()}`);
            console.log("|ID|NOME|QUANTIDADE|");

            for(let item of pedido.itens){
                console.log(`|${item.produtoId}|${buscarProduto(item.produtoId)?.nome}|${item.quantidade}|`);
            }

            console.log("\n[TOTAL]: " + pedido.total);
        }

    }
    
}