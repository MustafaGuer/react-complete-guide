import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./shared/consts/expenses";

// OLDER VERSIONS OF REACT WITHOUT JSX, that happens under the hood when using JSX 
// import React from "react";

const App = () => {
  // return React.createElement('div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }));

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />      
    </div>
  );
}

export default App;
