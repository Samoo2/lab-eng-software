document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos DOM
    const novoItemInput = document.getElementById('new-item');
    const BotaoAdd = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Cria um array vazio para armazenar as tarefas
    const tasks = [];

    // Adiciona o evento de clique para o botão Adicionar
    BotaoAdd.addEventListener('click', () => {
        // Verifica se o campo de entrada não está vazio
        if (novoItemInput.value) {
            // Cria um novo item da lista
            const novoItem = document.createElement('li');
            const taskNome = document.createElement('span');
            taskNome.innerText = " " + novoItemInput.value + " ";

            // Cria um botão de editar e adicione um evento de clique para ele
            const botaoEditar = document.createElement('button');
            botaoEditar.innerText = 'Editar';
            botaoEditar.addEventListener('click', () => {
                const newTask = prompt('Digite a nova tarefa:', taskNome.innerText);
                if (newTask !== null) {
                    taskNome.innerText = newTask;
                }
            });

            // Cria um botão de excluir e adicione um evento de clique para ele
            const botaoExcluir = document.createElement('button');
            botaoExcluir.innerText = 'Excluir';
            botaoExcluir.addEventListener('click', () => {
                // Remove o item da lista
                todoList.removeChild(novoItem);
                // Remove a tarefa do array
                tasks.splice(tasks.indexOf(novoItem), 1);
            });

            // Cria um botão de mover para cima e adicione um evento de clique para ele
            const botaoMover = document.createElement('button');
            botaoMover.innerText = 'Mover';
            botaoMover.addEventListener('click', () => {
                // Verifica se o item pode ser movido para cima
                const indiceAtual = tasks.indexOf(novoItem);
                if (indiceAtual > 0) {
                    // Remove o item do array
                    tasks.splice(indiceAtual, 1);
                    // Adiciona o item na posição anterior do array
                    tasks.splice(indiceAtual - 1, 0, novoItem);
                    // Move o item para cima na lista
                    todoList.insertBefore(novoItem, todoList.children[indiceAtual - 1]);
                }
            });

            // Adiciona a tarefa ao array
            tasks.push(novoItem);

            // Adiciona os elementos ao novo item da lista
            novoItem.appendChild(taskNome);
            novoItem.appendChild(botaoEditar);
            novoItem.appendChild(botaoMover);
            novoItem.appendChild(botaoExcluir);

            // Adiciona o novo item à lista
            todoList.appendChild(novoItem);

            // Limpa o campo de entrada
            novoItemInput.value = '';
        }
    });
});
