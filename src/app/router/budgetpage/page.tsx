"use client";

import BudgetForm from "@/components/Budget/BudgetForm";
import React from "react";

const badgetrouter = () => {
  const handleBudgetSubmit = (formData: {
    category: string;
    amount: number;
  }) => {
    console.log("Submitted Budget:", formData);
  };

  return (
    <div>
      <BudgetForm onSubmit={handleBudgetSubmit} />
    </div>
  );
};

export default badgetrouter;
