
const fs = require('fs');

const express = require('express');

const app = express();

const sqlite3 = require('sqlite3').verbose();

const cors = require('cors');

 

// Create a new database or connect to an existing one

const db = new sqlite3.Database('time_slots.db', (err) => {

  if (err) {

    console.error('Error opening database:', err.message);

  } else {

    console.log('Connected to the SQLite database.');

  }

});

 

// Create the time_slots table if it doesn't exist

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS time_slots (

    id TEXT PRIMARY KEY,

    day TEXT NOT NULL,

    timeSlotId TEXT NOT NULL,

    state INTEGER NOT NULL,

    name TEXT NOT NULL

  )`);

 

  // Read the JSON data from the file

  const timeSlotsData =

    {

        "Monday": [

          {"id": "8:00", "state": 1, "name": ""},

          {"id": "8:30", "state": 0, "name": ""},

          {"id": "9:00", "state": 0, "name": ""},

          {"id": "9:30", "state": 1, "name": ""},

          {"id": "10:00", "state": 0, "name": ""},

          {"id": "10:30", "state": 0, "name": ""},

          {"id": "11:00", "state": 0, "name": ""},

          {"id": "11:30", "state": 1, "name": ""},

          {"id": "12:00", "state": 0, "name": ""},

          {"id": "12:30", "state": 0, "name": ""},

          {"id": "1:00", "state": 0, "name": ""},

          {"id": "1:30", "state": 0, "name": ""},

          {"id": "2:00", "state": 0, "name": ""},

          {"id": "2:30", "state": 0, "name": ""},      

          {"id": "3:00", "state": 0, "name": ""},

          {"id": "3:30", "state": 0, "name": ""},

          {"id": "4:00", "state": 0, "name": ""},

          {"id": "4:30", "state": 0, "name": ""},      

          {"id": "5:00", "state": 0, "name": ""},

          {"id": "5:30", "state": 0, "name": ""}

        ],

        "Tuesday": [

            {"id": "8:00", "state": 0, "name": ""},

            {"id": "8:30", "state": 0, "name": ""},

            {"id": "9:00", "state": 0, "name": ""},

            {"id": "9:30", "state": 0, "name": ""},

            {"id": "10:00", "state": 0, "name": ""},

            {"id": "10:30", "state": 1, "name": ""},

            {"id": "11:00", "state": 0, "name": ""},

            {"id": "11:30", "state": 0, "name": ""},

            {"id": "12:00", "state": 0, "name": ""},

            {"id": "12:30", "state": 0, "name": ""},

            {"id": "1:00", "state": 0, "name": ""},

            {"id": "1:30", "state": 0, "name": ""},

            {"id": "2:00", "state": 0, "name": ""},

            {"id": "2:30", "state": 0, "name": ""},      

            {"id": "3:00", "state": 0, "name": ""},

            {"id": "3:30", "state": 0, "name": ""},

            {"id": "4:00", "state": 0, "name": ""},

            {"id": "4:30", "state": 0, "name": ""},      

            {"id": "5:00", "state": 0, "name": ""},

            {"id": "5:30", "state": 0, "name": ""}

        ],

        "Wednesday": [

            {"id": "8:00", "state": 0, "name": ""},

            {"id": "8:30", "state": 0, "name": ""},

            {"id": "9:00", "state": 0, "name": ""},

            {"id": "9:30", "state": 0, "name": ""},

            {"id": "10:00", "state": 0, "name": ""},

            {"id": "10:30", "state": 0, "name": ""},

            {"id": "11:00", "state": 0, "name": ""},

            {"id": "11:30", "state": 0, "name": ""},

            {"id": "12:00", "state": 0, "name": ""},

            {"id": "12:30", "state": 0, "name": ""},

            {"id": "1:00", "state": 0, "name": ""},

            {"id": "1:30", "state": 0, "name": ""},

            {"id": "2:00", "state": 0, "name": ""},

            {"id": "2:30", "state": 0, "name": ""},      

            {"id": "3:00", "state": 0, "name": ""},

            {"id": "3:30", "state": 0, "name": ""},

            {"id": "4:00", "state": 0, "name": ""},

            {"id": "4:30", "state": 0, "name": ""},      

            {"id": "5:00", "state": 0, "name": ""},

            {"id": "5:30", "state": 0, "name": ""}

        ],

        "Thursday": [

            {"id": "8:00", "state": 0, "name": ""},

            {"id": "8:30", "state": 0, "name": ""},

            {"id": "9:00", "state": 0, "name": ""},

            {"id": "9:30", "state": 0, "name": ""},

            {"id": "10:00", "state": 0, "name": ""},

            {"id": "10:30", "state": 0, "name": ""},

            {"id": "11:00", "state": 1, "name": ""},

            {"id": "11:30", "state": 0, "name": ""},

            {"id": "12:00", "state": 0, "name": ""},

            {"id": "12:30", "state": 0, "name": ""},

            {"id": "1:00", "state": 0, "name": ""},

            {"id": "1:30", "state": 0, "name": ""},

            {"id": "2:00", "state": 0, "name": ""},

            {"id": "2:30", "state": 0, "name": ""},      

            {"id": "3:00", "state": 0, "name": ""},

            {"id": "3:30", "state": 0, "name": ""},

            {"id": "4:00", "state": 0, "name": ""},

            {"id": "4:30", "state": 0, "name": ""},      

            {"id": "5:00", "state": 0, "name": ""},

            {"id": "5:30", "state": 0, "name": ""}

        ],

        "Friday": [

            {"id": "8:00", "state": 0, "name": ""},

            {"id": "8:30", "state": 0, "name": ""},

            {"id": "9:00", "state": 0, "name": ""},

            {"id": "9:30", "state": 0, "name": ""},

            {"id": "10:00", "state": 0, "name": ""},

            {"id": "10:30", "state": 0, "name": ""},

            {"id": "11:00", "state": 0, "name": ""},

            {"id": "11:30", "state": 0, "name": ""},

            {"id": "12:00", "state": 0, "name": ""},

            {"id": "12:30", "state": 0, "name": ""},

            {"id": "1:00", "state": 0, "name": ""},

            {"id": "1:30", "state": 0, "name": ""},

            {"id": "2:00", "state": 0, "name": ""},

            {"id": "2:30", "state": 0, "name": ""},      

            {"id": "3:00", "state": 0, "name": ""},

            {"id": "3:30", "state": 0, "name": ""},

            {"id": "4:00", "state": 0, "name": ""},

            {"id": "4:30", "state": 0, "name": ""},      

            {"id": "5:00", "state": 0, "name": ""},

            {"id": "5:30", "state": 0, "name": ""}

        ]

    };

 

  const days = Object.keys(timeSlotsData);

  days.forEach((day) => {

    timeSlotsData[day].forEach((timeSlot) => {

      db.run(

        'INSERT INTO time_slots (day, timeSlotId, state, name) VALUES (?, ?, ?, ?)',

        [day, timeSlot.id, timeSlot.state, timeSlot.name],

        (err) => {

          if (err) {

            console.error('Error inserting data:', err.message);

          }

        }

      );

    });

  });

});

  // Endpoint for fetching time slots data
  app.get('/api/timeSlots', (req, res) => {
    db.all('SELECT * FROM time_slots', (err, rows) => {
      if (err) {
        console.error('Error fetching time slots:', err.message);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(rows);
      }
    });
  });
  
  // Endpoint for updating a time slot
  app.post('/api/timeSlots/:id', (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
  
    db.run('UPDATE time_slots SET state = ? WHERE id = ?', [state, id], function (err) {
      if (err) {
        console.error('Error updating time slot:', err.message);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Time slot updated successfully' });
      }
    });
  });

 

//app.use(cors());

 

// ... Define other API endpoints and server code ...

 

// Close the database connection when the app is terminated

process.on('SIGINT', () => {

  db.close((err) => {

    if (err) {

      console.error('Error closing database:', err.message);

    } else {

      console.log('Database connection closed.');

    }

    process.exit(0);

  });

});

 

// Start the server

const PORT = 3001;

app.listen(PORT, () => {

  console.log(`Server started on port ${PORT}`);

});