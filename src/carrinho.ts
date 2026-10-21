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
        let produtoExistente = buscarProduto(id);
        let itemExistente = this.itens.find((item) => item.produtoId === id);

        if(produtoExistente && !itemExistente){ //Caso o produto exista e não está no carrinho
            if(quantidade > 0 && quantidade <= produtoExistente.estoque){
                this.itens.push({produtoId: id, quantidade: quantidade});
                return true;
            } else if(quantidade > 0 && quantidade > produtoExistente.estoque){
                console.log("[ADIPR]: A quantidade de itens não pode ser maior que a quantidade em estoque.");
                return false;
            }else{
                console.log("[ADIPR]: A quantidade de itens não pode ser menor ou igual a zero.");
                return false;
            }
        } else if(produtoExistente && itemExistente){
            if(quantidade > 0 && quantidade <= produtoExistente.estoque && (quantidade + itemExistente.quantidade) <= produtoExistente.estoque){
                itemExistente.quantidade += quantidade;
                return true;
            } else if(quantidade > 0 && quantidade > produtoExistente.estoque || (quantidade + itemExistente.quantidade) > produtoExistente.estoque){
                console.log("[ADIPR]: A quantidade de itens não pode ser maior que a quantidade em estoque.");
                return false;
            } else{
                console.log("[ADIPR]: A quantidade de itens não pode ser menor ou igual a zero.");
                return false;
            }
        } else{
            console.log("[ADIPR]: O produto não existe ou não foi encontrado.");
            return false;
        }
    }

    removerItem(id: number, qtdARemover: number): boolean{
        let produtoExiste = buscarProduto(id);
        let itemExistente = this.itens.find((item) => item.produtoId === id)

        if(produtoExiste && !itemExistente){ //Caso o produto exista e não está no carrinho
            console.log("[REMIT]: O produto não se encontra no carrinho.")
            return false;
        } else if(produtoExiste && itemExistente){
            if(qtdARemover > 0 && itemExistente.quantidade > qtdARemover){ //Se a quantidade a remover for maior que zero e menor que a quantidade de itens do mesmo produto no carrinho
                itemExistente.quantidade -= qtdARemover;
                return true;
            } else if(qtdARemover > 0 && itemExistente.quantidade <= qtdARemover){
                let indiceProdutoARemover = this.itens.findIndex((item) => item.produtoId === itemExistente.produtoId);
                this.itens.splice(indiceProdutoARemover);
                return true;
            }else{
                console.log("[REMIT]: A quantidade de itens a remover não pode ser menor ou igual a zero.");
                return false;
            }
        } else{
            console.log("[REMIT]: O produto não existe ou não foi encontrado.");
            return false;
        }
    }

    listarItens(): void{
        console.log(`=====|CARRINHO DE (ID: ${this.clienteObj.id}) ${this.clienteObj.nome.toUpperCase()}|=====`);
        console.log("|ID|NOME|PRECO|QUANTIDADE|SUBTOTAL|");
        for(let item of this.itens){
            console.log(`|${item.produtoId}|${buscarProduto(item.produtoId)?.nome}|${buscarProduto(item.produtoId)?.preco}|${item.quantidade}|${this.calcularSubtotal(item)}|`);
        }
        console.log("\n[TOTAL]: " + this.calcularTotal())
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

