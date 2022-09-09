import { useState } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

function Form({addItem,total}) {
  const initialObject = { id:'', 
                          amount:'',
                          date:null,
                          type:'Income',
                          cagetory:'Category',
                        }
  const [list,setlist] = useState(initialObject)
  
  const handleInputOnchange = (e) => {
    const { name, value } = e.target;
    setlist({
      ...list,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({...list , id: uuidv4()})
    setlist({...list, amount:'',date:null})
  }
  return (
    <div className= 'mainForm'>
  <h2 style={{margin:'16px'}}>Expense Tracker</h2>
  <h2 style={{textAlign:'center', margin:'16px'}}>Total Balance {total} $</h2>
  <p style={{
            margin:'16px',
            borderBottom:'1px solid grey'
            }}
      >Add Your Statement</p>
<div className='threeDots' style={{textAlign:'center',margin:'16px'}}>...</div>

<div style={{
  display:'flex',
  justifyContent:'space-around',
  margin:'16px 0px'
}}>
<select className="formSelect" aria-label="Default select example" name='type' onChange={handleInputOnchange}
        style={{
          width:'200px',
          height:'32px',
          fontSize:'16px'
        }}
        >
  <option value="Income">Income</option>
  <option value="Expense">Expense</option>
</select>

<select className="formSelect" aria-label="Default select example" name='cagetory' onChange={handleInputOnchange}
        style={{
          width:'200px',
          height:'32px',
          fontSize:'16px'
          
        }}
      >
  <option selected>Cagetory</option>
  <option value="Business">Business</option>
  <option value="Investments">Investments</option>
  <option value="Extra income">Extra income</option>
  <option value="Gifts">Gifts</option>
  <option value="Salary">Salary</option>
  <option value="Saving">Saving</option>
  <option value="Deposits">Deposits</option>
</select>
</div>



<div>
<form>
  <input style={{
               margin:'12px 40px',
               width:'200px',
               height:'32px'
        }}
             onChange={handleInputOnchange}
             type = {`number`}
             name = {`amount`}
             value = {list.amount}
         />
 
 <input  style={{
               margin:'12px 40px',
               width:'200px',
               height:'32px'
        }}
         onChange={handleInputOnchange}
         name='date'
         type={`date`}
         value={list.date !== null ? list.date : ""}
         />  
</form>
<button  className='btnCreate'
      style={{
          borderRadius:'6px',
          border:'1px solid blue',
          color:'blue',
          height:'32px',
          width:'80%',
          margin:'12px 52px',
      }}  
      type='submit' onClick={handleSubmit}>Create</button>
</div>

    </div>
  )
}

export default Form