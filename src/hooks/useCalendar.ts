import {
  addMonths,
  eachDayOfInterval,
  getMonth,
  getYear,
  startOfWeek,
  subMonths,
  subDays,
  addDays,
  lastDayOfWeek,
} from 'date-fns';
import { useState } from 'react';

const useCalendar = (): CalendarProps => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = () => {
    return new Date(getYear(currentDate), getMonth(currentDate), 1);
  };

  const lastDayOfMonth = () => {
    return new Date(getYear(currentDate), getMonth(currentDate) + 1, 0);
  };

  const prevMonthDates = () => {
    return eachDayOfInterval({
      start: startOfWeek(firstDayOfMonth()),
      end: subDays(firstDayOfMonth(), 1),
    });
  };

  const currMonthDates = () => {
    return eachDayOfInterval({
      start: firstDayOfMonth(),
      end: lastDayOfMonth(),
    });
  };

  const nextMonthDates = () => {
    return eachDayOfInterval({
      start: addDays(lastDayOfMonth(), 1),
      end: lastDayOfWeek(lastDayOfMonth()),
    });
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(new Date(currentDate), 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(new Date(currentDate), 1));
  };

  return {
    currentDate,
    firstDayOfMonth,
    lastDayOfMonth,
    prevMonthDates,
    currMonthDates,
    nextMonthDates,
    prevMonth,
    nextMonth,
  };
};

interface CalendarProps {
  currentDate: Date;
  firstDayOfMonth: () => Date;
  lastDayOfMonth: () => Date;
  prevMonthDates: () => Date[];
  currMonthDates: () => Date[];
  nextMonthDates: () => Date[];
  prevMonth: () => void;
  nextMonth: () => void;
}

export default useCalendar;
