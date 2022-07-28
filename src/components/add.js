import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';
import './add.css'

const Add = ({handledadd}) => {
    const [addname,setaddname]=useState("");
    const [addmoney,setaddmoney]=useState("");

    const handlenamechange=(event)=>{
        setaddname(event.target.value)
    }
    const handlemoneychange=(event)=>{
        setaddmoney(event.target.value)
    }

    function handleaddclick()
    {
        if(addname.trim().length>0||addmoney.trim().length>0)
        {
            handledadd(addname,addmoney)

            setaddmoney("");
            setaddname("")
        }
    }
   
  return (
    <div className='add'>
        
        <div className="addexpense">
            <div className="addname">
                <input className='ip' value={addname} onChange={handlenamechange} type="text" placeholder='NEW EXPENSE' />
            </div>
            <div  className="addmoney">
                <input  value={addmoney} onChange={handlemoneychange} type="number" placeholder='AMOUNT' />
            </div>
        </div>
        
        <div className='btn'>
            <FaCloudUploadAlt onClick={handleaddclick} />
        </div>
    </div>
  )
}

export default Add