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

export type Pedido = {
    id: number,
    clienteId: number,
    itens: ItemCarrinho[]
    total: number;
    data: Date;
}

export type ItemCarrinho = {
    produtoId: number;
    quantidade: number;
}