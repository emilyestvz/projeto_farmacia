import { ProdutoRepository } from '../repository/ProdutoRepository';
import { Produto } from '../model/Produto';

export class ProdutoController implements ProdutoRepository {

    // Array que armazena os objetos: produtos cadastrados
    private listaProdutos: Produto[] = [];

    // Para controlar o ID
    public id: number = 0;


    // Métodos CRUD implementados da interface ProdutoRepository

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log('\n✅ Produto cadastrado com sucesso!');
    }

    public listarProduto(): void {
        for(let produtos of this.listaProdutos) {
            produtos.visualizar();
        }
    }

    procurarId(numero: number): void {
        const buscarId = this.buscarArray(numero);

        if (buscarId) 
            console.log('✅ Produto encontrado! ')
        else
        console.log('❌ Produto não encontrado!');
    }

    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarArray(produto.id);

        if(buscaProduto) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;  // Atualiza a posição do produto no array
            console.log('\n📌 Produto atualizado com sucesso!');
        } else {
            console.log('❌ Produto não encontrado!');
        }
    }

    deletar(numero: number): void {
        const buscaProduto = this.buscarArray(numero);

        if(buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log('\n✅ Produto deletado com sucesso!');
        } else {
            console.log('\n❌ Produto não encontrado!');
        }
    }   

    // Métodos Auxiliares
    public gerarId(): number {
        return ++this.id;
    }

    public buscarArray(numero: number): Produto | null {
        for(let produtos of this.listaProdutos){
            if(produtos.id === numero)
                return produtos;
        }
        return null;
    }
}

    