import React, { useState } from 'react'
import './allexpense.css'
import Eachexpense from './eachexpense'
import {nanoid}from 'nanoid'
import Add from './add'



const Allexpense = () => {
    

    const [expenses,setexpenses]=useState([{
        id:nanoid(),
        name:"shos",
        money:"5000",
        date:'21/07/2002'
    },
    {
        id:nanoid(),
        name:"shirt",
        money:"5000",
        date:'21/07/2002'
    },
    {
        id:nanoid(),
        name:"jeans",
        money:"5000",
        date:'21/07/2002'
    },
    {
        id:nanoid(),
        name:"jeans",
        money:"5000",
        date:'21/07/2002'
    }
])
const addnew=(name,money)=>{
    const date =new Date();
    const newexpense={
      id:nanoid(),
      name:name,
      money:money,
      date:date.toLocaleDateString()
    }
    const newexpenses=[...expenses,newexpense];
    setexpenses(newexpenses);
    console.log(name);
  }
  const deleteexpense=(id)=>{
      const newexpenses=expenses.filter((single)=>single.id!==id);
      setexpenses(newexpenses)
  }
  



  return (
    <div className='allexpense'>
        
        <Add handledadd={addnew}/>
      
        {expenses.map((expenses)=>(
       <Eachexpense 
        id={expenses.id} name={expenses.name} money={expenses.money} date={expenses.date} handleminus={deleteexpense}/>
        ))}

    </div>
  )
}

export default Allexpense