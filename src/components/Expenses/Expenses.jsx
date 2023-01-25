import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // CLEAN WAY IF CONDITIONAL JSX CODE IN SAME COMPONENT 
  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }

  return (
    <li>    
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {/* THE CLEANEST WAY TO SHOW CONDITIONAL IN SAME COMPONENT (Variables up there) */}
        {/* {expensesContent} */}

        {/* UNFILTERED ARRAY (FOR LOOP IN JSX) */}
        {/* {props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}

        {/* FILTER AND MAP ARRAY IN THE JSX CODE */}
        {/* {props.items.filter(item => item.date.getFullYear().toString() === filteredYear).map(filteredItem => (
                    <ExpenseItem key={filteredItem.id} title={filteredItem.title} amount={filteredItem.amount} date={filteredItem.date} />
                ))} */}

        {/* SHOW CONDITIONAL IN LONG WAY */}
        {/* {filteredExpenses.length === 0 ?
                    <p>No expenses found.</p>
                    :
                    filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}

        {/* SHOW CONDITIONAL IN SHORTER WAY */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
      </Card>
    </li>
  );
};

export default Expenses;
