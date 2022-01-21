import React from 'react';
import {Header} from "./components/Header.jsx";
import {Balance} from "./components/Balance.jsx";
import {IncomeExpenses} from "./components/IncomeExpenses.jsx";
import {TransactionList} from "./components/TransactionList.jsx";
import {AddTransaction} from "./components/AddTransaction.jsx";
import {GlobalProvider} from "./context/GlobalState";
import './App.css';

function App() {
  return (
    <GlobalProvider className="app">
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
