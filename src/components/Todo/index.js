import styles from './todo.module.css';

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
    function formatDate(date) {
        let day = date.substring(8, 10);
        let month = date.substring(5, 7);
        let year = date.substring(0, 4);
        return `${day}/${month}/${year}`;
    }

    return (
        <div className={styles.todo} style={{borderLeft: `4px solid ${props.color}`}}>
            <input type="checkbox" className={styles.input} checked={props.isCompleted} onChange={handleChange}/> 
            <div className={styles.textContainer}>  
                <span className={styles.text} style={props.isCompleted ? {"text-decoration":"line-through"} : {}}>{props.text}</span>
                <span className={styles.dueDate}>{formatDate(props.dueDate)}</span>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}
                        onClick={handleClickDelete}
                        title="Delete">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className={styles.button}
                        onClick={handleClickEdit}
                        title="Edit">
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
        </div>
    );
}
export default Todo;