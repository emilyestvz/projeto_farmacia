import { Produto } from './Produto';

// Subclasse da Classe Produto (herança)

export class Cosmetico extends Produto {
    
    private _fragrancia: string;

    constructor(id: number, nome: string, tipo: number, valor: number, estoque: number, fragrancia: string){
        
        super(id, nome, tipo, valor, estoque);
        this._fragrancia = fragrancia;
    }

    // Getters e Setters
    public get fragrancia(): string {
        return this._fragrancia;
    }

    public set fragrancia(fragrancia: string) {
        this._fragrancia = fragrancia;
    }


    // Métodos específicos 
    public visualizar(): void {
        super.visualizar();
        console.log(`Sobre o coméstico: ${this._fragrancia}`);
    }


    

}