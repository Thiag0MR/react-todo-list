function Todo(props) {
    function handleChange() {
        props.setIsCompleted(props.id);
    }
    function handleClickDelete() {
        props.deleteTodo(props.id);
    }
    function handleClickEdit() {
        props.editTodo(props.id);
    }
    return (
        <div className="todo">
            <pre>
                <input type="checkbox" checked={props.isCompleted} onChange={handleChange}/> 
                {props.id} {props.text} {props.dueDate} isCompleted: {String(props.isCompleted)} 
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={handleClickEdit}>Edit</button>
            </pre>
        </div>
    );
}
export default Todo;