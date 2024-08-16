import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { PropsWithChildren } from 'react';
import { SortableItem } from './SortableItem';

const SortableContainer = ({ id, items }: SortableContainerProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const isOverClass = isOver ? 'text-amber-500' : 'text-black';

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
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
  // TODO : 데이터 타입 명시 필요
  items: any;
}

export default SortableContainer;
