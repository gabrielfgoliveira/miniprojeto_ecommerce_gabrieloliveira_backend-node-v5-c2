//Definição dos tipos usados pelo sistema.

export type Produto = {
    id: number,
    nome: string,
    categoria: string,
    preco: number,
    estoque: number,
}

export type Cliente = {
    id: number,
    nome: string,
    email: string,
}

export type Carrinho = {
    cliente: Cliente, //o carrinho está atrelado diretamente ao objeto Cliente até que o mesmo seja fechado.
    produtos: number[], //lista de IDs dos produtos
}

export type Pedido = {
    id: number,
    clienteId: number,
    itens: number[] //lista de IDs dos produtos
}

export type ItemCarrinho = {
    produtoId: number;
    quantidade: number;
}