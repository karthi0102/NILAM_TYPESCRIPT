import React, { useState,Component, ChangeEvent } from 'react'
import Header from './Header'
import Input from './Input'
import Options from './Options'
import Dropdown from './Dropdown'
import './Landform.scss'
import {v4 as uuidv4} from "uuid"
function LandForm(){
    
    const [field,setField]=useState([{
       id:uuidv4(),name:'',farmer:'',dis:true,opt:''
    }
    ])
    const setStateOfParent =(id:string,optValue:string) =>{
        const newInputFields = field.map(i => {
            if(id === i.id) {
                i.opt=optValue
            }
            return i;
          })
          
          setField(newInputFields);
      }
      const setDis =(id:string|number) =>{
        const newInputFields = field.map(i => {
            if(id === i.id) {
              i.dis=!(i.dis)
            }
            return i;
          })
          
          setField(newInputFields);
      }
      const handleSubmit =() =>{
          console.log('submiited')
      }
    const deleteField =(id:string|number) =>{
       
            const values  = [...field];
            values.splice(values.findIndex(value => value.id === id), 1);
            setField(values);
          
        
    }
      const handleChangeInput = (id:string,targetName:string,targetValue:string) => {
        const newInputFields = field.map(i => {
          if(id === i.id) {
          if(targetName=='name'){
            i['name']=targetValue
          }else{
            i['farmer']=targetValue
          }
           
          }
          return i;
        })
        
        setField(newInputFields);
      }
    
      const handleAddFields = () => {
        setField([...field, { id: uuidv4(),  name: '', farmer: '',dis:true,opt:'' }])
      }
    
    let option=['select','CheckBox','Dropdown','Free Text','Number']

    
    return(

 <div className='LandForm'>
        
            <h1 className='heading'>LAND DETAILS FORM</h1>
        {field.map(f => (
            <div key={f.id}>
            <Header name="Field" deleteField={deleteField} key={f.id} id={f.id} setDis={setDis} value={f.dis} />
            {f.dis && 
             <div className='fieldForm'>
                  <Input 
                  name="name" 
                  placeholder='First name'
                   required={true} 
                   value={f.name} 
                   id={f.id}
                   handleChangeInput={handleChangeInput}
                
                   >
                      placeholder
                  </Input>

                  <Input
                    name="farmer"
                   placeholder='Name of the farmer'
                    required={true} 
                  id={f.id}
                    value={f.farmer}
                   handleChangeInput={handleChangeInput}
                   >
                     Hint Text
                  </Input>
    
                  <Dropdown key={f.id} id={f.id} setStateOfParent = {setStateOfParent}  options={option}  name='Response' >Response Type</Dropdown>
                  {(f.opt=='CheckBox' || f.opt=='Dropdown') && <Options label={f.opt} />
                  
                  }
                 
              </div>
}
        </div>
        ))}
            


<hr></hr>

        <a onClick={handleAddFields} className='addNew'>Add new 
        Field</a>

        <button onClick={handleSubmit} className='submit' >SAVE FORM</button>
        </div>
        
    )
}


export default LandForm