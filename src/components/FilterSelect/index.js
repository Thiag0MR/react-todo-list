import styles from './filter-select.module.css';

function FilterSelect(props) {
    function handleChange(event) {
        props.setSelectedFilter(event.target.value);
    }

    function handleClick() {
        props.clearCompletedTodos();
    }

    const showClearCompletedButton = props.todoList.some(todo => todo.isCompleted);

    return (
        <div className={styles.filterSelect}>
            <span className={styles.span}>Total: {props.todoList.length}</span>
            <div>
                {showClearCompletedButton && <button onClick={handleClick} className={styles.button}>Clear completed</button>}
                <label htmlFor="filterTodo">
                    <select id="filterTodo" className={styles.select} value={props.selectedFilter} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </label>
            </div>
        </div>
    );
}
export default FilterSelect;