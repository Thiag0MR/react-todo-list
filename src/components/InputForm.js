function InputForm(props) {
    return (
        <form className="input-form">
            <input type="text" 
                   value={props.userInput.text}
                   placeholder="What do you want to do ?"/>
            <input type="date"
                   value={props.userInput.date}/>
            <button>Add</button>
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