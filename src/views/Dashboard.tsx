"use client";

import BudgetForm from "@/components/Budget/BudgetForm";
import BudgetList from "@/components/Budget/BudgetList";
import ExpenseForm from "@/components/Expenses/ExpenseForm";
import ExpenseList from "@/components/Expenses/ExpenseList";
import React from "react";

const Dashboard: React.FC = () => {
  const budgets = [{ category: "Groceries", amount: 2000 }];
  const expenses = [{ description: "Dinner", amount: 500 }];

  const handleBudgetSubmit = (formData: {
    category: string;
    amount: number;
  }) => {
    // Handle the form data, e.g., send it to the server or update state
    console.log("Submitted Budget:", formData);
  };

  const handleExpenseSubmit = (formData: {
    description: string;
    amount: number;
  }) => {
    // Handle the form data, e.g., send it to the server or update state
    console.log("Submitted Expense:", formData);
  };

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div className="p-4">
        <div className="flex flex-row">
          <BudgetForm onSubmit={handleBudgetSubmit} />
          <BudgetList budgets={budgets} />
        </div>
        <div className="flex flex-row">
          <ExpenseForm onSubmit={handleExpenseSubmit} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
