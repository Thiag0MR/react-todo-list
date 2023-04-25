import {useState} from 'react';
import InputForm from "./components/InputForm";
import FilterSelect from "./components/FilterSelect";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredList = setFilteredList(todoList, selectedFilter);

  function addNewTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function setFilteredList(todoList, selectedFilter) {
    let filteredList = [];
    switch (selectedFilter) {
      case "all": filteredList = todoList; break;
      case "completed": filteredList = todoList.filter(todo => todo.isCompleted); break; 
      case "pending": filteredList = todoList.filter(todo => !todo.isCompleted); break;
      default: break;
    }
    return filteredList.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
  }

  function setIsCompleted(id) {
    const newTodoList = todoList.map(todo => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <InputForm userInput={userInput}
                 setUserInput={setUserInput}
                 addNewTodo={addNewTodo}/>
      <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    total={filteredList.length}/>
      <TodoList todoList={filteredList}
                setIsCompleted={setIsCompleted}/>
    </div>
  );
}

export default App;
