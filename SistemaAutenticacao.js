/*
Autenticável significa ter o método autenticar;
Duck type - não interessa o método e propriedade, ele irá usar independente do tipo
 */

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return 'autenticar' in autenticavel && autenticavel.autenticar 
        instanceof Function;
    }
}