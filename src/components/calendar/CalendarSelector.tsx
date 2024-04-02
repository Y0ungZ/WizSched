import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/fallback/ErrorFallback';
import LoadingFallback from '@/components/fallback/LoadingFallback';
import { useSuspenseCalendarList } from '@/hooks/queries/calendar';

const CalendarDropDown = () => {
  const { data } = useSuspenseCalendarList();

  // 드롭다운 구현 예정
  return <div>{data.items?.map((data) => <div key={data.etag}>{data.summary}</div>)}</div>;
};

const CalendarSelector = () => {
  return (
    <div className="py-4">
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <CalendarDropDown />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
};

export default CalendarSelector;
