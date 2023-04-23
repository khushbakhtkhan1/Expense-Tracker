import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budgets from './components/Budgets';
import Remaining from "./components/Remaining";
import Expense from "./components/Expense";


const App=()=>{
    return(
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
        </div>
    );
};

export default App;