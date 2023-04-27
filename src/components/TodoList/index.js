import Todo from "../Todo";
import styles from './todo-list.module.css';

function TodoList(props) {
    const todoList = props.todoList.map((todo) => {
        return (<Todo {...todo} 
                      key={todo.id}
                      setIsCompleted={props.setIsCompleted}
                      deleteTodo={props.deleteTodo}
                      editTodo={props.editTodo}/>);
    });
    
    return (
        <div className={styles.todoList}>
            {todoList}
        </div>
    );
}
export default TodoList;