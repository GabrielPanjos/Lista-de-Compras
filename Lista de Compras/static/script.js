// Criando array da lista de compras
var listaDeCompras = []

// Variáveis para pegar os elementos do html
var ulListaDeCompras = document.getElementById("listaDeCompras")

function adicionarNaLista() {

    console.log('Adicionando')

    // Variáveis para pegar os elementos do html
    var inputFazerCompra = document.getElementById("fazerCompra").value

    // Validando se o input está vazio
    if (inputFazerCompra == "") {
        alert('Digite algum item para ser adicionado na lista de compras.')
    }

    // Validando duplicidade (caso tente adicionar um item que ja existe)
    else if (listaDeCompras.includes(inputFazerCompra)) {
        alert('Você já adicionou esse item na lista. Adicione outro item.')
    }

    // Condição caso tudo esteja em ordem
    else {

        // Adicionando o valor do input dentro da lista de compras
        listaDeCompras.push(inputFazerCompra)
        alert(`Você tem ${listaDeCompras.length} itens na lista`)
    }

    atualizarListaNaTela()
}

function removerDaLista(index) {

    console.log('Removendo')

    // Removendo e alertando qual item foi removido
    alert(`Item ${listaDeCompras[index]} removido`)
    listaDeCompras.splice(index, 1)

    atualizarListaNaTela()
}

function atualizarListaNaTela() {

    console.log('Atualizando')

    // Limpando input
    var inputFazerCompra = document.getElementById("fazerCompra")
    inputFazerCompra.value = ""

    // Atualizando lista na tabela
    ulListaDeCompras.innerHTML = '';
    listaDeCompras.forEach(item => {
        ulListaDeCompras.innerHTML += `<li>${item}<button onclick="removerDaLista(${listaDeCompras.indexOf(item)})" class="btnRemover">Remover</button></li>`;
    });

}