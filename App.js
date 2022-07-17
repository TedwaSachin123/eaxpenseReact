import Expenses from "./Components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
let DUMMY_DATA =[
    {
       id:1,
       date: new Date(2021,5,21),
       amount:250,
       title:'school fee'
    },
    {
        id:2,
        date: new Date(2021,5,21),
        amount:20,
        title:'schl fee'
     },
     {
        id:3,
        date: new Date(2021,5,21),
        amount:50,
        title:'hool fee'
     },
     {
        id:4,
        date: new Date(2021,5,21),
        amount:260,
        title:'school'
     }
];

const App=()=>{
    const [expenses, setexpensedata]=useState(DUMMY_DATA);
    
    const saveddata=(event)=>{
        const updateddata= [event, ...expenses];
        setexpensedata(updateddata);

    };

    return(

        <div>
            <NewExpense datasaved={saveddata}/>
            <Expenses item={expenses}/>
        </div>
    )
    
}

export default App;