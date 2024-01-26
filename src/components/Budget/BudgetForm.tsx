"use client";

import React, { useState } from "react";

interface BudgetFormProps {
  onSubmit: (formData: { category: string; amount: number }) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ category, amount });

    setCategory("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </label>
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;
