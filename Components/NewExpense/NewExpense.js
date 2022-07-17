import React from "react";
import './NewExpense.css'
import Expenseform from "./Expenseform";
const NewExpense=(props)=>{
    const saveexpensedatafunction=(datasave)=>{
        const datsavewithID={
            ...datasave,
            ID: Math.random().toString()
        };
        props.datasaved(datsavewithID);
    };
    return(
        <div className="new-expense">
            <Expenseform saveexpensedate={saveexpensedatafunction}/>
        </div>

    );
}

export default NewExpense;