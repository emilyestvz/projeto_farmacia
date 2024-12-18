import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { Medicamento } from './src/model/Medicamento';
import { Cosmetico } from './src/model/Cosmetico';
import { ProdutoController } from './src/controller/ProdutoController';


export function main(){

    let opcao, valor, tipo, estoque, id;
    let generico, fragrancia, nome: string;
    const categorias = ['Medicamento', 'Cosmetico'];

    const produto = new ProdutoController();

    // Instâncias da Classe Medicamentos
    produto.cadastrar(new Medicamento(produto.gerarId(), 'Dipirona', 'Analgesico', 15.90, 18, 1));
    produto.cadastrar(new Medicamento(produto.gerarId(), 'Expec', 'Espectorante', 25.90, 30, 1));

    // Instâncias da Classe Cosmeticos
    produto.cadastrar(new Cosmetico(produto.gerarId(), 'Shampoo Anti-Inflammatório', 2, 50.90, 20, 'Fragrância de Laranja'));
    produto.cadastrar(new Cosmetico(produto.gerarId(), 'Máscara de Hidratação', 2, 45.80, 15, 'Fragrância de Lavanda'));

    

    let continuar = true;

    while(continuar){
        console.log(colors.fg.redstrong)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log('                    YOUfarma                         ');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log(colors.reset);
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

                console.log('\n- Digite o nome do produto: ');
                nome = readlineSync.question('');

                // Categoria
                console.log('\n- Escolha a categoria do produto: ');
                tipo = readlineSync.keyInSelect(categorias, '', {cancel:false}) + 1;

                // Valor do produto
                console.log('\n- Digite o valor do produto: ');
                valor = readlineSync.questionFloat('');

                // Estoque do produto
                console.log('\n- Digite a quantidade do produto: ');
                estoque = readlineSync.questionInt('');

                // Criações de produtos
                switch (tipo) {
                    // Criar medicamentos
                    case 1:
                        console.log('\n💊Digite o nome do medicamento genérico: ');
                        generico = readlineSync.question('');

                        produto.cadastrar(new Medicamento(produto.gerarId(), nome, generico, valor, estoque, tipo));
                        break;

                    // Criar cosmeticos
                    case 2:
                        console.log('\n💄 Digite o tipo de cosmético: ');
                        fragrancia = readlineSync.question('');

                        produto.cadastrar(new Cosmetico(produto.gerarId(), nome, tipo, valor, estoque, fragrancia)); break
                        break;

                    default:
                        console.log('\nOpção inválida! ❌');
                        break;
                }
                keypress();
                break;

                //Continuação do Switch Opção
                case 2:
                    // Listagem de produtos
                    console.log(colors.fg.whitestrong, `\n\t📑 LISTA DE TODOS OS PRODUTOS! `, colors.reset);

                    produto.listarProduto();
                    keypress();
                    break;

                case 3:
                    // Busca por ID
                    console.log('🔎 Digite o ID do produto: ');
                    id = readlineSync.questionInt('');

                    produto.procurarId(id);

                    keypress();
                    break;

                case 4:
                    // Atualizar um produto
                    console.log(colors.fg.whitestrong);
                    console.log('\n\t📌 ATUALIZAR PRODUTO! ');
                    console.log(colors.reset);

                    console.log('- Digite o ID do produto: ');
                    id = readlineSync.questionInt('');

                    let produtoAtualizar = produto.buscarArray(id);

                    if(produtoAtualizar){
                        console.log('\n- Digite o novo nome do produto: ');
                        nome = readlineSync.question('');

                        console.log('\n- Digite o novo valor do produto: ');
                        valor = readlineSync.questionFloat('');

                        console.log('\n- Digite a nova quantidade do produto: ');
                        estoque = readlineSync.questionInt('');

                        tipo = produtoAtualizar.tipo;

                        switch (tipo) {
                            case 1: 
                            // Medicamento
                                console.log('\n- Digite o novo nome do medicamento genérico: ');
                                generico = readlineSync.question('');
                                produto.atualizar(new Medicamento(id, nome, generico, valor, estoque, tipo));
                                break;
                                
                            case 2:
                                // Cosmético
                                console.log('\n- Digite o novo tipo de cosmético: ');
                                fragrancia = readlineSync.question('');
                                produto.atualizar(new Cosmetico(id, nome, tipo, valor, estoque, fragrancia));
                        }
                    } else {
                        console.log('\nProduto não encontrado! ❌');
                    }

                    keypress();
                    break;


                //Continuação do Switch Opção
                case 5:
                    // Deletar um produto
                        console.log(colors.fg.whitestrong);
                        console.log('\n\t💊 DELETAR PRODUTO! ');
                        console.log(colors.reset);

                        console.log('\n- Digite o ID do produto que deseja deletar: ');
                        id = readlineSync.questionInt('');

                        produto.deletar(id);
                    
                        keypress();
                        break;

                case 0:
                console.log(colors.fg.whitestrong);
                console.log('\n\t💊 SAINDO DO SISTEMA... VOLTE SEMPRE! ');
                console.log(colors.reset);
                
                continuar = false;
                about();
                break;

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