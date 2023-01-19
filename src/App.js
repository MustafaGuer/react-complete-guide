import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { DUMMY_EXPENSES } from "./shared/consts/DUMMY_EXPENSES";


const App = () => {
  // OLDER VERSIONS OF REACT WITHOUT JSX, that happens under the hood when using JSX 
  // return React.createElement('div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }));

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
