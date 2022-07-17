import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem=(xyz)=>{ 

    // const [newtitle,setnewTitle] =useState("");
    // const [title,setTitle] =useState(xyz.title); //return arr which include(var and function )

    // const clickhandler=()=>{
    //     setTitle(newtitle);
    // };

    // const changehandler=(event)=>{
    //     setnewTitle(event.target.value);
    // };

    return(
        <Card className='expense-item'>
            <ExpenseDate date={xyz.dat}/>
            <div className='expense-itme__description'>
                <h2>{xyz.title}</h2>
            </div>
            <div className='expense-item__price'>${xyz.pric}</div>
            {/* <input type="text" value={newtitle} onChange={changehandler}/>
            <button onClick={clickhandler}>Change button</button> */}
        </Card>
       
    );

}

export default ExpenseItem;
