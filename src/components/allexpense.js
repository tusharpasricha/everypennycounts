import React, { useState } from "react";
import "./allexpense.css";
import Eachexpense from "./eachexpense";
import Add from "./add";
import { FaRetweet } from "react-icons/fa";
import { useEffect } from "react";


const Allexpense = () => {
  useEffect(()=>{fetchdata()},[])
  const [expenses, setexpenses] = useState([
    // {
    //   id: nanoid(),
    //   name: "Welcome",
    //   money: "00",
    //   date: "21/07/2002",
    // },
  ]);

  async function addnew(name, money) {
    const datee = new Date();
    const allentry = {
      name: name,
      money: money,
      exdate : datee.toLocaleDateString(),
    };
    const response = await fetch(
      "https://everypennycounts-aa886-default-rtdb.firebaseio.com/entry.json",
      {
        method: "POST",
        body: JSON.stringify(allentry),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const hidata= await response.json()
    console.log(hidata);
    {fetchdata()}
  }
  // const addnew=(name,money)=>{

  //     const date =new Date();
  //     const newexpense={
  //       id:nanoid(),
  //       name:name,
  //       money:money,
  //       date:date.toLocaleDateString()
  //     }
  //     const newexpenses=[...expenses,newexpense];
  //     setexpenses(newexpenses);
  //     console.log(name);
  //   }
  async function fetchdata(){
    console.log("fetching")
    const response = await fetch('https://everypennycounts-aa886-default-rtdb.firebaseio.com/entry.json')
    const indata=await response.json();
    console.log(indata);
    const requireddata=[];
    for(const key in indata){
      requireddata.push({
        id:key,
        name:indata[key].name,
        money:indata[key].money,
        date:indata[key].exdate
      })
    }
    requireddata.reverse();
    console.log(requireddata);
    setexpenses(requireddata)
  }
   
  const deleteexpense = (id) => {
    const newexpenses = expenses.filter((single) => single.id !== id);
    setexpenses(newexpenses);
  };

  return (
    <>
    <div className="refresh">
    <FaRetweet onClick={fetchdata}/>
    </div>
    

    <div className="allexpense">
      
      
      <Add handledadd={addnew} />

      {expenses.map((expenses) => (
        <Eachexpense
          id={expenses.id}
          name={expenses.name}
          money={expenses.money}
          date={expenses.date}
          handleminus={deleteexpense}
          
        />
        
      ))}
    </div>
    </>
  );
};

export default Allexpense;
