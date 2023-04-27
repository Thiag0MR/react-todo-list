import {useState, useEffect} from 'react';
import InputForm from "./components/InputForm";
import FilterSelect from "./components/FilterSelect";
import TodoList from "./components/TodoList";
import './App.css';

const LOCAL_STORAGE_KEY = "todoList";

function App() {
  const [todoList, setTodoList] = useState(getTodoListFromLocalStorage());
  const [userInput, setUserInput] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [editMode, setEditMode] = useState(false);

  const filteredList = setFilteredList(todoList, selectedFilter);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  function getTodoListFromLocalStorage() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    const todoList = JSON.parse(saved);
    return todoList ? todoList : [];
  }

  function addNewTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  
  function addUpdatedTodo(updatedTodo) {
    const newTodoList = todoList.map(todo => {
      return updatedTodo.id === todo.id ? updatedTodo : todo;
    });
    setTodoList(newTodoList);
    setEditMode(false);
  }

  function deleteTodo(id) {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  function editTodo(id) {
    const todoToBeEdited = todoList.find(todo => todo.id === id);
    setUserInput(todoToBeEdited);
    setEditMode(true);
  }

  function clearCompletedTodos() {
    const newTodoList = todoList.filter(todo => !todo.isCompleted);
    setTodoList(newTodoList);
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
                 addNewTodo={addNewTodo}
                 addUpdatedTodo={addUpdatedTodo}
                 editMode={editMode}/>
      <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    todoList={filteredList}
                    clearCompletedTodos={clearCompletedTodos}/>
      <hr/>
      <TodoList todoList={filteredList}
                setIsCompleted={setIsCompleted}
                deleteTodo={deleteTodo}
                editTodo={editTodo}/>
    </div>
  );
}

export default App;
