function adicionarRequisito() {
    // Obter os valores dos campos
    const descricaoRequisito = document.getElementById('descricaoRequisito').value;
    const impactoUsuario = document.getElementById('impactoUsuario').value;
    const viabilidadeTecnica = document.getElementById('viabilidadeTecnica').value;

    // Validar se todos os campos foram preenchidos
    if (!descricaoRequisito || !impactoUsuario || !viabilidadeTecnica) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Definir a pontuação para impacto no usuário final
    const impactoPontuacao = {
        'alto': 3,
        'médio': 2,
        'baixo': 1
    };

    // Definir a pontuação para viabilidade técnica
    const viabilidadePontuacao = {
        'alto': 1,
        'médio': 2,
        'baixo': 3
    };

    // Calcular a pontuação total do requisito
    const pontuacaoTotal = impactoPontuacao[impactoUsuario] + viabilidadePontuacao[viabilidadeTecnica];

    // Classificar a prioridade com base na pontuação total
    let prioridade;
    if (pontuacaoTotal >= 5) {
        prioridade = 'Alta';
    } else if (pontuacaoTotal >= 3) {
        prioridade = 'Média';
    } else {
        prioridade = 'Baixa';
    }

    // Criar um item da lista com a descrição e prioridade
    const requisitoItem = document.createElement('li');
    requisitoItem.className = prioridade.toLowerCase();
    requisitoItem.textContent = `${descricaoRequisito} - Prioridade: ${prioridade}`;

    // Adicionar o item à lista
    document.getElementById('requisitosLista').appendChild(requisitoItem);

    // Limpar os campos do formulário
    document.getElementById('requisitoForm').reset();
}
