import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Luciano', 21221233999);
const cliente2 = new Cliente('Estudante JavaScript', 23333245765);

const contaCorrenteLuciano = new ContaCorrente(1001,cliente1)
contaCorrenteLuciano.depositar(500)
const conta2 = new ContaCorrente(1020,cliente2)

let valor = 200;
contaCorrenteLuciano.transferir(valor, conta2)

console.log('Total de contas: ',ContaCorrente.numeroDeContas)
