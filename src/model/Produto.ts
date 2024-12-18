import { colors } from '../util/Colors'

// Esta será a Super Classe da aplicação e será definida como Abstrata

export abstract class Produto {

    // Atributos
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _valor: number;
    private _estoque: number;

    // Construtor da Super Classe

    constructor(id: number, nome: string, tipo: number, valor: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._valor = valor;
        this._estoque = estoque;
    }

    // Gets e Sets
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get valor(): number {
		return this._valor;
	}

	public get estoque(): number {
		return this._estoque;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set valor(value: number) {
		this._valor = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}

    
    // Métodos Auxiliares

    public visualizar(){
        let tipo: string;

        if(this._tipo === 1)
            tipo = "Medicamento";
        else if(this._tipo === 2)
            tipo = "Cosmetico";
        else
        tipo = "Categoria não foi encontrada!";

        console.log(colors.fg.redstrong);
        console.log('\n\tDADOS DO PRODUTO: ');
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Valor: ${this._valor}`);
        console.log(`Qtd em Estoque: ${this._estoque}`);

    }
}

