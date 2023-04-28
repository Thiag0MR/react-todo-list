import { useState } from 'react';
import styles from './input-form.module.css';

function InputForm(props) {
    const [errorMessage, setErrorMessage] = useState("");

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
        if (!isInputValid(props.userInput.text)) {
            setErrorMessage("Invalid input.");
            return;
        }
        const newTodo = {...props.userInput, isCompleted: false, id: Date.now(), color: getRandomColor()};
        props.addNewTodo(newTodo);
        clearInputFields();
        setErrorMessage("");
    }
    function handleClickEdit(event) {
        event.preventDefault();
        if (!isInputValid(props.userInput.text)) {
            setErrorMessage("Invalid input.");
            return;
        }
        const updatedTodo = {...props.userInput};
        props.addUpdatedTodo(updatedTodo);
        clearInputFields();
        setErrorMessage("");
    }
    function clearInputFields() {
        const formattedDate = getFormattedDate(new Date());
        props.setUserInput({text: "", dueDate: formattedDate});        
    }
    function isInputValid(input) {
        return input.trim().length === 0 ? false : true;
    }

    return (
        <form className={styles.inputForm}>
            <div className={styles.divInput}>
                <input type="text" 
                    className={styles.input}
                    value={props.userInput.text}
                    onChange={handleTextChange}
                    placeholder="What do you want to do ?"/>
                <span className={styles.errorMessage}>{errorMessage}</span>
            </div>
            <input type="date"
                   className={styles.input}
                   value={props.userInput.dueDate}
                   onChange={handleDateChange}/>
            <button className={styles.button} onClick={props.editMode ? handleClickEdit : handleClickAdd}>
                {props.editMode ? "Edit" : "Add"}
            </button>
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