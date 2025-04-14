function ExpenseTable({ expenses, onDelete, setSortKey }) {
  return (
    <div>
      <div className="mb-2">
        <button
          onClick={() => setSortKey("category")}
          className="btn btn-secondary me-2"
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortKey("description")}
          className="btn btn-secondary"
        >
          Sort by Description
        </button>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((event) => (
            <tr key={event.id}>
              <td>{event.description}</td>
              <td>{event.category}</td>
              <td>{event.amount}</td>
              <td>{event.date}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
