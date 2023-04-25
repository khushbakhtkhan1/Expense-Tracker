import React, { useContext, useState } from "react";
import AddBudget from "./AddBudget";
import ViewBudget from "./ViewBudget";
import { AppContext } from "../context/AppContext";

const Budgets=()=>{
    const {budget,dispatch}=useContext(AppContext);
    const [isEditing,setIsEditing]=useState(false);
    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};
    return(
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<AddBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
    );
};
export default Budgets;