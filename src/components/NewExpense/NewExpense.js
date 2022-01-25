import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const cancelNewExpense = () => {
    setIsEditing(false);
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button type="button" onClick={isEditingHandler}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelNewExpense}
        />
      </div>
    );
  }
};

export default NewExpense;
