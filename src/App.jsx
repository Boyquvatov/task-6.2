import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [qadam,SetQAdam] = useState(0);
  const [login,setlogin] = useState(false);
  
  const changeLogin = () =>{
    setlogin(!login)
  }

  const [counters,setcounters] = useState([]);
  const Addcounter =()=>{
    counters.push(0)
    setcounters([...counters])
  }
  const updateItem = (item,type) =>{
    if(type == "plus"){
      counters[item] +=1
    }else{
      counters[item] -=1
    }
    setcounters([...counters])
  }

  return (
    <>
    <div className="container">
      <div className="task">
        <h1>Task1</h1>
      <h2>{count} metr</h2>
      <button onClick={()=> setCount((count)=>count+qadam)}>yurish</button>
      <h2>qadam kattaligi {qadam}: <span></span>  metr</h2>
      <button onClick={()=> SetQAdam((qadam) =>qadam +1)}>qadamni kengaytirish</button>
      </div>
      <div className="task">
        <h1>Task2</h1>
      <button onClick={changeLogin}>login</button>
        {
          login ? <h2>Login</h2> : <h2>Welcome</h2>
        }
      </div>
      <div className="task">
        <h1>Task3</h1>
        <button onClick={Addcounter}>Add Counters</button>
        {
          counters?.map((item,index) => {
            return(
              <div key={index}>
                <button onClick={()=>updateItem(index,"plus")}>+</button>
                <span>{item}</span>
                <button onClick={()=>updateItem(index,"minus")}>-</button>
              </div>
            )
           })
        }
      </div>
    </div>
    </>
  )
}

export default App
