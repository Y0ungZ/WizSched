import { instance } from '@/apis/axiosInstance';

const getCalendarList = async (): Promise<GoogleAppsScript.Calendar.Schema.CalendarList> => {
  const { data } = await instance.get('/users/me/calendarList');
  return data;
};

export { getCalendarList };
