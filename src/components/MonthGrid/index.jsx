import React from "react";
import { getDaysInMonth, format, startOfMonth, addDays } from "date-fns";

const Weekdays = () => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
  return (
    <div className="weekdays">
      {weekdays.map((weekday) => (
        <div key={weekday} className="weekday">
          {weekday}
        </div>
      ))}
    </div>
  );
};

const MonthGrid = ({ events, onEventClick }) => {
  const months = Array.from({ length: 6 }, (_, i) => {
    const now = new Date();
    now.setMonth(now.getMonth() + i);
    return now;
  });

  return (
    <div className="month-grid">
      {months.map((month) => {
        const startDay = startOfMonth(month).getDay(); 
        const emptyDays = startDay === 0 ? 6 : startDay - 1; 
        return (
          <div key={month} className="month">
            <h3>{format(month, "MMMM yyyy")}</h3>
            <Weekdays /> 
            <div className="days">
              
              {Array.from({ length: emptyDays }).map((_, index) => (
                <div key={`empty-${index}`} className="empty-day"></div>
              ))}
              
              {Array.from({ length: getDaysInMonth(month) }, (_, dayIndex) => {
                const day = new Date(
                  month.getFullYear(),
                  month.getMonth(),
                  dayIndex + 1
                );
                const dayEvents = events.filter(
                  (event) =>
                    new Date(event.date).toDateString() === day.toDateString()
                );

                return (
                  <div
                    key={dayIndex}
                    className={`day ${dayEvents.length > 0 ? "has-events" : ""}`}
                    onClick={() =>
                      dayEvents.length > 0 && onEventClick(dayEvents)
                    }
                  >
                    {day.getDate()}
                    <div className="event-dots">
                      {dayEvents.map((event, index) => (
                        <div
                          key={index}
                          className={`event-dot ${
                            event.type === "Зустріч з експертом"
                              ? "red"
                              : event.type === "Конференція"
                              ? "blue"
                              : event.type === "Питання-відповідь"
                              ? "green"
                              : "yellow"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthGrid;
