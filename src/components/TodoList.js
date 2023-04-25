import Todo from "./Todo";

function TodoList(props) {
    const todoList = props.todoList.map((todo) => {
        return (<Todo {...todo} 
                      key={todo.id}
                      setIsCompleted={props.setIsCompleted}
                      deleteTodo={props.deleteTodo}
                      editTodo={props.editTodo}/>);
    });
    const showClearCompletedButton = props.todoList.some(todo => todo.isCompleted);

    function handleClick() {
        props.clearCompletedTodos();
    }

    return (
        <div className="todo-list">
            {todoList}
            {showClearCompletedButton && <button onClick={handleClick}>Clear completed</button>}
        </div>
    );
}
export default TodoList;