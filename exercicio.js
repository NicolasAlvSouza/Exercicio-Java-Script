const tarefas = []

function criarTarefa(titulo, prioridade) {

    if (titulo.trim() === '') {
        console.log("Erro: Título obrigatório")
        return null
    }
    
    if (!prioridade) {
        prioridade = 'media'
    }

    return { id: Date.now(), titulo: titulo.trim(), prioridade: prioridade, concluida: false }
}

function adicionarTarefa(lista, titulo, prioridade) {
    const tarefa = criarTarefa (titulo, prioridade)
    
    if(tarefa === null) {
        return null
    }
    lista.push(tarefa)
    console.log('Tarefa criada com susseso!')
}

adicionarTarefa(tarefas, "Estudar variáveis", "alta")
adicionarTarefa(tarefas, "Praticar condicionais", "alta")
console.log(tarefas)
