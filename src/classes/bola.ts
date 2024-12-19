
export class Bola {
    constructor(
        private _cor: string,
        private _circunferencia: number,
        private _material: string
    ) {} 
    //encapsulação
    public get cor(): string {
        return this._cor
    }
    public get circunferencia(): number {
        return this._circunferencia
    }
    public get material(): string {
        return this._material
    }
    //setters
    // public set 

    public mostrarCor(cor: string): void {
        this._cor = cor
    }
    public trocarCor(cor: string): void {
        this._cor = cor
    }
    
    }
}