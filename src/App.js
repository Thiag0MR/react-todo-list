import InputForm from "./components/InputForm";
import FilterSelect from "./components/FilterSelect";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <InputForm />     
      <FilterSelect />
      <TodoList/>
    </div>
  );
}

export default App;
