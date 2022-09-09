import '../App.css'
import React from 'react'
import Item from './Item'
function ItemList({lists,removeItem}) {
  return (
    <ul style={{
            overflow:'hidden',
            overflowY:'scroll',
            position:'absolute',
            top:'470px',
            left:'32%',
            width:'560px',
            height:'160px',
            backgroundColor:'white',
            borderBottomLeftRadius:'6px',
            margin:'0',
            padding:'0',
            zIndex: '2'
    }}>
        {lists.map((list) =>(
            <Item key= {list.id} list={list} removeItem= {removeItem}/>
        ))}
    </ul>
  )
}

export default ItemList