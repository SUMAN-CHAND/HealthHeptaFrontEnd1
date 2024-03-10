import React, { useState } from 'react';
const DateSelectionComponent = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const handleDaySelection = (event) => {
    setSelectedDay(event.target.value);
    // Calculate and set the available dates based on the selected day
    setAvailableDates(calculateDates(event.target.value));
  };

  const calculateDates = (selectedDay) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const selectedDayIndex = daysOfWeek.indexOf(selectedDay);

    const dates = [];

    for (let i = 0; i < 4; i++) { // Get dates for the next 4 weeks
      let date = new Date(currentYear, currentMonth, 1); // Start from the 1st day of the current month

      while (date.getDay() !== selectedDayIndex) { // Find the selected day of the week
        date.setDate(date.getDate() + 1); // Move to the next day
      }

      // If the selected day is before today, move to the next occurrence in the next month
      if (date < currentDate) {
        date = new Date(currentYear, currentMonth + 1, 1);
        while (date.getDay() !== selectedDayIndex) {
          date.setDate(date.getDate() + 1);
        }
      }

      dates.push(date.toDateString()); // Store the date as a string

      // Move to the next occurrence in the next week
      date.setDate(date.getDate() + 7);
    }
    return dates;
  };

  return (
    <div>
      <label>Select a day of the week:</label>
      <select value={selectedDay} onChange={handleDaySelection}>
        <option value="">Select</option>
        {daysOfWeek.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <div>
        {availableDates.map((date, index) => (
          <p key={index}>{date}</p>
        ))}
      </div>
    </div>
  );
};

export default DateSelectionComponent;