//import logo from './logo.svg';
//4zjTBnB4G5BYYNW3

import './App.css';
import { useState } from "react";
import timeSlotsData from './timeSlots.json'; // Import the JSON data


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const pass = encodeURIComponent("4zjTBnB4G5BYYNW3");
// const uri = `mongodb+srv://gkommi:${pass}@cluster0.wln3fvb.mongodb.net/?retryWrites=true&w=majority`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



function App() {
  // State variable to store the selected day
  const [selectedDay, setSelectedDay] = useState('0');

  // Function to handle day selection change
  function handleDayChange(event) {
    setSelectedDay(event.target.value);
  }

  // Get the time slots for the selected day from the JSON data
  const selectedDayTimeSlots = timeSlotsData[selectedDay];

  // State variable to store the booking name
  const [booking, setBooking] = useState("Adyant");

  // State variable to store the selected time slot
  const [selected, setSelected] = useState('');

  //one time slot: [state,name]
  const getTimeSlots = 
      [["Monday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
      ["Tuesday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
      ["Wednesday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]]]
  
  
  const[data,setData]=useState(getTimeSlots);




  // Function to handle time slot selection
  function handleTimeSlotClick(timeSlot) {
    // If the time slot is not already selected (state === 0)
    if (timeSlot.state === 0) {
      setSelected(timeSlot.id);
      // Here, you can update the JSON data to mark the time slot as selected by setting state to 1
      // For example: timeSlot.state = 1;
      // Make sure to avoid directly modifying the imported JSON data; use a copy or clone instead
    }
  }

  // let startTime = new Date();
  // startTime.setHours(7, 30, 0, 0); // Set the start time to 8:00 AM

  // function generateTimeSlots(){
  //   startTime.setMinutes(startTime.getMinutes() + 30);
  //   return startTime.toString();

  // }
 

  // JSX for rendering the component
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border border-gray-300 p-4 rounded-md text-center">
        <label className="text-left px-2">Enter your name:</label>
        <input
          type="text"
          value={booking}
          onChange={(e) => setBooking(e.target.value)}
          placeholder="Enter your name"
          className="border border-2 px-2 py-1 mb-4 w-50"
        />
        {/* Select input for day selection */}
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="day-select">Select a day:</label>
            <select
              id="day-select"
              value={selectedDay}
              onChange={handleDayChange}
              className="border border-2 px-2 py-1"
            >
              {/* Options for different days */}
              {data.map((day,index) => (
                <option key={index} value={index}>
                  {day[0] }
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="week-select" className="ml-3">Select a week:</label>
            <select
              id="week-select"
              className="border border-2 px-1 py-1"
            >
              {/* Options for different weeks */}
              <option value="Week1">7/31/23 - 8/4/23</option>
              <option value="Week2">8/7/23 - 8/11/23</option>
              <option value="Week3">8/14/23 - 8/18/23</option>
              <option value="Week4">8/21/23 - 8/25/23</option>
              <option value="Week5">8/28/23 - 9/1/23</option>
            </select>
          </div>
        </div>
        {/* Time slot buttons */}
        <div className="flex flex-col space-y-2">
          {data[selectedDay].map((timeSlot,index) => (
            <button
              key={timeSlot.id}
              className={timeSlot.state === 1 ? 'bg-red-500 border border-2 w-24' : 'border border-2 hover:bg-green-500 bg-gray-500 w-24'}
              disabled={timeSlot.state === 1} // Disable the button if the state is 1 (already selected)
              onClick={() => handleTimeSlotClick(timeSlot)}
            >
              {index}
            </button>
          ))}
        </div>
        <button className="border border-2 mt-4" >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;


// function App() {

//   const [booking,setBooking]=useState(0);
//   const [selected,setSelected] = useState(0);
//   //const [state,setState]=useState(data);
  

//   function handleClick(){
    
//     return([selected, document.getElementById("name").value])
//   }




//   return (
//     <div className="App">
//       <div className="">
//         <input type="text" id = "name" >

//         </input>
//         <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="8am" onClick = {() => setSelected(1)}>
//           8:00 a.m.
//         </button>
//         <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="830am" onClick = {() => setSelected(2)}>
//           8:30 a.m.
//         </button>
//         <button className = {booking===0?"border border-2 hover:bg-green-500 bg-gray-500":"bg-red-500 border border-2"} id="9am" onClick = {() => setSelected(3)}>
//           9:00 a.m.
//         </button>

//         <div>
          
//         </div>
//         <button className = "border border-2" onClick = {handleClick}>Submit</button>
//       </div>
//     </div>
//   );
// }

// export default App;
