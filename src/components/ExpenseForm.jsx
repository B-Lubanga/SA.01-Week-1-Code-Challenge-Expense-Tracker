import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !amount || !category) return;

    onAdd({ description, amount: parseFloat(amount), category });
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Enter amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <select
        className="form-control mb-2"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Select category</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
        <option value="personal">Personal</option>
        <option value="growth">Growth</option>
      </select>

      <button className="btn btn-dark w-100">Submit</button>
    </form>
  );
}

export default ExpenseForm;
