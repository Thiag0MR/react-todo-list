function InputForm(props) {
    function handleTextChange(event) {
        const newUserInput = {...props.userInput, text: event.target.value};
        props.setUserInput(newUserInput);
    }
    function handleDateChange(event) {
        const date = new Date(event.target.value);
        const formattedDate = date.toISOString().substring(0, 10);
        const newUserInput = {...props.userInput, dueDate: formattedDate};
        props.setUserInput(newUserInput);
    }
    function handleClick(event) {
        event.preventDefault();
        let newTodo = {...props.userInput, isCompleted: false, id: Date.now()};
        props.addNewTodo(newTodo);
    }
    return (
        <form className="input-form">
            <input type="text" 
                   value={props.userInput.text}
                   onChange={handleTextChange}
                   placeholder="What do you want to do ?"/>
            <input type="date"
                   value={props.userInput.dueDate}
                   onChange={handleDateChange}/>
            <button onClick={handleClick}>Add</button>
        </form>
    )
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);
console.log(formattedDate);

InputForm.defaultProps = {
    userInput: {
        text: "",
        dueDate: formattedDate
    }
}
export default InputForm;