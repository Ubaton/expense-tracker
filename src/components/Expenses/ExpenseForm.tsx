import React, { useState } from "react";

interface ExprenseFormProps {
  onSubmit: (formData: { description: string; amount: number }) => void;
}

const ExpenseForm: React.FC<ExprenseFormProps> = ({ onSubmit }) => {
  const [description, seDescription] = useState<string>("");
  const [amount, setAmonut] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ description, amount });
    seDescription("");
    setAmonut(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => seDescription(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="nmber"
          value={amount}
          onChange={(e) => setAmonut(Number(e.target.value))}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
