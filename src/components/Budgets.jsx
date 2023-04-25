import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budgets=()=>{
    const {budget}=useContext(AppContext);
    return(
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
        </div>
    );
};
export default Budgets;