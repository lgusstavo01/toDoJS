// Importa o hook useState do React para gerenciamento de estado | Imports the useState hook from React for state management
import { useState } from "react";

// Importa o componente Tasks para exibição e gerenciamento de tarefas | Imports the Tasks component for displaying and managing tasks
import { Tasks } from "../Tasks/Tasks";

export function Search() {
  // Estado para armazenar o valor atual do campo de entrada | State to store the current value of the input field
  const [search, setSearch] = useState("");

  // Estado para armazenar a lista de tarefas | State to store the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Função para capturar o valor digitado no campo de entrada | Function to capture the value typed in the input field
  function captureTask(e) {
    setSearch(e.target.value); // Atualiza o estado com o valor do campo de entrada | Updates the state with the input field value
  }

  // Função para adicionar uma nova tarefa à lista | Function to add a new task to the list
  function callTask() {
    if (search.trim() !== "") {
      // Verifica se o campo de entrada não está vazio | Checks if the input field is not empty
      setTaskList([...taskList, search]); // Adiciona a nova tarefa ao estado da lista | Adds the new task to the task list state
      setSearch(""); // Limpa o campo de entrada | Clears the input field
    }
  }

  return (
    // Contêiner principal do componente de busca | Main container for the search component
    <div className="w-[90%] mx-auto">
      {/* Div para organizar o campo de entrada e o botão | Div to organize the input field and button */}
      <div className="flex gap-[8px] justify-center mt-[-30px]">
        {/* Campo de entrada para adicionar uma nova tarefa | Input field to add a new task */}
        <input
          className="bg-gray500 rounded-[8px] p-[16px] text-white focus:outline focus:outline-purpleDark lg:w-[600px]"
          placeholder="Adicione uma nova tarefa" // Texto exibido no campo quando vazio |  Placeholder text shown when the field is empty
          type="text"
          onChange={captureTask} // Chama a função para capturar o valor digitado | Calls the function to capture the typed value
          value={search} // Define o valor do campo com o estado atual | Sets the field value to the current state
        />
        {/* Botão para adicionar a tarefa à lista | Button to add the task to the list */}

        <button
          onClick={callTask} // Chama a função para adicionar a tarefa | Calls the function to add the task
          className="bg-blue flex gap-1 items-center text-white text-[14px] p-[16px] rounded-[8px] transition .5s hover:bg-blueDark hover:cursor-pointer"
        >
          Enviar {/* Texto do botão | Button text */}
        </button>
      </div>
      {/* Componente Tasks para exibir e gerenciar a lista de tarefas | Tasks component to display and manage the task list */}
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
