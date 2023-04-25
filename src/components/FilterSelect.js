function FilterSelect(props) {
    function handleChange(event) {
        props.setSelectedFilter(event.target.value);
    }

    return (
        <div className="filter-select">
            <span>Total: {props.total}</span>
            <label htmlFor="filterTodo">
                <select value={props.selectedFilter} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </label>
        </div>
    );
}
export default FilterSelect;