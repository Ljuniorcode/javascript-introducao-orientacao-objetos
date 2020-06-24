import { Cliente } from "./Cliente.js";

import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Luciano", 10000, 98745633344);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Luciano Jr", 5000, 12345633344);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Raíssa", 3000, "12134")


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12134");

console.log("Diretor: ",diretorEstaLogado)
console.log("Gerente: ", gerenteEstaLogado)
console.log("Cliente: ", clienteEstaLogado)
