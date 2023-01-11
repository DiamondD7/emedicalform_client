import React from "react";
import Calendar from "react-calendar";

import "../../styles/calendarstyles.css";
import "react-calendar/dist/Calendar.css";
const CalendarViews = () => {
  return (
    <div>
      <div className="cal">
        <p>Date</p>
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarViews;
