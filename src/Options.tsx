import React, { useState,Component, ChangeEvent } from 'react'
import OptionBoxes from './OptionBoxes';
import {v4 as uuidv4} from "uuid"

type optionProps ={
    label:String,
}
function Options(props:optionProps){
    const [option,setOptions]=useState([
            {id:uuidv4(),value:''},
        ] )
    const handleOptions = () => {
        setOptions([...option, { id: uuidv4(),value:'' }])
      }
 
      const deleteOption =(id:string) =>{
        const values  = [...option];
        values.splice(values.findIndex(value => value.id === id), 1);
        setOptions(values);
      }
      const handleChangeInput = (id:string,value:string) => {
        const newInputFields = option.map(i => {
          if(id === i.id) {
            i.value = value
          }
          return i;
        })
        
        setOptions(newInputFields);
      }
    return(    
        <div className='Options'>
            {option.length >=1 ? <label>{props.label} values</label> :''}
            {option.map(o => (
                 <OptionBoxes value={o.value} handleChangeInput={handleChangeInput} name='value' deleteOption={deleteOption}  key={o.id} id={o.id} > Option </OptionBoxes>
            ))}       
              {option.length >=1 ? <a onClick={handleOptions} className='addNew'>Add new Response</a> :''}
     
        </div>
    )
}

export default Options;