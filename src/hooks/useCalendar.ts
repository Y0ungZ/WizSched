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
  isSameDay,
  endOfWeek,
} from 'date-fns';
import { useState } from 'react';

const useCalendar = (): CalendarResult => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = () => {
    return new Date(getYear(currentDate), getMonth(currentDate), 1);
  };

  const lastDayOfMonth = () => {
    return new Date(getYear(currentDate), getMonth(currentDate) + 1, 0);
  };

  const prevMonthDates = () => {
    // 주의 첫일과 월의 첫일이 같으면 이전 달 날짜 배열은 빈 배열 리턴.
    if (isSameDay(firstDayOfMonth(), startOfWeek(firstDayOfMonth()))) {
      return [];
    }

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
    // 주의 말일과 월의 말일이 같으면 이전 달 날짜 배열은 빈 배열 리턴.
    if (isSameDay(lastDayOfMonth(), endOfWeek(lastDayOfMonth()))) {
      return [];
    }

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

interface CalendarResult {
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
