import React, { useState } from 'react';
import './App.css';

function App() {
 const[toDo,setToDo]=useState([])
 const[toDos,setToDos]=useState("")
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDos} onChange={(e)=>setToDos([
          e.target.value
        ])} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDo(
          [...toDo,{id:Date.now(),text:toDos,status:false}]
        )} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
        toDo.map((obj)=>{
          return(
            <div className="todo">
            <div className="left">
              <input value={obj.status} onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                setToDo(toDo.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }))
                  
                
              }} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
          )
        }
        )
       }

        {
          toDo.map((obj) => {
            if (obj.status) {
              return (
                <h1>{obj.text}</h1>
              )
            }
            return null
        })
       }
          
      </div>
    </div>
  );
}

export default App;
