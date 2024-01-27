import React from "react";

interface SavingsGoalListProp {
  savingsGoals: { goalName: string; targetAmount: number }[];
}

const SavingsGoalList: React.FC<SavingsGoalListProp> = ({ savingsGoals }) => {
  return (
    <div>
      <h2>Savings Goals List</h2>
      <ul>
        {savingsGoals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.goalName}</strong>: Target Amount - R{" "}
            {goal.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};
