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
  const [selected, setSelected] = useState('');

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
  }

  



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

    return (
      <button
        key={timeSlot.id}
        className={timeSlot[0] === 1 ? 'bg-red-500 border border-2 w-24' : 'border border-2 hover:bg-green-500 bg-gray-500 w-24'}
        onClick={() => handleTimeSlotClick(timeSlot)}
      >
        {formattedStartTime}
      </button>
    );
  })}
</div>


        <button className="border border-2 mt-4" >
          Submit
        </button>
      </div>
    </div>
  );
}
export default App;
