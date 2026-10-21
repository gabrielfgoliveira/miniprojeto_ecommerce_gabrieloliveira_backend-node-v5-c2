//Cadastro e consulta de clientes]

import { Cliente } from "./types";

let clientes: Cliente[] = [{id: 1, nome: "Gabriel", email: "gabriel.oliveira@example.com"}, {id: 2, nome: "João", email: "joao.silva@example.com"}, {id: 3, nome: "Júlia", email: "julia.santos@example.com"}]

export function cadastrarCliente(cliente: Cliente): boolean {

    let IDExistente = buscarCliente(cliente.id);
    let EmailExistente = buscarCliente(cliente.email);

    if(IDExistente != undefined){
        console.log("[CADCL]: O ID do cliente precisa ser único.")
        return false;
    } else if (EmailExistente != undefined){
        console.log("[CADCL]: O e-mail do cliente precisa ser único.")
        return false;
    }

    if(cliente.nome.trim() == ''){ //trim() para caso o usuário tenha inserido somente uma cadeia de espaços. 
        console.log("[CADCL]: O nome do cliente não pode estar vazio.");
        return false;
    } else if (cliente.email.trim() == ''){
        console.log("[CADCL]: O e-mail do cliente não pode estar vazio.");
        return false;
    } else{
        clientes.push(cliente);
        return true;
    }
}

//Sobrecarga de métodos
export function buscarCliente(parametro: number): Cliente | undefined; //via ID
export function buscarCliente(parametro: string): Cliente | undefined; //via e-mail

export function buscarCliente(parametro: number | string): Cliente | undefined {
    if(typeof parametro == 'number'){
        return clientes.find(cliente => cliente.id === parametro);
    } else if(typeof parametro == 'string'){
        return clientes.find(cliente => cliente.email === parametro); 
    }
}

export function listarClientes(): void{
    console.log("=====|LISTA DE CLIENTES|=====")
    console.log("|ID|NOME|E-MAIL|")
    for(let cliente of clientes){
        console.log(`|${cliente.id}|${cliente.nome}|${cliente.email}|`)
    }
    console.log("=============================");
}
