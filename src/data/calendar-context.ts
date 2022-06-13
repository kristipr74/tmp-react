import React from "react";

export interface Calendar {
  id: string;
  title: string;
  enrollmentDate: Date;
}

interface Context {
  calendar: Calendar[];
  addCalendar: (title: string, date: Date) => void;
}

const CalendarContext = React.createContext<Context>({
  calendar: [],
  addCalendar: (title: string, date: Date) => {}
});

export default CalendarContext;
