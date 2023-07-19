/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let userChoice = Number(
    prompt(`  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`)
);

let itemsList = [];

while(userChoice != 3){

    userChoice = Number(
        prompt(`  Olá usuário! Digite o número da opção desejada
    
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`)
    );

    switch(userChoice){
        case 1:
            itemsList.push(prompt("Informe o item a ser adicionado a lista"));
            break;
        case 2:
            if (itemsList.length == 0) {
                alert("a lista esta vazia");
            } else if (itemsList == null || itemsList == undefined) {
                alert("ERRO!! A lista esta underfined ou null, corrija o erro");
            } else {
                alert(itemsList);
            }
            break
        case 3:
            alert("Encerrando a aplcicação...");
            break
        default:
            alert("opção inválida... tente novamente")
    }
}
