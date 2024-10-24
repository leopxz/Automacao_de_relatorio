// Variáveis para os elementos de interface
const toggleFormBtn = document.getElementById('toggleForm');
const toggleContagemBtn = document.getElementById('toggleContagem');
const formularioChamados = document.getElementById('formularioChamados');
const contagemChamadosDiv = document.getElementById('contagemChamados');
const contagemContainer = document.getElementById('contagemContainer');

// Seleciona os elementos do formulário
const codigoInput = document.getElementById('codigo');
const sistemaInput = document.getElementById('sistema');
const chamadoInput = document.getElementById('chamado');
const chegadaInput = document.getElementById('chegada');
const ultimaInteracaoInput = document.getElementById('ultima-interacao');
const statusInput = document.getElementById('status');
const etaField = document.getElementById('eta-field');
const etaDateInput = document.getElementById('eta-date');
const etaCorrecaoField = document.getElementById('eta-correcao-field');
const etaCorrecaoDateInput = document.getElementById('eta-correcao-date');
const tsInput = document.getElementById('ts');
const responsavelInput = document.getElementById('responsavel');
const addChamadoBtn = document.getElementById('addChamado');
const chamadosContainer = document.getElementById('chamadosContainer');

// Variável para armazenar a contagem de chamados e os de TS por sistema
const contagemSistemas = {
    
        'Acordos Contratos': { total: 0, ts: 0 },
        'APLICATIVO MOBILE': { total: 0, ts: 0 },
        'ARS': { total: 0, ts: 0 },
        'Cashback': { total: 0, ts: 0 },
        'CTF': { total: 0, ts: 0 },
        'Data Critica': { total: 0, ts: 0 },
        'Delivery': { total: 0, ts: 0 },
        'DESCONHECIDO': { total: 0, ts: 0 },
        'ECOMMERCE': { total: 0, ts: 0 },
        'GENESIS_CRF': { total: 0, ts: 0 },
        'GESPROM BIG': { total: 0, ts: 0 },
        'GESPROM_REB': { total: 0, ts: 0 },
        'Gesprom Rebaixa': { total: 0, ts: 0 },
        'Gescom': { total: 0, ts: 0 },
        'GÊNESIS': { total: 0, ts: 0 },
        'GÊNESIS CARREFOUR': { total: 0, ts: 0 },
        'Gemini': { total: 0, ts: 0 },
        'Impressao Centralizada': { total: 0, ts: 0 },
        'LiveView': { total: 0, ts: 0 },
        'Menu de atendimento Gescom': { total: 0, ts: 0 },
        'Nanis': { total: 0, ts: 0 },
        'PDV': { total: 0, ts: 0 },
        'PLURIX': { total: 0, ts: 0 }, 
        'Pricefy': { total: 0, ts: 0 },
        'Qlikview': { total: 0, ts: 0 },
        'Rebaixa': { total: 0, ts: 0 },
        'Reset de senha AD': { total: 0, ts: 0 },
        'ROI': { total: 0, ts: 0 },
        'Rotinas Noturnas': { total: 0, ts: 0 },
        'SAD': { total: 0, ts: 0 },
        'Salesforce': { total: 0, ts: 0 },
        'SCI': { total: 0, ts: 0 },
        'SCS': { total: 0, ts: 0 },
        'SCS/Login': { total: 0, ts: 0 },
        'Storex': { total: 0, ts: 0 },
        'Televendas': { total: 0, ts: 0 },
        'Zabbix': { total: 0, ts: 0 },
        'Zabbix Desastre': { total: 0, ts: 0 },
        'Gerenciador preço Fixo': { total: 0, ts: 0 },
        'Pré-Cadastro': { total: 0, ts: 0 }
    };
    

// Mostrar ou esconder os campos ETA com base no status selecionado
statusInput.addEventListener('change', function () {
    if (statusInput.value === 'eta') {
        etaField.style.display = 'block';
        etaCorrecaoField.style.display = 'none';
    } else if (statusInput.value === 'etaCorrecao') {
        etaCorrecaoField.style.display = 'block';
        etaField.style.display = 'none';
    } else {
        etaField.style.display = 'none';
        etaCorrecaoField.style.display = 'none';
    }
});

// Adiciona o evento de clique para o botão "Adicionar Chamado"
addChamadoBtn.addEventListener('click', function() {
    addChamado();
});

// Adiciona o evento de clique para o botão "Mostrar/Ocultar Contagem"
toggleContagemBtn.addEventListener('click', function() {
    if (contagemChamadosDiv.style.display === 'none' || contagemChamadosDiv.style.display === '') {
        contagemChamadosDiv.style.display = 'block';  // Mostra a contagem
    } else {
        contagemChamadosDiv.style.display = 'none';   // Oculta a contagem
    }
});





// Função para criar um novo chamado e adicioná-lo ao container
function addChamado() {
    // Verifica se o código e o sistema foram preenchidos
    if (codigoInput.value === '' || sistemaInput.value === '') {
        alert('Por favor, preencha os campos obrigatórios: Código e Sistema.');
        return;
    }

     // Logs das entradas
     console.log("Código:", codigoInput.value);
     console.log("Sistema:", sistemaInput.value);
     console.log("Chamado:", chamadoInput.value);
     console.log("TS:", tsInput.value);
     console.log("Chegada na fila:", chegadaInput.value);
     console.log("Última interação:", ultimaInteracaoInput.value);
     console.log("Status:", statusInput.value);
     console.log("Data ETA:", etaDateInput.value);
     console.log("Data ETA de Correção:", etaCorrecaoDateInput.value);
     console.log("Responsável:", responsavelInput.value);

    // Cria um div para armazenar o chamado
    const chamadoDiv = document.createElement('div');
    chamadoDiv.classList.add('chamado');

    // Preenche o conteúdo do div com os dados do formulário
    const etaText = etaDateInput.value ? `<p>Data ETA: ${etaDateInput.value}</p>` : '';
    const etaCorrecaoText = etaCorrecaoDateInput.value ? `<p>Data ETA de Correção: ${etaCorrecaoDateInput.value}</p>` : '';
    const responsavel = responsavelInput.value; // Obtém o valor do responsável
    
    chamadoDiv.innerHTML = `
        <h4>${codigoInput.value}</h4>
        <p>Sistema: ${sistemaInput.value}</p>
        <p>Chamado: ${chamadoInput.value}</p>
        <p>TS: ${tsInput.value}</p>
        <p>Chegada na fila: ${chegadaInput.value}</p>
        <p>Última interação: ${ultimaInteracaoInput.value}</p>
        <p>Status: ${statusInput.value}</p>
        ${etaText}
        ${etaCorrecaoText}
        <p>Responsável: ${responsavel}</p> 
        <button class="editChamado">Editar</button>
        <button class="deleteChamado">Excluir</button>
    `;

    // Adiciona o novo chamado ao container de chamados
    chamadosContainer.appendChild(chamadoDiv);

    // Limpa os campos do formulário após adicionar o chamado
    limparFormulario();

    // Atualiza a contagem após adicionar um novo chamado
    atualizarContagem();

    // Adiciona eventos para os botões de editar e excluir
    const editBtn = chamadoDiv.querySelector('.editChamado');
    const deleteBtn = chamadoDiv.querySelector('.deleteChamado');

    editBtn.addEventListener('click', function() {
        editarChamado(chamadoDiv);
    });

    deleteBtn.addEventListener('click', function() {
        excluirChamado(chamadoDiv);
    });
}




// Função para limpar o formulário após adicionar um chamado
function limparFormulario() {
    codigoInput.value = '';
    sistemaInput.value = '';
    chamadoInput.value = '';
    chegadaInput.value = '';
    ultimaInteracaoInput.value = '';
    statusInput.value = '';
    etaDateInput.value = '';
    etaCorrecaoDateInput.value = '';
    tsInput.value = '';
    responsavelInput.value = '';
    etaField.style.display = 'none';
    etaCorrecaoField.style.display = 'none';
}

// Função para editar um chamado
function editarChamado(chamadoDiv) {
    // Define os valores atuais nos campos de entrada
    codigoInput.value = chamadoDiv.querySelector('h4').textContent;
    sistemaInput.value = chamadoDiv.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
    chamadoInput.value = chamadoDiv.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
    tsInput.value = chamadoDiv.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
    chegadaInput.value = chamadoDiv.querySelector('p:nth-of-type(4)').textContent.split(': ')[1];
    ultimaInteracaoInput.value = chamadoDiv.querySelector('p:nth-of-type(5)').textContent.split(': ')[1];
    statusInput.value = chamadoDiv.querySelector('p:nth-of-type(6)').textContent.split(': ')[1];

    // Se houver data ETA, preencher o campo correspondente
    const etaText = chamadoDiv.querySelector('p:nth-of-type(7)');
    etaDateInput.value = etaText ? etaText.textContent.split(': ')[1] : '';

    // Se houver data ETA de correção, preencher o campo correspondente
    const etaCorrecaoText = chamadoDiv.querySelector('p:nth-of-type(8)');
    etaCorrecaoDateInput.value = etaCorrecaoText ? etaCorrecaoText.textContent.split(': ')[1] : '';

    // Mostra o formulário
    formularioChamados.style.display = 'block';

    // Remove o chamado atual
    excluirChamado(chamadoDiv);
}

// Função para excluir um chamado
function excluirChamado(chamadoDiv) {
    chamadosContainer.removeChild(chamadoDiv);
    atualizarContagem();
}


// Função para atualizar a contagem de chamados por sistema e TS
function atualizarContagem() {
    const chamados = chamadosContainer.querySelectorAll('.chamado');
    let totalChamados = 0; // Variável para contar o total de chamados
    let totalComETA = 0;   // Variável para contar o total com ETA
    let totalComETACorrecao = 0; // Variável para contar o total com ETA de Correção

    // Zera a contagem de sistemas
    for (const sistema in contagemSistemas) {
        contagemSistemas[sistema].total = 0;
        contagemSistemas[sistema].ts = 0;
    }

    // Atualiza a contagem para cada chamado
    chamados.forEach(function(chamado) {
        const sistema = chamado.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
        const ts = chamado.querySelector('p:nth-of-type(3)').textContent.split(': ')[1].trim().toUpperCase(); // Normaliza o valor de TS
        const status = chamado.querySelector('p:nth-of-type(6)').textContent.split(': ')[1]; // Obtém o status do chamado
        const etaCorrecao = chamado.querySelector('p:nth-of-type(8)'); // Obtém o ETA de Correção

        contagemSistemas[sistema].total++;
        totalChamados++; // Incrementa o contador de chamados

        if (ts === 'SIM') {
            contagemSistemas[sistema].ts++;
        }

        // Verifica se há ETA de correção e incrementa a contagem correta
        if (status === 'etaCorrecao' && etaCorrecao) {
            totalComETACorrecao++; // Incrementa a contagem de ETA de Correção
        }
    });

    // Atualiza a interface com as contagens
    contagemContainer.innerHTML = '';
    for (const sistema in contagemSistemas) {
        if (contagemSistemas[sistema].total > 0) {
            contagemContainer.innerHTML += `<p>${sistema}: ${contagemSistemas[sistema].total} chamados (TS: ${contagemSistemas[sistema].ts})</p>`;
        }
    }

    // Atualiza as contagens totais com base no ETA de correção
    contagemContainer.innerHTML += `<p>Total de Chamados: ${totalChamados}</p>`;
    contagemContainer.innerHTML += `<p>Total com ETA de Correção: ${totalComETACorrecao}</p>`;
}


// Função para atualizar a contagem de chamados por sistema, TS e ETA
function atualizarContagem() {
    const chamados = chamadosContainer.querySelectorAll('.chamado');
    let totalChamados = 0;
    let totalEtaAnalise = 0, totalEtaCorrecao = 0, totalPendente = 0, total3Nivel = 0;
    let etaPorData = {}, etaCorrecaoPorData = {};

    // Zera a contagem de sistemas
    for (const sistema in contagemSistemas) {
        contagemSistemas[sistema].total = 0;
        contagemSistemas[sistema].ts = 0;
    }

    // Atualiza a contagem para cada chamado
    chamados.forEach(function(chamado) {
        const sistema = chamado.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
        const ts = chamado.querySelector('p:nth-of-type(3)').textContent.split(': ')[1].trim().toUpperCase();
        const status = chamado.querySelector('p:nth-of-type(6)').textContent.split(': ')[1];
        const eta = chamado.querySelector('p:nth-of-type(7)') ? chamado.querySelector('p:nth-of-type(7)').textContent.split(': ')[1] : '';
        const etaCorrecao = chamado.querySelector('p:nth-of-type(8)') ? chamado.querySelector('p:nth-of-type(8)').textContent.split(': ')[1] : '';

        
        // Contagem por sistema
        contagemSistemas[sistema].total++;
        totalChamados++;

        if (ts === 'SIM') {
            contagemSistemas[sistema].ts++;
        }

        // Contagem por status ETA e ETA de Correção
        if (status === 'eta') {
            totalEtaAnalise++;
            if (eta) {
                if (!etaPorData[eta]) etaPorData[eta] = 0;
                etaPorData[eta]++;
            }
        } else if (status === 'etaCorrecao') {
            totalEtaCorrecao++;
            if (etaCorrecao) {
                if (!etaCorrecaoPorData[etaCorrecao]) etaCorrecaoPorData[etaCorrecao] = 0;
                etaCorrecaoPorData[etaCorrecao]++;
            }
        } else if (status === 'pendente') {
            totalPendente++;
        } else if (status === '3nivel') {
            total3Nivel++;
        }
    });

    // Atualiza o container de contagem
    contagemContainer.innerHTML = '';

    // Contagem por sistema
    for (const sistema in contagemSistemas) {
        if (contagemSistemas[sistema].total > 0) {
            contagemContainer.innerHTML += `<p>${sistema}: ${contagemSistemas[sistema].total} chamados (TS: ${contagemSistemas[sistema].ts})</p>`;
        }
    }


    
    // Contagem total de chamados
    contagemContainer.innerHTML += `<p><strong>Total de Chamados: ${totalChamados}</strong></p>`;

    // Contagem de ETA
    contagemContainer.innerHTML += `<p><strong>Total com ETA em análise: ${totalEtaAnalise}</strong></p>`;
    for (const data in etaPorData) {
        contagemContainer.innerHTML += `<p>Total com ETA ${data}: ${etaPorData[data]}</p>`;
    }

    // Contagem de ETA de Correção
    contagemContainer.innerHTML += `<p><strong>Total com ETA de Correção: ${totalEtaCorrecao}</strong></p>`;
    for (const data in etaCorrecaoPorData) {
        contagemContainer.innerHTML += `<p>Total com ETA de Correção ${data}: ${etaCorrecaoPorData[data]}</p>`;
    }

    // Contagem de pendente e 3° nível
    contagemContainer.innerHTML += `<p>Total pendente usuário: ${totalPendente}</p>`;
    contagemContainer.innerHTML += `<p>Total 3° nível: ${total3Nivel}</p>`;
}
