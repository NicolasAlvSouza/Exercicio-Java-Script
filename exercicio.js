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
    console.log(`Tarefa criada: ${tarefa.titulo}`)
}

function listarTarefas(lista) {
    if (lista.length = 0) {
        console.log('Nenhuma tarefa cadastrada')
        return
    }
    console.log('==== Lista de Tarefas ====')

    lista.forEach((tarefa, indice) => {
        const status = tarefa.concluida ? "✅" : "⏳"
        const prioridade = tarefa.prioridade.toUpperCase()
        console.log(`${indice + 1}. ${status} ${prioridade} — ${tarefa.titulo}`)
    })
}

function filtrarPorPrioridade(lista, prioridade) {
    return lista.filter(tarefa => tarefa.prioridade === prioridade)
}

function gerarRelatorio(lista) {
    const total = lista.length
    const concluidas = lista.filter(t => t.lista).length
    const pendentes = total - concluidas

    
  console.log("\n=== Relatório Final ===")
  console.log(`Total:       ${total}`)
  console.log(`Concluídas:  ${concluidas}`)
  console.log(`Pendentes:   ${pendentes}`)

  if (pendentes === 0) {
    console.log("🎉 Parabéns! Todas as tarefas foram concluídas.")
  } else {
    console.log(`💪 Continue! Ainda há ${pendentes} tarefa(s) pendente(s).`)
  }
}


adicionarTarefa(tarefas, "Estudar variáveis",     "alta")
adicionarTarefa(tarefas, "Praticar condicionais", "alta")
adicionarTarefa(tarefas, "Fazer exercícios",      "media")
adicionarTarefa(tarefas, "Revisar anotações",     "baixa")
adicionarTarefa(tarefas, "",                      "alta")

listarTarefas(tarefas);

filtrarPorPrioridade(tarefas, 'media');

gerarRelatorio(tarefas)