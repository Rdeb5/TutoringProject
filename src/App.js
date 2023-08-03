import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function App() {

  const [booking,setBooking]=useState(0);
  const [selected,setSelected] = useState(0);
  //const [state,setState]=useState(data);
  

  function handleClick(){
    
    return([selected, document.getElementById("name").value])
  }




  return (
    <div className="App">
      <div className="">
        <input type="text" id = "name" >

        </input>
        <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="8am" onClick = {() => setSelected(1)}>
          8:00 a.m.
        </button>
        <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="830am" onClick = {() => setSelected(2)}>
          8:30 a.m.
        </button>
        <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="9am" onClick = {() => setSelected(3)}>
          9:00 a.m.
        </button>

        <div>
          
        </div>
        <button className = "border border-2" onClick = {handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;
