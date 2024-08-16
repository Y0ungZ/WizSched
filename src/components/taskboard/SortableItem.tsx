import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PropsWithChildren } from 'react';

const Item = ({ id, dragOverlay, children }: ItemProps) => {
  return (
    <div className={`${dragOverlay ? 'cursor-grab' : 'cursor-grabbing'}`}>
      {children} {id}
    </div>
  );
};

const SortableItem = ({ id, children }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`h-10 w-20 select-none bg-yellow font-semibold text-red hover:bg-green ${
        isDragging === true && 'opacity-50'
      }`}
    >
      <Item id={id} dragOverlay={isDragging} />
      <button
        className={`touch-none hover:text-blue ${isDragging ? 'cursor-grab' : 'cursor-grabbing'}`}
        {...listeners}
        {...attributes}
      >
        ☰
      </button>
      {children}
    </li>
  );
};

interface ItemProps extends PropsWithChildren {
  id: UniqueIdentifier;
  dragOverlay: boolean;
}

interface SortableItemProps extends PropsWithChildren {
  id: UniqueIdentifier;
}

export { Item, SortableItem };
