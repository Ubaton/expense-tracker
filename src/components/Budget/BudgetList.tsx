import React from "react";

interface BudgetListProps {
  budgets: { category: string; amount: number }[];
}

const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  return (
    <div>
      <h2>Budget List</h2>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            <strong>{budget.category}</strong>: R {budget.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
