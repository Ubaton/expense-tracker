import ExpenseForm from "@/components/Expenses/ExpenseForm";
import React from "react";

const expensesrouter = () => {
  const handleExpenseSubmit = (formData: {
    description: string;
    amount: number;
  }) => {
    console.log("Submitted Expense:", formData);
  };

  return (
    <div>
      <ExpenseForm onSubmit={handleExpenseSubmit} />
    </div>
  );
};

export default expensesrouter;
