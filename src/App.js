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
  const [selectedDay, setSelectedDay] = useState(0);

  // Function to handle day selection change
  function handleDayChange(event) {
    setSelectedDay(parseInt(event.target.value));
  }

  // Get the time slots for the selected day from the JSON data
  const selectedDayTimeSlots = timeSlotsData[selectedDay];

  // State variable to store the booking name
  const [booking, setBooking] = useState("");

  // State variable to store the selected time slot
  const [selected, setSelected] = useState(0);

  //const [, forceUpdate] = useReducer(x => x + 1, 0);


  //one time slot: [state,name]
  
  const getTimeSlots = 
  [
    ["Monday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    ["Tuesday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],
    ["Wednesday",[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]]
  ];
  
  const[data,setData]=useState(getTimeSlots);



  // Function to handle time slot selection
  function handleTimeSlotClick(timeSlot) {
     // Toggle the state of the selected time slot (0 to 1, or 1 to 0)
     const newSelectedState = timeSlot[0] === 0 ? 1 : 0;
      // Clone the data array to avoid directly modifying the original JSON data
      const newData = [...data];
      // Set the state of the selected time slot to 1 (selected)
      const index = newData[selectedDay].indexOf(timeSlot);
      newData[selectedDay][index][0] = newSelectedState;
      // Update the data state with the new data array
      setData(newData);
      // Set the selected time slot index
      setSelected(index);
      console.log(selected);
      console.log(data[selectedDay][selected]);
  }

  function handleSubmit() {
    console.log(selected);
  
    // Update the name in the selected time slot based on the input value
    const newName = document.getElementById("Name").value;
    const newData = [...data];
    newData[selectedDay][selected][1] = newName;
    newData[selectedDay][selected][0] = 2;
  
    // Update the state with the new data array
    setData(newData, () => {
      // This callback will be executed after the state is updated and the component is re-rendered.
      console.log(data[selectedDay][selected]); // Log the updated state
    });
  }
  


  function renderIcon(){
    console.log("came here")
    return(
      <div>Function called</div>
    )
  
  // render();

  //  return (
  //      <div className="patient-container">

  //      {this.renderIcon}      

  //     </div>
  //  );
 }
  

  



  // JSX for rendering the component
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
     <h1 className="text-6xl font-bold text-center text-blue-700 mt-8 mb-4">
  Brain<span className="text-pink-500">Boost</span>
</h1>
      <div className="border border-gray-300 p-4 rounded-md text-center mt-3 w-30">
        <label className="text-left px-2">Enter your name:</label>
        <input
          id='Name'
          type="text"
          value={booking}
          onChange={(e) => setBooking(e.target.value)}
          placeholder="Enter your name"
          className="border border-2 border-gray-300 shadow-md px-2 py-1 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
        />
        {/* Select input for day selection */}
        <div className="flex items-center mb-4 space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="day-select">Select a day:</label>
            <select
              id="day-select"
              value={selectedDay}
              onChange={handleDayChange}
              className="border border-2 border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border border-2 px-1 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

<div className="flex flex-col space-y-2 rounded-md">
  {data[selectedDay].map((timeSlot, index) => {
    // Calculate time based on the index (30 minutes interval)
    const startTime = new Date(0);
    startTime.setHours(8 + Math.floor(index / 2), (index % 2) * 30, 0);

    // Check if the time is past 5:30 pm (17:30), and if so, stop rendering
    if (startTime.getHours() >= 18 && startTime.getMinutes() >= 0) {
      return null;
    }

    // Format the time to display in 12-hour clock format
    const formattedStartTime = startTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    
    const displayIndex = index + 1;

     return (
      <button
        key={timeSlot.id}
        className={timeSlot[0] === 1 ? 'bg-green-500 border border-2 w-24' :
        timeSlot[0] === 0 ? 'border border-2 hover:bg-green-500 bg-gray-500 w-24':
        timeSlot[0] === 2 
        ? 'pointer-events-none disabled cursor-not-allowed bg-red-500 border border-2 w-24 text-white' // Red background with white text and disabled state
        : "text-white" // Default white text color}
       }  onClick={() => handleTimeSlotClick(timeSlot)}
      >
        {formattedStartTime} {timeSlot[1]}
      </button>
    );
  })}
</div>
        <button 
         className="border border-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md" onClick = {() => { handleSubmit();} } >
          Submit
        </button>
      </div>
    </div>
  );
}
export default App;
