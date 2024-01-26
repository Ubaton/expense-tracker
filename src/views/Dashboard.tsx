import BudgetList from "@/components/Budget/BudgetList";
import ExpenseList from "@/components/Expenses/ExpenseList";
import React from "react";

const Dashboard: React.FC = () => {
  const budgets = [{ category: "Groceries", amount: 2000 }];
  const expenses = [{ description: "Dinner", amount: 500 }];

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <BudgetList budgets={budgets} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
