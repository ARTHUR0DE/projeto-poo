
export class Carro {
    // metodo construtor e atributos
    constructor(
        public modelo: string,
        private _fabricante: string,
        public ano: number,
        public cor: string,
        public preco: number) {} 

    // metodo de encapsulação (get)
    get fabricante() {
        return this._fabricante.toUpperCase()
    }
}
