import React, { ChangeEvent, Component, HTMLInputTypeAttribute } from 'react'
import './Input.scss'
type inputProps ={
    name:string,
    placeholder:string,
    required:boolean,
    value:string,
    id:string,
    handleChangeInput:(a:string,b:string,c:string)=>void|any,
    children:string
}
function Input(props:inputProps){
    const inputChange = (id:string,e:ChangeEvent) =>{

        props.handleChangeInput(id,props.name,(e.target as any).value)
    }
        return(
            <div className='input'>
                <label>{props.children}</label>
                <input type='text' placeholder={props.placeholder}  name={props.name}  required={props.required}  onChange={e => inputChange(props.id,e)}  />
            </div>
        )
}


export default Input