import styles from './input-form.module.css';

function InputForm(props) {
    let button;

    function handleTextChange(event) {
        const newUserInput = {...props.userInput, text: event.target.value};
        props.setUserInput(newUserInput);
    }
    function handleDateChange(event) {
        const formattedDate = getFormattedDate(new Date(event.target.value));
        const newUserInput = {...props.userInput, dueDate: formattedDate};
        props.setUserInput(newUserInput);
    }
    function getRandomColor() {
        const borderColor = ['AliceBlue', 'Aqua', 'Brown', 'Chartreuse', 
            'BlueViolet', 'Coral', 'CornflowerBlue', 'Crimson', 'DarkBlue', 
            'DarkCyan', 'DarkMagenta', 'DarkOrchid', 'Red', 'Green', 'DarkOrange', 
            'Plum', 'DarkTurquoise', 'DarkViolet', 'GreenYellow', 'Gold', 
            'LightBlue', 'LightGreen', 'LimeGreen'];
        return borderColor[Math.floor(Math.random() * borderColor.length)];
    }
    function handleClickAdd(event) {
        event.preventDefault();
        const newTodo = {...props.userInput, isCompleted: false, id: Date.now(), color: getRandomColor()};
        props.addNewTodo(newTodo);
        clearInputFields();
    }
    function handleClickEdit(event) {
        event.preventDefault();
        const updatedTodo = {...props.userInput};
        props.addUpdatedTodo(updatedTodo);
        clearInputFields();
    }
    function clearInputFields() {
        const formattedDate = getFormattedDate(new Date());
        props.setUserInput({text: "", dueDate: formattedDate});        
    }

    if (props.editMode) {
        button = <button className={styles.button} onClick={handleClickEdit}>Edit</button>        
    } else {
        button = <button className={styles.button} onClick={handleClickAdd}>Add</button>
    }

    return (
        <form className={styles.inputForm}>
            <input type="text" 
                   className={styles.input}
                   value={props.userInput.text}
                   onChange={handleTextChange}
                   placeholder="What do you want to do ?"/>
            <input type="date"
                   className={styles.input}
                   value={props.userInput.dueDate}
                   onChange={handleDateChange}/>
            {button}
        </form>
    )
}

function getFormattedDate(date) {
    return date.toISOString().substring(0, 10);
} 
const formattedDate = getFormattedDate(new Date()); 

InputForm.defaultProps = {
    userInput: {
        text: "",
        dueDate: formattedDate
    }
}
export default InputForm;