import React, { ChangeEvent, Component } from 'react'
import './OptionBoxex.scss'
type OptionBoxexProps ={
  value:string,
  name:string,
  key:string,
  id:string,
  handleChangeInput:(a:string,b:string)=>void,
  deleteOption:any,
  children:string
}
function OptionBoxes(props:OptionBoxexProps){
   const deleteOptionBox =() =>{
       props.deleteOption(props.id)
   }
   const changeInput = (id:string,e:ChangeEvent) =>{
                    props.handleChangeInput(id, (e.target as any).value)
   }  
     return (
        <div className='OptionBoxex'>
           
                        <input type="text" placeholder={props.children} name='value' onChange={e =>changeInput(props.id,e)}/>
           <span onClick={deleteOptionBox}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5     4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          </span>
         
        </div>
    )
}

export default OptionBoxes