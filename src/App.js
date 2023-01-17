import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { expenses } from "./shared/consts/expenses";


const App = () => {
  // OLDER VERSIONS OF REACT WITHOUT JSX, that happens under the hood when using JSX 
  // return React.createElement('div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }));

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />      
    </div>
  );
}

export default App;
