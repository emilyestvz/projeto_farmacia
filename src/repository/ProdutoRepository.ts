// Interface contendo métodos do CRUD
import { Produto } from '../model/Produto'

export interface ProdutoRepository {

    cadastrar(produto: Produto): void;
    listarProduto(): void;
    procurarId(numero: number): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
}