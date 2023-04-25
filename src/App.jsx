import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budgets from './components/Budgets';
import Remaining from "./components/Remaining";
import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App=()=>{
    return(
        <AppProvider>
        <div className="container">
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budgets />
                </div>
                <div className="col-sm">
                    <Remaining />
                </div>
                <div className="col-sm">
                    <Expense />
                </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseList />
                </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <AddExpenseForm />
                </div>
            </div>
        </div>
       </AppProvider> 
    );
};

export default App;