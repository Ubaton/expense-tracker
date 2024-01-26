"use client";

import BudgetList from "@/components/Budget/BudgetList";
import ExpenseList from "@/components/Expenses/ExpenseList";
import React from "react";

const Dashboard: React.FC = () => {
  const budgets = [{ category: "Groceries", amount: 2000 }];
  const expenses = [{ description: "Dinner", amount: 500 }];

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div className="flex flex-row  space-x-8 p-4">
        <div className="flex flex-row">
          <BudgetList budgets={budgets} />
        </div>
        <div className="flex flex-row">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
