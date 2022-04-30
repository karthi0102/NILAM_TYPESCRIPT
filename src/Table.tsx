import React, { Component, FC } from 'react'
import './Table.scss'
type tableProps ={
    data:any[],
    column:any[],
}
const Table =(props:tableProps)=>{
    return(
        <div className='table-container'>
                <table>
                    <thead className='table-heading'>
                        {props.column.map((item) => <TableHead item={item}/> )}
                    </thead>
                    <tbody>
                        {props.data.map((item,index)=> <TableRow item={item} sno={index} column={props.column} />)}
                    </tbody>
                </table>
        </div>
    )
}
type headProps={
    item:any
}
type rowProps={
    item:any,
    sno:any,
    column:any[],
}

const TableHead =(props:headProps) =><th>{props.item.heading}</th>
export default Table
const TableRow = (props:rowProps) => (
    <tr>
      {props.column.map((columnItem, index) => {
        if(columnItem.value.includes("#")){
            return <td>{props.sno+1}</td>
        }
        if(columnItem.value.includes('icon')){
            return <td>  <span className="material-symbols-outlined">visibility</span></td>
        }
  
        return <td>{props.item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )