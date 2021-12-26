import React from 'react';
import { Grid, Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Calendar = () => {
  // Here I initalize the array with useState
  const [daysData, setDaysData] = useState([]);
  // Initiate new Date
  const current = new Date();
  // Retrieve current day of the month
  const date = current.getDate();
  // Console log to check if code works properly.
  console.log(date);

  // Here is the port I'm fetching my array from.
  useEffect(() => {
    fetch('http://localhost:5001/chocolates')
      .then((resp) => resp.json())
      .then((data) => setDaysData(data));
  }, []);

  // Console logging is sending back the array with no issues
  console.log(daysData);

  // Intitiate useState for opening Chocolate Day Box
  const [chocolateBox, setOpenChocolateBox] = useState('');

  // Call on post method via axios
  const eatChocolate = async (event) => {
    event.preventDefault();

    // Url where to post
    await axios.post(`http://localhost:5001/eat/chocolate`, {
      // Sending in chocolateBox as value
      day: event.target.value,
    });

    alert("You've now eaten this chocolate!");

    setOpenChocolateBox('');
  };

  // Open up calendar day if today is equal to day in API.
  const [openCalendarBox, setOpenCalendarBox] = useState('');

  // Posting to open calendar box.
  useEffect(async () => {
    const daysDay = daysData.map((day) => day.day);

    console.log(daysDay);

    daysData.forEach(async (day) => {
      console.log(date + 1 <= day.day);

      if (date + 1 <= day.day && day.status != 'open' && day.status != 'eaten') {
        // Url where to post
        await axios.post(`http://localhost:5001/open/chocolate`, {
          day: day.day,
        });
        alert('New day is available to eat!');
      }
    });

    setOpenCalendarBox('');
  }, [daysData]);

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {/* And here I render the box array */}
      {daysData.map((day) => {
        return (
          <Grid item key={day.day}>
            <Button
              disabled={date + 1 <= day.day || day.status != 'open'}
              // onSubmit function called here in Button
              value={day.day}
              onClick={eatChocolate}
              // value to be sent to chocolateBox
              key={day.day}
              sx={{
                color: 'white',
                width: 150,
                height: 150,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              {day.day}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Calendar;
