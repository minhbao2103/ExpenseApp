import React from 'react'
import '../App.css'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
function Item({list,removeItem}) {
  const handleRemove = () => {
    removeItem(list.id)
  }
  return (
    <div className='liHover'
         style={{
                margin:'8px 0px',
                width:'560px',
                display:'flex',
                listStyleType:'none',
                justifyContent:'space-around',
                lineHeight:'40px'
                }}>
                
               
     { list.type === 'Income' 
     ?<li><img style={{width:'24px' , height:'24px', margin:'0px 8px'}} src='./image/income.png' alt='hinh'/></li> 
     : <li><img style={{width:'24px' , height:'24px', margin:'0px 8px'}} src='./image/expense.png' alt='hinh'/></li> } 

    <li style={{width:'250px', marginLeft:'24px',height:'40px'}}>{list.amount} {<RiMoneyDollarCircleLine style={{width:'24px', height:'24px'}}/>}</li>
    <li style={{width:'180px',height:'40px'}}>{list.date}</li>
    <li style={{width:'50px',height:'40px'}}><RiDeleteBack2Fill onClick={handleRemove} style={{width:'24px', height:'24px'}}/></li>
</div>
  )
}

export default Item