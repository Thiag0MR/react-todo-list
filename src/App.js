import {useState} from 'react';
import InputForm from "./components/InputForm";
import FilterSelect from "./components/FilterSelect";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");

  function addNewTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <InputForm userInput={userInput}
                 setUserInput={setUserInput}
                 addNewTodo={addNewTodo}/>
      <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
