import React, { useState } from "react";
import CalendarResults, { Calendar } from "./calendar-context";

const CalendarContentProvider: React.FC = (props) => {
  const [calendar, setCalendar] = useState<Calendar[]>([
    {
      id: "1voor",
      title: "Individuaalne",
      enrollmentDate: new Date(),
    },
    {
      id: "2voor",
      title: "Paarikas",
      enrollmentDate: new Date(),
    },
  ]);

  const addCalendar = (title: string, date: Date) => {
    const newCalendar: Calendar = {
      id: Math.random().toString(),
      title,
      enrollmentDate: date,
    };

    setCalendar((curCalendar) => {
      return curCalendar.concat(newCalendar);
    });
  };

  return (
    <CalendarResults.Provider
      value={{
        calendar: calendar,
        addCalendar: addCalendar,
      }}
    >
      {props.children}
    </CalendarResults.Provider>
  );
};

export default CalendarContentProvider;
