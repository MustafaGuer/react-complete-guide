import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} >>> UNFILTERED ARRAY <<< */}

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
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
