import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 294.67,
      date: new Date(2021, 4, 18),
    },
    {
      id: "e2",
      title: "Car insurance 2",
      amount: 234.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car insurance 3",
      amount: 594.67,
      date: new Date(2021, 3, 21),
    },
    {
      id: "e4",
      title: "Car insurance 4",
      amount: 733.12,
      date: new Date(2021, 6, 6),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
