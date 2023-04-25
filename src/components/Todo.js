function Todo(props) {
    return (
        <div className="todo">
            <input type="checkbox"/> 
            <pre>{props.id} {props.text} {Date.parse(props.dueDate)} isCompleted: {String(props.isCompleted)}</pre>
        </div>
    );
}
export default Todo;