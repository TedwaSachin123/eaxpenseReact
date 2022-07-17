import './Expenseform.css';
import React,{useState} from 'react';


const Expenseform= (props)=>{

    const [enteredtitle,setentertitle]=useState('');
    const [enteredamount,setenteramount]=useState('');
    const [entereddate,setenterdate]=useState('');

    const titlechangehandler=(event)=>{
        setentertitle(event.target.value);
    };
    const amountchangehandler=(event)=>{
        setenteramount(event.target.value);
    };
    const datechangehandler=(event)=>{
        setenterdate(event.target.value);
    };

    const submithandler=(event)=>{
        event.preventDefault(); //stop reloading the page

        const expenseData={
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        }

        props.saveexpensedate(expenseData);

        setenteramount("");
        setentertitle("");
        setenterdate("");

    };
    return(
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titlechangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountchangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={entereddate} onChange={datechangehandler}/>
                </div>

            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default Expenseform;