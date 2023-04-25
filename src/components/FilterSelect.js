function FilterSelect(props) {
    return (
        <div className="filter-select">
            <span>Total:</span>
            <label htmlFor="filterTodo">
                <select>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </label>
        </div>
    );
}
export default FilterSelect;