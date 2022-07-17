import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';
const Expenses=(props)=>{
    return (
        <Card className='expenses'>
        {
            props.item.map(
                x=>(
                    <ExpenseItem
                    dat={x.date}
                    title={x.title}
                    pric={x.amount}/>
                )
            )
        }
        
        </Card>
    );

}

export default Expenses;