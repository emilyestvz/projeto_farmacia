import { Produto } from './Produto';

// Subclasse da Classe Produto (herança)

export class Medicamento extends Produto {
    
    private _generico: string;

    constructor(id: number, nome: string, generico: string, valor: number, estoque: number, tipo: number){
        
        super(id, nome, tipo, valor, estoque);
        this._generico = generico;
    }

    // Getters e Setters
    public get generico(): string {
        return this._generico;
    }
    
    public set generico(generico: string) {
        this._generico = generico;
    }

    // Métodos específicos
    public visualizar(): void {
        super.visualizar();
        console.log(`Sobre o medicamento: ${this._generico}`);
    }
}

