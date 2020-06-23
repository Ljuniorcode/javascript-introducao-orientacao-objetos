import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";
import { ContaSalario } from "./Contasalario.js";

const cliente1 = new Cliente('Luciano', 21221233999);

const contaCorrenteLuciano = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario)
