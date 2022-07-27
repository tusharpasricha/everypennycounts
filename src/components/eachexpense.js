import React from 'react'
import './eachexpense.css'
import {FaBitbucket, FaMinus} from 'react-icons/fa'

const Eachexpense = ({id,name,money,date,handleminus}) => {
  
  return (
    <div className='eachexpense'>

            <div className='nav'>
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="data">
              <div className='value'>
            <div className="name">
                {name}
            </div>
           
            <div className="money">
                {money}
            </div>
            </div>

            <div  >
              <FaBitbucket className="minusicon" onClick={()=>handleminus(id)}/>
            </div>

            </div>

           
    </div>
  )
}

export default Eachexpense