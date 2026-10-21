//Operações do carrinho e cálculos dos valores

import { Cliente, Produto, ItemCarrinho } from "./types";
import { buscarProduto } from "./produtos";
import { buscarCliente } from "./clientes";

export class Carrinho{
    clienteId: number;
    itens: ItemCarrinho[];
    clienteObj: Cliente;

    constructor(clienteId: number){
        this.clienteId = clienteId;
        this.itens = [];
        const cliente = buscarCliente(clienteId);
        if (!cliente) {
            throw new Error(`Cliente com ID ${clienteId} não encontrado.`); //----------------------------------TEMPORÁRIO MUDAR TEXTO DEPOIS------------------------------------
        }
        this.clienteObj = cliente;
    }

    adicionarItem(id: number, quantidade: number): boolean{
        let produtoExiste = buscarProduto(id);

        if(produtoExiste){
            if(quantidade > 0){
                this.itens.push({produtoId: id, quantidade: quantidade});
                return true;
            } else{
                console.log("[ADIPR]: A quantidade de itens não pode ser menor que zero.");
                return false;
            }
        } else{
            console.log("[ADIPR]: O produto não existe ou não foi encontrado");
            return false;
        }

    }

    listarItens(): void{
        console.log(`=====|CARRINHO DE (ID: ${this.clienteObj.id}) ${this.clienteObj.nome.toUpperCase()}|=====`);
        console.log("|ID|NOME|PRECO|QUANTIDADE|SUBTOTAL|");
        for(let item of this.itens){
            console.log(`|${item.produtoId}|${buscarProduto(item.produtoId)?.nome}|${buscarProduto(item.produtoId)?.preco}|${item.quantidade}|${this.calcularSubtotal(item)}|`);
        }
        console.log("\n [TOTAL]: " + this.calcularTotal())
        console.log("=================================================");
    }

    calcularSubtotal(item: ItemCarrinho): number | undefined{
        let produto = buscarProduto(item.produtoId);
        if(produto != undefined){
            return (produto.preco * item.quantidade);
        } else{
            console.log("[CALST]: O produto não existe ou não foi encontrado.")
            return undefined;
        }
    }

    calcularTotal(){

        let total = 0;
        for(const item of this.itens){
            let produto = buscarProduto(item.produtoId);
            let subtotal = this.calcularSubtotal(item);
            if(produto != undefined && subtotal != undefined){
                total += subtotal;
            }
            
        }

        return total;
    }
}

