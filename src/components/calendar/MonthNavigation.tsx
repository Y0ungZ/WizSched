import { getMonth, getYear } from 'date-fns';
import LeftArrow from '@/assets/image/chevron-left.svg?react';
import RightArrow from '@/assets/image/chevron-right.svg?react';
import Button from '@/components/button/Button';

const MonthNavigation = ({ date, prevMonth, nextMonth }: MonthNavigationProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="basis-1/3 font-accent text-lg">{getYear(date)}년</span>
      <span className="basis-1/3 font-accent text-lg">{getMonth(date) + 1}월</span>
      <div className="basis-1/3">
        <Button onClick={() => prevMonth()} variant="outlined" color="success" ariaLabel="이전 월">
          <LeftArrow className="h-5 w-5 text-green" aria-hidden="true" />
        </Button>
        <Button onClick={() => nextMonth()} variant="outlined" color="success" ariaLabel="다음 월">
          <RightArrow className="h-5 w-5 text-green" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

interface MonthNavigationProps {
  date: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

export default MonthNavigation;
