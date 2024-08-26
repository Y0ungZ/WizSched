import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { PropsWithChildren } from 'react';
import { EventType } from '@/constants/task';
import { SortableItem } from './SortableItem';

const SortableContainer = ({ id, items }: SortableContainerProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const isOverClass = isOver ? 'text-amber-500' : 'text-black';

  const itemIds = items.map((item) => item.id);

  return (
    <SortableContext id={id} items={itemIds} strategy={verticalListSortingStrategy}>
      <ul ref={setNodeRef} className={`${isOverClass}`}>
        <span>{id}</span>
        {items.map((item) => (
          <SortableItem id={item.id} key={item.id}>
            {item.summary}
          </SortableItem>
        ))}
      </ul>
    </SortableContext>
  );
};

interface SortableContainerProps extends PropsWithChildren {
  id: string;
  items: EventType[];
}

export default SortableContainer;
