import React from "react";

interface ExpenseListProps {
  expenses: { description: string; amount: number }[];
}

const ExpeneseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong>: R {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpeneseList;
