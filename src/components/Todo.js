function Todo(props) {
    function handleChange() {
        props.setIsCompleted(props.id);
    }
    return (
        <div className="todo">
            <input type="checkbox" checked={props.isCompleted} onChange={handleChange}/> 
            <pre>{props.id} {props.text} {Date.parse(props.dueDate)} isCompleted: {String(props.isCompleted)}</pre>
        </div>
    );
}
export default Todo;