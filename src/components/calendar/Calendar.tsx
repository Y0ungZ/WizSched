import CalendarSelector from '@/components/calendar/CalendarSelector';
import DateGrids from '@/components/calendar/DateGrids';
import MonthNavigation from '@/components/calendar/MonthNavigation';
import { useAuthContext } from '@/contexts/AuthProvider';
import useCalendar from '@/hooks/useCalendar';

const Calendar = () => {
  const { currentDate, prevMonth, nextMonth, prevMonthDates, currMonthDates, nextMonthDates } =
    useCalendar();
  const { user } = useAuthContext();

  return (
    <div>
      {user && <CalendarSelector />}
      <MonthNavigation date={currentDate} prevMonth={prevMonth} nextMonth={nextMonth} />
      <DateGrids
        prevMonthDates={prevMonthDates}
        currMonthDates={currMonthDates}
        nextMonthDates={nextMonthDates}
      />
    </div>
  );
};

export default Calendar;
