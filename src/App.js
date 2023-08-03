import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [booking, setBooking] = useState(0);
  const [selected, setSelected] = useState('');
  const [selectedDay, setSelectedDay] = useState('Monday');

  function generateTimeSlots(selectedDate) {
    const dateObj = new Date(selectedDate);
    const selectedHour = dateObj.getHours();
    const selectedMinute = dateObj.getMinutes();

    const startTime = 8;
    const endTime = 17; // 5:00 p.m.
    const timeSlots = [];

    for (let hour = startTime; hour <= endTime; hour++) {
      let startMinute = hour === selectedHour ? (selectedMinute === 0 ? 30 : 0) : 0;

      for (let minute = startMinute; minute < 60; minute += 30) {
        // Format time slots in AM/PM format
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        timeSlots.push(`${displayHour}:${minute.toString().padStart(2, '0')} ${period}`);
      }
    }

    return timeSlots;
  }

  function handleSubmit() {
    console.log(selected, booking);
  }

  function handleDayChange(event) {
    setSelectedDay(event.target.value);
    setSelected('');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border border-gray-300 p-4 rounded-md text-center">
        <input
          type="text"
          value={booking}
          onChange={(e) => setBooking(e.target.value)}
          placeholder="Enter your name"
          className="border border-2 px-2 py-1 mb-4 w-40"
        />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="day-select">Select a day:</label>
            <select
              id="day-select"
              value={selectedDay}
              onChange={handleDayChange}
              className="border border-2 px-2 py-1"
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </div>
          <button className="border border-2">Switch Day</button>
        </div>
        <div className="flex flex-col space-y-2">
          {generateTimeSlots(selected).map((timeSlot, index) => (
            <button
              key={index}
              className={selected === timeSlot ? 'bg-red-500 border border-2 w-24' : 'border border-2 hover:bg-green-500 bg-gray-500 w-24'}
              onClick={() => setSelected(timeSlot)}
            >
              {timeSlot}
            </button>
          ))}
        </div>
        <button className="border border-2 mt-4" onClick={handleSubmit}>
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
