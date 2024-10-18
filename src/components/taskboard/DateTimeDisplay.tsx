import { format, Locale } from 'date-fns';

const DateTimeDisplay = ({ dateTime, localeCode }: DateTimeDisplayProps) => {
  const date = format(dateTime, 'PP', { locale: localeCode });
  const day = format(dateTime, 'EEE', { locale: localeCode });
  const time = format(dateTime, 'HH:mm', { locale: localeCode });

  const isoString = dateTime.toISOString();

  return (
    <time dateTime={isoString}>
      <span className="inline-block h-6 rounded border border-navy bg-white px-1 text-navy">
        {date}
      </span>
      <span className="mx-1 inline-block h-6 w-6 rounded-full bg-navy text-white">{day}</span>
      <span className="inline-block rounded bg-black px-1 text-lime-500">{time}</span>
    </time>
  );
};

interface DateTimeDisplayProps {
  dateTime: Date;
  localeCode: Locale;
}

export default DateTimeDisplay;
