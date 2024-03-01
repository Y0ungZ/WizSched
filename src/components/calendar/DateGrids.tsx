import { getDate, isSaturday, isSunday, isToday } from 'date-fns';
import { DAYS } from '@/constants/calendar';

const DateGrids = ({ prevMonthDates, currMonthDates, nextMonthDates }: DateGridsProps) => {
  return (
    <div className="grid grid-cols-7 gap-y-2">
      {DAYS.map((day) => (
        <div key={day} className="bg-green font-accent text-lg text-white">
          {day}
        </div>
      ))}
      {prevMonthDates().map((el) => (
        <div key={el.toISOString()} className="text-gray">
          {getDate(el)}
        </div>
      ))}
      {currMonthDates().map((el) => (
        <div
          key={el.toISOString()}
          className={`font-semibold hover:bg-green hover:text-white ${
            isToday(el) ? 'bg-yellow ' : ''
          }${isSaturday(el) ? 'text-blue ' : ''}${isSunday(el) ? 'text-red ' : ''}cursor-pointer`}
        >
          {getDate(el)}
        </div>
      ))}
      {nextMonthDates().map((el) => (
        <div key={el.toISOString()} className="text-gray">
          {getDate(el)}
        </div>
      ))}
    </div>
  );
};

interface DateGridsProps {
  prevMonthDates: () => Date[];
  currMonthDates: () => Date[];
  nextMonthDates: () => Date[];
}

export default DateGrids;
