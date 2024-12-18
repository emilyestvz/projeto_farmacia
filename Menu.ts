import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { Produto } from './src/model/Produto';
import { Medicamento } from './src/model/Medicamento';
import { Cosmetico } from './src/model/Cosmetico';
import { ProdutoController } from './src/controller/ProdutoController';


export function main(){

    let opcao, valor, tipo, estoque, id;
    let generico, fragrancia, nome: string;
    const categorias = ['Medicamento', 'Cosmetico'];

    

    let continuar = true;

    while(continuar){
        console.log(colors.fg.redstrong)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log('                    YOUfarma                         ');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log(colors.fg.whitestrong)
        console.log('\n            1 - Criar Produto                      ');
        console.log('\n            2 - Listar todos os Produtos           ');
        console.log('\n            3 - Buscar Produto por Id              ');
        console.log('\n            4 - Atualizar um Produto               ');
        console.log('\n            5 - Deletar um Produto                 ');
        console.log('\n            0 - Sair                               ');
        console.log('\n                                                   ');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log(colors.reset);

        console.log('Digite a opcao desejada: ');
        opcao = readlineSync.questionInt('');

        switch(opcao) {
            case 1:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 CADASTRE SEU NOVO PRODUTO! ');
                console.log(colors.reset);

                console.log('Digite o nome do produto: ');
                nome = readlineSync.question('');


                keypress();
                break;

            case 2:
                console.log(colors.fg.whitestrong);
                console.log('\n\t�💊 LISTA DE TODOS OS PRODUTOS! ');
                console.log(colors.reset);

                keypress();
                break;

            case 3:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 BUSCAR PRODUTO POR ID! ');
                console.log(colors.reset);

                keypress();
                break;

            case 4:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 ATUALIZAR PRODUTO! ');
                console.log(colors.reset);
            
                keypress();
                break;

            case 5:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 DELETAR PRODUTO! ');
                console.log(colors.reset);
            
                keypress();
                break;

            case 0:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 VOLTE SEMPRE! ');
                console.log(colors.reset);
                
                continuar = false;
                about();

                break;

            case 6:

            default:
                console.log(colors.fg.whitestrong);
                console.log('\n\t❌ OPÇÃO INVÁLIDA! ');
                console.log(colors.reset);
               
                keypress();
                break;






        }
    }
    
}

function keypress(): void {
    console.log(colors.reset, "");
    console.log("\n💊 Pressione enter para continuar...");
    readlineSync.prompt();
}

export function about(): void {
    console.log(colors.bg.black, colors.fg.redstrong)
    console.log('\n         Desenvolvido por: ');
    console.log('           Emily Cristiny Dias ✨');
    console.log('           github.com/emilyestvz 👾');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    console.log(colors.reset);
}

main();