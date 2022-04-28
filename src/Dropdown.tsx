import React, {useState, Component, ChangeEvent, ReactEventHandler } from 'react'
import './Dropdown.scss'
type dropdownProps={
    key:string,
    id:string,
    setStateOfParent:(a:string,e:string)=>any,
    options:string[],
    name:string,
    children:string,
}
function Dropdown(props:dropdownProps){
    const handleChange =(e:ChangeEvent) =>{
        props.setStateOfParent(props.id,(e.target as any).value);
    }
    
    return (
        <div className='dropdown'>
            <label >{props.children}</label>
            <select  onChange={handleChange} name={props.name}  >
            {props.options.map((opt)=>{
                         return <option value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}
export default Dropdown