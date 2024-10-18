import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PropsWithChildren } from 'react';

const Item = ({ dragOverlay, children }: ItemProps) => {
  return <div className={`${dragOverlay ? 'cursor-grab' : 'cursor-grabbing'}`}>{children}</div>;
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
      className={`flex select-none items-center justify-evenly border border-zinc-400 bg-gray font-semibold shadow-md hover:opacity-70 ${
        isDragging === true && 'opacity-50'
      }`}
    >
      <Item id={id} dragOverlay={isDragging} />
      <button
        className={`my-2 h-6 w-6 touch-none border border-b-zinc-400 border-r-zinc-400 text-white shadow-md
          hover:bg-neutral-500 ${isDragging ? 'cursor-grab' : 'cursor-grabbing'}`}
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
  id: string;
  dragOverlay: boolean;
}

interface SortableItemProps extends PropsWithChildren {
  id: string;
}

export { Item, SortableItem };
