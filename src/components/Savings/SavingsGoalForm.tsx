import React, { useState } from "react";

interface SavingsGoalFormProps {
  onSubmit: (formData: { goalName: string; targetAmount: number }) => void;
}

const SavingsGoalForm: React.FC<SavingsGoalFormProps> = ({ onSubmit }) => {
  const [goalName, setGoalName] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ goalName, targetAmount });
    setGoalName("");
    setTargetAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Goal Name:
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
      </label>
      <label>
        Target Amount:
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(Number(e.target.value))}
        />
      </label>
      <button type="submit">Set Savings Goal</button>
    </form>
  );
};

export default SavingsGoalForm;
