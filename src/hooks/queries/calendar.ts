import { useSuspenseQuery } from '@tanstack/react-query';
import { getCalendarList } from '@/apis/googleCalendar';
import QUERY_KEYS from '@/constants/queryKeys';

export const useSuspenseCalendarList = () => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.calendar.list],
    queryFn: getCalendarList,
  });

  return { data };
};
