// Importa o hook useState do React para gerenciamento de estado | Imports the useState hook from React for state management
import { useState } from "react";

// Importa o ícone de lixeira da biblioteca react-icons | Imports the trash icon from the react-icons library
import { PiTrashLight } from "react-icons/pi";

// Define o componente Tasks para gerenciar e exibir tarefas | Defines the Tasks component to manage and display tasks
export function Tasks({ taskList, setTaskList }) {
  // Estado para armazenar as tarefas marcadas como concluídas | State to store tasks marked as completed
  const [checkedTasks, setCheckedTasks] = useState([]);

  // Função chamada ao marcar/desmarcar uma tarefa | Function called when marking/unmarking a task
  function handleCheckboxChange(task) {
    setCheckedTasks(
      (prev) =>
        prev.includes(task)
          ? prev.filter((t) => t !== task) // Remove a tarefa se desmarcada | Removes the task if unchecked
          : [...prev, task] // Adiciona a tarefa se marcada | // Adds the task if checked
    );
  }

  // Função para remover uma tarefa da lista | Function to remove a task from the list
  function handleRemoveTask(taskToRemove) {
    // Remove a tarefa da lista principal | Removes the task from the main list
    setTaskList((prev) => prev.filter((task) => task !== taskToRemove));

    // Remove a tarefa do estado checkedTasks, se estiver marcada | Removes the task from the checkedTasks state if it is marked
    setCheckedTasks((prev) => prev.filter((task) => task !== taskToRemove));
  }

  return (
    // Contêiner principal para exibição de tarefas | Main container for task display
    <div className="pt-[4rem] w-[90%] mx-auto lg:w-[70%] 2xl:w-[50%]">
      {/* Exibe o cabeçalho com contagem de tarefas criadas e concluídas | Displays the header with the count of created and completed tasks */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-blue font-bold">Tarefas criadas</p>
          <span className="bg-gray400 px-2 rounded-xl text-white">
            {taskList.length}{" "}
            {/* Número total de tarefas | Total number of tasks */}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-purple font-bold">Concluídas</p>
          <span className="bg-gray400 px-2 rounded-xl text-white">
            {checkedTasks.length}{" "}
            {/* Número de tarefas concluídas | Number of completed tasks */}
          </span>
        </div>
      </div>

      {/* Verifica se a lista de tarefas está vazia | Checks if the task list is empty */}
      {taskList.length === 0 ? (
        // Mostra mensagem amigável se não houver tarefas | Displays a friendly message if there are no tasks
        <div className="mt-[4rem] flex flex-col items-center gap-4 text-gray300">
          <p className="text-xl font-bold">Você não tem tarefas no momento.</p>
          <p>Adicione uma nova tarefa para começar!</p>
        </div>
      ) : (
        // Exibe a lista de tarefas se houver tarefas | Displays the task list if there are tasks
        <ul className="mt-[1.5rem] flex flex-col gap-6">
          {taskList.map((task) => (
            // Cada tarefa é renderizada como um item da lista | Each task is rendered as a list item
            <li
              key={task} // Identifica a tarefa com o próprio conteúdo | Identifies the task with its content
              className={`flex items-center justify-between gap-2 text-lg text-white ${
                checkedTasks.includes(task) ? "clicked" : "" // Aplica estilo se a tarefa estiver concluída | Applies style if the task is completed
              }`}
            >
              <div className="flex items-center gap-2">
                {/* Checkbox para marcar/desmarcar a tarefa | Checkbox to check/uncheck the task */}
                <input
                  type="checkbox"
                  checked={checkedTasks.includes(task)} // Verifica se a tarefa está marcada | Checks if the task is marked
                  onChange={() => handleCheckboxChange(task)} // Atualiza o estado ao clicar | Updates the state on click
                />
                <span>{task}</span>{" "}
                {/* Exibe o texto da tarefa | Displays the task text*/}
              </div>
              <button
                onClick={() => handleRemoveTask(task)} // Remove a tarefa ao clicar | Removes the task on click
                className="text-red-500 hover:text-red-700"
              >
                <PiTrashLight size={20} /> {/* Ícone de lixeira | Trash icon*/}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
