import axios from "axios";

const BASE_URL = "http://URL";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBudgets = async () => {
  try {
    const response = await api.get("/budgets");
    return response.data;
  } catch (error) {
    console.error("Error fetching budgets:", error);
    throw error;
  }
};

export const addBudget = async (budgetData: {
  category: string;
  amount: number;
}) => {
  try {
    const response = await api.post("/budgets", budgetData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error adding budget:", error);
    throw error;
  }
};
