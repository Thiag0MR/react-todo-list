import Todo from "./Todo";

function TodoList(props) {
    const todoList = props.todoList.map((todo) => {
        return (<Todo {...todo} 
                      key={todo.id}
                      setIsCompleted={props.setIsCompleted}/>);
    });

    return (
        <div className="todo-list">
            {todoList}
        </div>
    );
}
export default TodoList;