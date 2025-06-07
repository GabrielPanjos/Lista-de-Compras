// Criando array da lista de compras
var listaDeCompras = []

function adicionarNaLista() {

    // Variáveis para pegar os elementos do html
    var inputFazerCompra = document.getElementById("fazerCompra").value
    var ulListaDeCompras = document.getElementById("listaDeCompras")

    // Validando se o input está vazio
    if (inputFazerCompra == "") {
        alert('Digite algum item para ser adicionado na lista de compras.')
    } else if (listaDeCompras.includes(inputFazerCompra)) {
        alert('Você já adicionou esse item na lista. Adicione outro item.')
    } else {
        // Adicionando o valor do input dentro da lista de compras
        listaDeCompras.push(inputFazerCompra)

        // Atualizando lista na tabela
        ulListaDeCompras.innerHTML = '';

        listaDeCompras.forEach(item => {
            ulListaDeCompras.innerHTML += `<li>${item}</li>`;
        });

        alert(`Você tem ${listaDeCompras.length} itens na lista`)
    }

    atualizarListaNaTela()
}

function removerDaLista(index) {

    atualizarListaNaTela()
}

function atualizarListaNaTela() {
    // Limpando input
    inputFazerCompra = ""
}