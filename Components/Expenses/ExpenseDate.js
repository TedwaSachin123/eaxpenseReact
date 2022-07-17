import './ExpenseDate.css'
import React from 'react';
const ExpenseDate=(xyz)=>{
    const month=xyz.date.toLocaleString('en-US', {month: "long"});
    const year=xyz.date.getFullYear();
    const day=xyz.date.toLocaleString('en-US', {day: "2-digit"});

    return(
        <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
        </div>
    );

}

export default ExpenseDate;