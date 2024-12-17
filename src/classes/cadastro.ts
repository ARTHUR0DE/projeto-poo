
export class Cadastro {
    //metodo construtor e atributos
    constructor(
        private _numero: number,
        private _titular: string,
        private _saldo: number) {
            this.numero = _numero
            this.titular = _titular
            this.saldo = _saldo
        }
    // encapsulação
    public get numero(): number {
        return this._numero
    }
    public get titular(): string {
        return this._titular
    }
    public get saldo(): number {
        return this._saldo
    }
//metodo set
public set numero(numero: number) {
    const tamanho = numero
    if (tamanho < 7) {
        throw new Error ('Numero da conta invalido')
    }
    this._numero = numero 
    }  
    
}   