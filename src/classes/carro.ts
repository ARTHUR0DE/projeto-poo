
export class Carro {
    // metodo construtor e atributos
    constructor(
        private _modelo: string,
        private _fabricante: string,
        private _ano: number,
        private _cor: string,
        private _preco: number) {
            this.modelo = _modelo
            this.fabricante = _fabricante
            this.ano = _ano 
            this.cor = _cor
            this.preco = _preco
        } 

    // metodo de encapsulação (get)
    public get modelo(): string {
        return this._modelo. toUpperCase()
    }
    public get fabricante(): string {
        return this._fabricante. toUpperCase()
    }   
    public get ano(): number {
        return this._ano
    }
    public get cor(): string {
        return this._cor. toUpperCase()
    }
    public get preco(): number {
        return this._preco
    }

//metodo set
    public set modelo(modelo: string) {
        this._modelo = modelo.trim().toLowerCase()
    }
    public set fabricante(fabricante: string) {
        const tamanho = fabricante.trim().length
        if (tamanho < 3) {
        throw new Error('Fabricante invalido')
    }
    this._fabricante = fabricante. trim(). toLowerCase()
        }   
        
    public set ano(ano: number) {
        this._ano = ano
    }    
    public set cor(cor: string) {
        this._cor = cor.trim(). toLowerCase()
    }
    public set preco(preco: number) {
        if (preco <= 0) {
            throw new Error('Preço Inválido')
         }
            this._preco = preco
        }
}
