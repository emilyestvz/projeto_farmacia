import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';

export function main() {

    let opcao, id, valor, tipo, estoque;
    let generico, fragrancia;
    const categorias = ['Medicamento', 'Cosmetico'];


    let continuar = true;

    while(continuar) {

            console.log(colors.fg.redstrong);
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
            console.log('                      YOUfarma                       ');
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
            console.log(colors.fg.whitestrong);
            console.log('\n         1 - Cadastrar novo produto                ');
            console.log('\n         2 - Listar todos os Produtos              ');
            console.log('\n         3 - Buscar o produto por ID               ');
            console.log('\n         4 - Atualizar um produto                  ');
            console.log('\n         5 - Excluir um produto                    ');
            console.log('\n         0 - Sair                                  ');                    
            console.log(colors.reset);

        console.log('Digite a Opção desejada: ')
        opcao = readlineSync.questionInt('');

        switch(opcao) {
            case 1:
                //cadastrarNovoProduto();
                break;
            case 2:
                //listarTodosOsProdutos();
                break;
            case 3:
                //buscarProdutoPorID();
                break;
            case 4:
                //atualizarProduto();
                break;
            case 5:
                //excluirProduto();
                break;
            case 0:
                console.log('Saindo do programa...');
                continuar = false;
                break;
            default:
                console.log('Opção inválida!');
        }

    }

}

function keypress(): void {
    console.log(colors.reset, "");
    console.log('\nPressione enter para continuar...');
    readlineSync.prompt();
}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.redstrong)
    
    console.log(`           Desenvolvido por: 
                            Emily Cristiny Dias
                            github.com/emilyestvz`);
    console.log('     =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log(colors.reset);
}

main();