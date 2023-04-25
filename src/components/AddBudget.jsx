import React, {useState} from "react";

const AddBudget=(props)=>{
    const[budgetvalue,setbudgetvalue]=useState(props.budget);
    return(
        <>
           <input 
           required='required' 
           type='number' 
           className="form-control mr-3" 
           id="name" 
           value={budgetvalue} 
           onChange={(event)=>setbudgetvalue(event.target.value)}
        />   
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={()=>props.handleSaveClick(budgetvalue)}>Save</button>  
        </>
    );
};
export default AddBudget;