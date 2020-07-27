TENTATIVA
const pessoas = [
    { nome: 'Ana', nota: 9.1 },
    { nome: 'Bianca', nota: 8.4 },
    { nome: 'Carlos', nota: 7.6 },
    { nome: 'Julia', nota: 9.7 }
    ]
    // DESAFIO, CRIAR UMA TABELA E IMPLEMENTAR A TABELA COM JQUERY DESSE OBJETO A CIMA.

    // START
    // Criando lista com apenas os nomes
    let ListaNomes = []
    let funcaoNome = queroNome => queroNome.nome
    ListaNomes = pessoas.map(funcaoNome)

    // Criando lista com apenas as Notas
    let ListaNotas = []
    let funcaoNota = queroNota => queroNota.nota
    ListaNotas = pessoas.map(funcaoNota)
    // Criando a tabela e o cabeçalho
    $('#conteudo').append('<table><thead></thead></table>')
    // Criando o Titulos dos cabeçalhos
    $('thead').append('<tr><th>Nome</th><th>Nota</th></tr>')
    // adicionar local dos nomes
    $('<table></table>').append('<td>')
    // adicionar os nomes na coluna nome
    $('<table></table>').append('<td>qlqrcoisa</td>')