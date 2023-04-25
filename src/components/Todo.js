function Todo(props) {
    function handleChange() {
        props.setIsCompleted(props.id);
    }
    function handleClick() {
        props.deleteTodo(props.id);
    }
    return (
        <div className="todo">
            <pre>
                <input type="checkbox" checked={props.isCompleted} onChange={handleChange}/> 
                {props.id} {props.text} {Date.parse(props.dueDate)} isCompleted: {String(props.isCompleted)} 
                <button onClick={handleClick}>Delete</button>
            </pre>
        </div>
    );
}
export default Todo;