let dados = []

const crudForm = document.getElementById('crud-form')
const nomeInput = document.getElementById('nome')
const emailInput = document.getElementById("email")
const editIndxInput = document.getElementById('edit-index')

//listagem dos dados

const listardados = document.getElementById("listar-dados")

//função para adicinar  / editar dados

function adicinarEditarDados(event) {
    event.preventDefault()

    const nome = nomeInput.value
    const email = emailInput.value
    const editIndx = parseInt(editIndxInput.value)

    if(nome && email){
        if(editIndx === -1){
            const novoDado = {nome, email}
            dados.push(novoDado)
        }else{
            dados[editIndx] = {nome, email}

        }

        exibirDados()
        limparFormulario()
    }

}

//função para editar dos dados

function esditarDado(){
    const dado = dados[index]
    nomeInput.value = dados.nome
    emailInput.value = dado.email
    editIndxInput.value = index

}

//função de remover os dados

function removerDado(index){
    dados.splice(index, 1)
    exibirDados()
}

//função para limpar o formulário

function limparFormulario(){
    nomeInput.value = ''
    emailInput.value = ''
    editIndxInput.value = -1

}

//adicioar evento de envio do formulário

crudForm.addEventListener('submit', adicinarEditarDados)

//exibir dados iniciais

function exibirDados(){
listardados.innerHTML = ``

dados.forEach((dado, index) =>{
    const listItem = document.createElement('li')
    listItem.innerHTML = 
    
    `${dado.nome} - ${dado.email}
    <button class="btn btn-primary btn-sm float-end onclick="editarDado(${index})">Editar<\button>
    <button class="btn btn-primary btn-sm float-end onclick="removerDado(${index})">Remover<\button>
    `

    listardados.appendChild(listItem)
    
})

}

exibirDados()
