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
            <div className="header-left">
            <p>{props.name}
            </p>
            
    <span onClick={() => handleField(props.id)}className="material-symbols-outlined icon">
delete

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