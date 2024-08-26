import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  DragOverEvent,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useState } from 'react';
import { ContainerType, EventType } from '@/constants/task';
import SortableContainer from './SortableContainer';
import { Item } from './SortableItem';

const DragDropBoard = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  const [items, setItems] = useState<ContainerType>({
    backlog: [
      {
        kind: 'calendar#event',
        summary: '테스트',
        description: '설명입니다...',
        created: '2024-08-16T04:48:35.000Z',
        etag: '1234567890',
        id: 'asdfasdfasdf',
        sequence: 0,
        start: { dateTime: '2024-08-16T14:00:00+09:00', timeZone: 'Asia/Seoul' },
        end: { dateTime: '2024-08-16T15:00:00+09:00', timeZone: 'Asia/Seoul' },
      },
      {
        kind: 'calendar#event',
        summary: '진돗개',
        description: '멍멍 왈왈 짖습니다.',
        created: '2024-08-16T04:48:35.000Z',
        etag: '1233333333',
        id: 'sdgggsdgg',
        sequence: 1,
        start: { dateTime: '2024-08-16T14:00:00+09:00', timeZone: 'Asia/Seoul' },
        end: { dateTime: '2024-08-16T15:00:00+09:00', timeZone: 'Asia/Seoul' },
      },
      {
        kind: 'calendar#event',
        summary: '고냥이',
        description: '냥냥 짖을까요...',
        created: '2024-08-16T04:48:35.000Z',
        etag: '677788877',
        id: 'sgggggg',
        sequence: 2,
        start: { dateTime: '2024-08-16T14:00:00+09:00', timeZone: 'Asia/Seoul' },
        end: { dateTime: '2024-08-16T15:00:00+09:00', timeZone: 'Asia/Seoul' },
      },
    ],
    weekly: [
      {
        kind: 'calendar#event',
        summary: '영구',
        description: '아마 짖지 않습니다... ',
        created: '2024-08-16T04:48:35.000Z',
        etag: '1234455566890',
        id: 'asdffgesdfffsdf',
        sequence: 3,
        start: { dateTime: '2024-08-16T14:00:00+09:00', timeZone: 'Asia/Seoul' },
        end: { dateTime: '2024-08-16T15:00:00+09:00', timeZone: 'Asia/Seoul' },
      },
    ],
  });
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveId(String(active.id));
  };

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeSortableData = active.data.current?.sortable;
    const overSortableData = over.data.current?.sortable;

    const activeContainer = activeSortableData.containerId;
    const overContainer = overSortableData ? overSortableData.containerId : overId;

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeFindIndex = items[activeContainer].findIndex((data) => data.id === id);
        const activeIndex = activeFindIndex === -1 ? 0 : activeFindIndex;
        const overFindIndex = items[overContainer].findIndex((data) => data.id === overId);
        const overIndex = overFindIndex === -1 ? 0 : overFindIndex;

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          items[activeContainer][activeIndex],
        );
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id;

    if (!overId) {
      setActiveId(null);
      return;
    }

    if (id !== overId) {
      const activeSortableData = active.data.current?.sortable;
      const overSortableData = over.data.current?.sortable;

      const activeContainer = activeSortableData ? activeSortableData.containerId : id;
      const overContainer = overSortableData ? overSortableData.containerId : overId;

      const activeFindIndex = items[activeContainer].findIndex((data) => data.id === id);
      const activeIndex = activeFindIndex === -1 ? 0 : activeFindIndex;
      const overFindIndex = items[overContainer].findIndex((data) => data.id === overId);
      const overIndex = overFindIndex === -1 ? 0 : overFindIndex;

      setItems((items) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...items,
            [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
          };
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            items[activeContainer][activeIndex],
          );
        }

        return newItems;
      });
    }

    setActiveId(null);
  };

  const moveBetweenContainers = (
    items: ContainerType,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: EventType,
  ) => {
    return {
      ...items,
      [activeContainer]: [
        ...items[activeContainer].slice(0, activeIndex),
        ...items[activeContainer].slice(activeIndex + 1),
      ],
      [overContainer]: [
        ...items[overContainer].slice(0, overIndex),
        item,
        ...items[overContainer].slice(overIndex),
      ],
    };
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div>
        {Object.keys(items).map((containerId) => (
          <SortableContainer id={containerId} items={items[containerId]} key={containerId} />
        ))}
        <DragOverlay wrapperElement="ul" className="opacity-50">
          {activeId ? <Item id={activeId} dragOverlay /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

// interface DragDropTaskBoardProps {}

export default DragDropBoard;
