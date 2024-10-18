import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ko } from 'date-fns/locale';
import { PropsWithChildren } from 'react';
import { EventType } from '@/constants/task';
import DateTimeDisplay from './DateTimeDisplay';
import { SortableItem } from './SortableItem';

const SortableContainer = ({ id, items }: SortableContainerProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const isOverClass = isOver ? 'text-yellow' : 'text-white';
  const itemIds = items.map((item) => item.id);

  return (
    <SortableContext id={id} items={itemIds} strategy={verticalListSortingStrategy}>
      <ul className="my-2" ref={setNodeRef}>
        <p className={`${isOverClass} bg-green font-accent`}>{id}</p>
        {!items.length && <span>없음</span>}
        {items.map((item) => {
          const startDateTime = item.start?.dateTime ? new Date(item.start.dateTime) : null;
          const endDateTime = item.end?.dateTime ? new Date(item.end.dateTime) : null;
          return (
            <SortableItem id={item.id} key={item.id}>
              <div>{item.summary}</div>
              <div>
                <div>
                  <span className="mr-1 font-accent text-yellow drop-shadow-md">start</span>
                  {startDateTime && <DateTimeDisplay dateTime={startDateTime} localeCode={ko} />}
                </div>
                <div>
                  <span className="mr-1 font-accent text-red drop-shadow-md">end</span>
                  {endDateTime && <DateTimeDisplay dateTime={endDateTime} localeCode={ko} />}
                </div>
              </div>
            </SortableItem>
          );
        })}
      </ul>
    </SortableContext>
  );
};

interface SortableContainerProps extends PropsWithChildren {
  id: string;
  items: EventType[];
}

export default SortableContainer;
