# Mini Sistema de E-commerce

> Projeto: Mini sistema de E-commerce  
> Estudante: [Gabriel F.G. de Oliveira](https://github.com/gabrielfgoliveira)  
> Turma: Back-End Node T5 C2

## Objetivo

> Desenvolver habilidades com Git, Github, Typescript e Javascript através da construção de um sistema de e-commerce simples, com funções, objetos, types e condicionais.

---

## Funções

### Cliente

```ts
cadastrarCliente(cliente: Cliente);
```

Permite cadastrar clientes.  
Recebe como parâmetro um objeto do tipo "Cliente".  
Retorna como resultado ``true`` para sucesso do cadastro, e ``false`` em caso de falha.

```ts
buscarCliente(parametro: string | number);
```

Permite encontrar um cliente cadastrado.  
Recebe como parâmetro o e-mail, ou o ID.  
Retorna como resultado o objeto Cliente em caso de sucesso, ou ``undefined`` em caso de falha.

```ts
listarClientes();
```

Lista todos os clientes cadastrados pelo console.  
Não recebe parâmetros nem possui retorno.

---

### Produto

```ts
cadastrarProduto(produto: Produto);
```

Permite cadastrar clientes.  
Recebe como parâmetro um objeto do tipo "Produto".  
Retorna como resultado ``true`` para sucesso do cadastro, e ``false`` em caso de falha.

```ts
buscarProduto(parametro: number | string);
```

Permite encontrar um produto cadastrado.  
Recebe como parâmetro o ID, nome ou parte do nome.  
Retorna como resultado o objeto Cliente em caso de sucesso, ou ``undefined`` em caso de falha.

```ts
filtrarProdutos(categoria: string);
```

Permite receber somente produtos da categoria especificada.  
Recebe como parâmetro a categoria.  
Retorna como resultado a array de Produtos da mesma categoria em caso de sucesso, ou ``undefined`` em caso de falha.

```ts
atualizarProduto(id: number, produtoEditado: Produto);
```

Permite atualizar um produto na base de dados efêmera por completo.  
Recebe como parâmetro o ID do produto cadastrado e o objeto do tipo Produto à ser inserido no lugar, feitas as alterações desejadas.  
Retorna como resultado ``true`` para sucesso da atualização, e ``false`` em caso de falha.

```ts
deletarProduto(id: number);
```

Permite deletar completamente um produto cadastrado.  
Recebe como parâmetro o ID do produto a ser deletado.  
Retorna como resultado ``true`` para sucesso da remoção, e ``false`` em caso de falha.

```ts
listarProdutos();
```

Lista todos os produtos cadastrados pelo console.  
Não recebe parâmetros nem possui retorno.

```ts
atualizarEstoqueProduto(produtoId: number, quantidadeARemover: number);
```
<span title="Esta é uma função interna do sistema. Não é aconselhado utilizá-la diretamente.">🔒 Função interna</span>

Reduz a quantidade de itens em estoque após o fechamento de um pedido.  
Recebe como parâmetro o ID do produto e a quantidade de itens a remover.  
Retorna como resultado ``true`` para sucesso da redução, e ``false`` em caso de falha.

---

### Carrinho

<div style="background-color: #ffe3e3; color: #8a1c1c; border-left: 5px solid #d32f2f; padding: 12px 16px; border-radius: 8px; font-weight: 600; margin: 16px 0;">
⚠️ Atenção: 'Carrinho' é uma classe à ser instanciada. É necessário inicialmente instanciar o Objeto desta forma:

```ts
const carrinho1 = new Carrinho(id: number);
```

Deste modo, o novo carrinho será criado e vinculado ao cliente com o ID informado. As funcionalidades abaixo listadas devem ser chamadas no formato:

```ts
objetoCarrinho.funcao(parametros);
```

Exemplo: carrinho1.adicionarItem(1, 5);
</div>

```ts
adicionarItem(id: number, quantidade:number);
```

Adiciona itens ao carrinho.  
Recebe como parâmetros o ID do produto a ser adicionado e a quantidade de unidades deste produto.  
Retorna como resultado ``true`` caso o item seja adicionado com sucesso, ou ``false`` em caso de falha.

```ts
removerItem(id: number, qtdARemover: number);
```

Permite remover itens do carrinho.  
Recebe o ID do item e a quantidade de unidades à serem removidas. Caso o valor seja maior que o número de unidades adicionadas anteriormente, o item é excluído completamente do carrinho.  
Retorna como resultado ``true`` caso o item seja removido com sucesso, ou ``false`` em caso de falha.

```ts
listarItens();
```

Lista todos os itens do carrinho pelo console, os subtotais dos itens e o total do carrinho.  
Não recebe parâmetros nem possui retorno.

```ts
finalizar();
```

Permite finalizar um carrinho, e efetivar um pedido.  
Não recebe parâmetros nem possui retorno.

```ts
calcularSubtotal(item: ItemCarrinho);
```
<span title="Esta é uma função interna do sistema. Não é aconselhado utilizá-la diretamente.">🔒 Função interna</span>

Calcula o subtotal de um item.  
Recebe como parâmetro um objeto do tipo ItemCarrinho.  
Retorna o subtotal do item.

```ts
calcularTotal();
```

Calcula o valor total do carrinho.  
Não recebe parâmetros.  
Retorna o total do carrinho.

---

### Pedido

```ts
listarPedidos(clienteId?: number);
```

Lista todos os pedidos realizados, ou todos realizados por um cliente específico, pelo console.  
Recebe como parâmetro o ID do cliente, para listar todos os pedidos deu cliente específico, ou nada, para listar todos os pedidos já feitos.  
Não possui retorno.

```ts
registrarPedido(clienteId: number, itens: ItemCarrinho[], total: number);
```
<span title="Esta é uma função interna do sistema. Não é aconselhado utilizá-la diretamente.">🔒 Função interna</span>

Efetiva um pedido no sistema.  
Recebe como parâmetros o ID do cliente, a array de itens, e o total do pedido.  
Retorna como resultado ``true`` caso o pedido seja efetivado com sucesso, ou ``false`` em caso de falha.

---

## Tecnologias utilizadas

Javascript, Typescript e Node.js

---

## Estrutura dos arquivos

<div style="background: linear-gradient(135deg, #111827, #1f2937); color: #f9fafb; border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 6px 18px rgba(0,0,0,0.18);">
<pre style="margin: 0; white-space: pre-wrap; font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; line-height: 1.7;">
<span style="color: #93c5fd;">.\miniprojeto_ecommerce_gabrieloliveira_backend-node-v5-c2</span> <span style="color: #fbbf24;">(Raíz do projeto)</span>
    <span style="color: #86efac;">\src</span> <span style="color: #fbbf24;">(Diretório que reúne o código-fonte em Typescript)</span>
        carrinho.ts <span style="color: #cbd5e1;">(Arquivo que reúne todas as funções relacionadas aos carrinhos)</span>
        clientes.ts <span style="color: #cbd5e1;">(Arquivo que reúne todas as funções relacionadas aos clientes, e o banco de dados provisório)</span>
        main.ts <span style="color: #cbd5e1;">(Arquivo principal do projeto. Chama todas as funcionalidades disponíveis para demonstração)</span>
        pedidos.ts <span style="color: #cbd5e1;">(Arquivo que reúne todas as funções relacionadas aos pedidos, e o banco de dados provisório)</span>
        produtos.ts <span style="color: #cbd5e1;">(Arquivo que reúne todas as funções relacionadas aos produtos, e o banco de dados provisório)</span>
        types.ts <span style="color: #cbd5e1;">(Arquivo que reúne todas os tipos de dados utilizados no projeto)</span>
    .gitignore
    README.MD <span style="color: #cbd5e1;">(Esta documentação)</span>
    LICENSE.MD <span style="color: #cbd5e1;">(Licença de uso do projeto)</span>
    tsconfig.json <span style="color: #cbd5e1;">(Configurações do compilador)</span>
</pre>
</div>

---

## Instruções de compilação e execução

1. Faça download do arquivo ZIP através do Github;
2. Extraia utilizando a ferramenta de sua preferência, e abra a pasta que contenha o diretório ``src``;
3. Abra o terminal no caminho da pasta, digite ``tsc`` e pressione Enter;
4. Uma pasta chamada ``dist`` irá surgir. Troque o diretório pelo terminal, acessando a nova pasta criada.
5. Digite ``node main.js`` e pressione enter. O arquivo principal será executado, demonstrando o retorno de todas as funções disponíveis.

---

## Pré-requisitos

- Node.js (v14.18.0)
- NPM (v11.16.0)
- Typescript (v7.0.2)

---

## Regras de negócio

1. Um produto deve possuir ID, nome, categoria, preço e quantidade em estoque. O ID não precisa ser sequencial, mas deve ser único.
2. Um cliente deve possuir ID, nome, e email. O ID não precisa ser sequencial, mas deve ser único.
3. Um pedido deve ser efetivado com ID, ID do cliente, array de itens, total do pedido e a data que foi feito. O ID deve ser sequencial e único.
4. Após um produto ser adicionado ao carrinho, ele se transforma num item. Um item é o conjunto do produto com a quantidade desejada.

---

## Limitações conhecidas

1. O ID de produto e de cliente é informado diretamente no código, no momento do cadastro. O sistema não é capaz de gerá-lo sozinho.
2. O sistema não consegue impedir um carrinho de ser instanciado com o ID do cliente inválido. Somente no momento de transformar o carrinho em um pedido, que o sistema bloqueia a operação, pois o cliente é inválido.

---