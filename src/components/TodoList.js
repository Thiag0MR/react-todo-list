import Todo from "./Todo";

function TodoList(props) {
    const todoList = props.todoList.map((todo) => {
        return (<Todo {...todo} key={todo.id}/>);
    });

    return (
        <div className="todo-list">
            {todoList}
        </div>
    );
}
export default TodoList;