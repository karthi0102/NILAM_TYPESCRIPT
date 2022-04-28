import React, { Component } from 'react'
import './Header.scss'
type headerProps= {
    name:string,
    deleteField:any,
    key:string,
    id:string,
    setDis:any,
    value:boolean,
    
}
function Header(props:headerProps){
    const handleChange = (id:string) =>{
      props.setDis(id)
    }
    const handleField =(id:string) =>{
        props.deleteField(id)
    }
    return(
        <div className='header'>
            <div>
            <p>{props.name}</p>
            <span onClick={() => handleField(props.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path className='delete' strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    </span>
    </div>
<div onClick={
    ()=>handleChange(props.id)}>
   
    <svg className="chever" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
  </svg>
  

</div>
        </div>
    )
}

export default Header;