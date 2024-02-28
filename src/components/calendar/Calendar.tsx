import DateGrids from '@/components/calendar/DateGrids';
import MonthNavigation from '@/components/calendar/MonthNavigation';
import useCalendar from '@/hooks/useCalendar';

const Calendar = () => {
  const { currentDate, prevMonth, nextMonth, prevMonthDates, currMonthDates, nextMonthDates } =
    useCalendar();

  return (
    <div>
      {/* 구글 캘린더 목록 영역 */}
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
