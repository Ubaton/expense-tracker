"use client";

import BudgetList from "@/components/Budget/BudgetList";
import ExpenseList from "@/components/Expenses/ExpenseList";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";

const Dashboard: React.FC = () => {
  const budgets = [{ category: "Groceries", amount: 2000 }];
  const expenses = [{ description: "Dinner", amount: 500 }];

  return (
    <div className="flex flex-row min-h-screen overflow-hidden ">
      <NavigationBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold ">Financial Dashboard</h1>

        <div className="flex flex-row h-screen items-center space-x-8 p-4">
          <div className="flex flex-row">
            <BudgetList budgets={budgets} />
          </div>
          <div className="flex flex-row">
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
